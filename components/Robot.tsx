import { useRef, useState, useEffect } from 'react';
import { Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei';
import {
  RigidBody,
  RapierRigidBody,
  CapsuleCollider,
} from '@react-three/rapier';
import { Controls } from '@/modules/Hero';
import Annotation from './Annotation';

const JUMP_FORCE = 2;
const MOV_SPEED = 0.005;
const MAX_VEL = 1.25;

interface RobotPropTypes {
  started: boolean;
}

export default function Robot(props: RobotPropTypes) {
  const robotRef = useRef<any>(null!);
  const rigBodyRef = useRef<RapierRigidBody>(null!);
  const ballRef = useRef<RapierRigidBody>(null!);
  const { nodes, materials, animations }: any = useGLTF(
    'Models/robot-draco.glb'
  );
  const { actions } = useAnimations(animations, robotRef);

  // state init
  const [lightPosition, setLightPosition] = useState<Vector3>();
  const [isJumping, setIsJumping] = useState(false);
  const [controllable, setControllable] = useState(false);
  const [step, setStep] = useState(0);
  const [enterance, setEnterance] = useState(false);
  const [observe, setObserve] = useState(false);
  const [standby, setStandby] = useState(false);
  const [talk, setTalk] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  // talk content's state
  const [annotationData, setAnnotationData] = useState<string>('');

  useEffect(() => {
    window.innerWidth <= 600 ? setStep(0.75) : setStep(2);
    props.started && !debugMode ? setEnterance(true) : setEnterance(false);

    // debug mode
    setDebugMode(false);
  }, [props.started, debugMode, robotRef, rigBodyRef]);

  // movement controls
  const MoveForward = useKeyboardControls((state) => state[Controls.forward]);
  const MoveBackward = useKeyboardControls((state) => state[Controls.backward]);
  const MoveLeft = useKeyboardControls((state) => state[Controls.left]);
  const MoveRight = useKeyboardControls((state) => state[Controls.right]);
  // const Jump = useKeyboardControls((state) => state[Controls.jump]);
  const Jump = useKeyboardControls(
    (state) => state.jump && state[Controls.jump]
  );

  // animation functions
  const idleAnimation = () => {
    actions.Idle?.play();
    actions.Walking?.stop();
    actions.Dance?.stop();
  };

  const walkAnimation = () => {
    actions.Walking?.play();
    actions.Idle?.stop();
    actions.Dance?.stop();
  };

  // animation script
  const doObserve = () => {
    setTimeout(() => {
      setEnterance(false);
      setObserve(true);
    }, 5000);
  };

  const doStandby = () => {
    setTimeout(() => {
      setObserve(false);
      setStandby(true);
    }, 5000);
  };

  const danceAnimation = () => {
    actions.Dance?.play();
    actions.Walking?.stop();
    actions.Idle?.stop();
  };

  // talk script
  const doTalk = () => {
    setTalk(true);
    setAnnotationData("Hey there! I'm glad you are here 👋🏻");

    setTimeout(() => {
      setAnnotationData(
        "My name's Sinclair, and I'm Jesky's AI personal assistance"
      );
    }, 10000);

    setTimeout(() => {
      setAnnotationData(
        'Please click on me anytime if you have any questions or need help 😋'
      );
    }, 20000);

    setTimeout(() => {
      setAnnotationData('');
    }, 30000);

    setTimeout(() => {
      setAnnotationData('Oh! You are still here.. Enjoying the music?');
    }, 50000);

    setTimeout(() => {
      setAnnotationData('');
    }, 60000);

    setTimeout(() => {
      setAnnotationData("Hey, do you want to play? Let's play football!");
      setStandby(false);
      setControllable(true);
    }, 70000);

    setTimeout(() => {
      setAnnotationData('');
    }, 75000);
  };

  useFrame((state, delta) => {
    if (robotRef.current && rigBodyRef.current) {
      const robot = robotRef.current;
      const rigBody = rigBodyRef.current;
      const impulse = { x: 0, y: 0, z: 0 };
      const linvel = rigBody.linvel();
      let changeRotation = false;

      // uncontrolable animation
      if (enterance && robot.parent!.position.x < step) {
        robot.parent!.position.x += delta * 0.5;
        walkAnimation();
      } else if (enterance && robot.parent!.position.x >= step) {
        robot.rotation.y = -Math.PI + 0.25;
        idleAnimation();
        doObserve();
      } else if (observe && robot.parent!.position.x > -step) {
        robot.rotation.y = -Math.PI / 2;
        robot.parent!.position.x -= delta * 0.5;
        walkAnimation();
      } else if (observe && robot.parent!.position.x <= -step) {
        robot.rotation.y = -Math.PI - 0.25;
        idleAnimation();
        doStandby();
      } else if (standby && robot.parent!.position.x < step) {
        robot.parent!.position.x += delta * 0.5;
        robot.parent!.position.z += delta * 0.25;
        robot.rotation.y = Math.PI / 3;
        walkAnimation();
      } else if (standby && robot.parent!.position.x >= step) {
        robot.rotation.y = -Math.PI * 2;
        danceAnimation();
        !talk && doTalk();
        rigBody.setTranslation(
          {
            x: robot.parent!.position.x,
            y: robot.parent!.position.y,
            z: robot.parent!.position.z,
          },
          true
        );
      }

      // update light positioning
      setLightPosition(
        new Vector3(
          robot.parent!.position.x,
          robot.parent!.position.y + 0.25,
          robot.parent!.position.z + 0.25
        )
      );

      // moving
      if (MoveForward && linvel.z > -MAX_VEL && controllable) {
        impulse.z -= MOV_SPEED;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
      }

      if (MoveBackward && linvel.z < MAX_VEL && controllable) {
        impulse.z += MOV_SPEED;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
      }

      if (MoveLeft && linvel.x > -MAX_VEL && controllable) {
        impulse.x -= MOV_SPEED;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
      }

      if (MoveRight && linvel.x < MAX_VEL && controllable) {
        impulse.x += MOV_SPEED;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
      }

      // reset animation
      if (!MoveForward && !MoveBackward && !MoveLeft && !MoveRight) {
        actions.Running?.stop();
      }

      // jumping
      if (
        Jump &&
        !isJumping &&
        robot.parent!.position.y <= -0.99 &&
        controllable
      ) {
        rigBody.setLinvel({ x: linvel.x, y: JUMP_FORCE, z: linvel.z }, true);
        actions.Jump?.play();
      }

      // update rigid body
      rigBody.applyImpulse(impulse, true);

      if (changeRotation) {
        const angle = Math.atan2(linvel.x, linvel.z);
        robot.rotation.y = angle;
      }
    }
  });

  const resetBallPosition = () => {
    if (ballRef.current) {
      ballRef.current.setTranslation({ x: 0, y: 1, z: 0 }, true);
      ballRef.current.setLinvel({ x: 0, y: 1, z: 0 }, true);
    }
  };

  const resetBotPosition = () => {
    if (rigBodyRef.current) {
      rigBodyRef.current.setTranslation({ x: 0, y: 0, z: 0 }, true);
      rigBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }
  };

  return (
    <>
      {talk && (
        <Annotation
          position={
            robotRef.current
              ? [
                  step < 1
                    ? robotRef.current.parent!.position.x - 0.5
                    : robotRef.current.parent!.position.x - 0.65,
                  robotRef.current.parent!.position.y + 0.25,
                  robotRef.current.parent!.position.z + 0.1,
                ]
              : [0, -1000, 0]
          }
          text={annotationData}
        />
      )}
      <pointLight intensity={0.5} position={lightPosition} />
      {controllable && (
        <RigidBody
          ref={ballRef}
          colliders='ball'
          restitution={1.5}
          scale={0.1}
          position={[0, 1, 0]}
          onIntersectionEnter={({ other }) => {
            if (other.rigidBodyObject?.name === 'void') {
              resetBallPosition();
            }
          }}
        >
          <mesh>
            <sphereGeometry args={[1, 512, 512]} />
            <meshStandardMaterial />
          </mesh>
        </RigidBody>
      )}
      <RigidBody
        ref={rigBodyRef}
        scale={0.1}
        position={[-4.5, 0, 0]}
        colliders={false}
        lockRotations
        onCollisionEnter={() => {
          setIsJumping(false);
          actions.Jump?.stop();
        }}
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject?.name === 'void') {
            resetBotPosition();
          }
        }}
      >
        <group
          ref={robotRef}
          dispose={null}
          rotation-y={debugMode ? 0 : Math.PI / 2}
        >
          <CapsuleCollider args={[0.9, 1.5]} position={[0, 2.375, 0]} />
          <group
            name='RobotArmature'
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Bone} />
          </group>
          <group
            name='HandR'
            position={[-0.003, 2.37, -0.021]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name='HandR_1'
              geometry={nodes.HandR_1.geometry}
              material={materials.Main}
              skeleton={nodes.HandR_1.skeleton}
            />
            <skinnedMesh
              name='HandR_2'
              geometry={nodes.HandR_2.geometry}
              material={materials.Grey}
              skeleton={nodes.HandR_2.skeleton}
            />
          </group>
          <group
            name='HandL'
            position={[-0.003, 2.37, -0.021]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name='HandL_1'
              geometry={nodes.HandL_1.geometry}
              material={materials.Main}
              skeleton={nodes.HandL_1.skeleton}
            />
            <skinnedMesh
              name='HandL_2'
              geometry={nodes.HandL_2.geometry}
              material={materials.Grey}
              skeleton={nodes.HandL_2.skeleton}
            />
          </group>
        </group>
      </RigidBody>
    </>
  );
}
