import { useRef, useState, useEffect } from 'react';
import { DoubleSide, Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import {
  useGLTF,
  useAnimations,
  useKeyboardControls,
  Clone,
} from '@react-three/drei';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { useLoader } from '@react-three/fiber';
import {
  RigidBody,
  RapierRigidBody,
  CapsuleCollider,
  CuboidCollider,
} from '@react-three/rapier';
import { Controls } from '@/modules/Hero';
import Annotation from './Annotation';

const JUMP_FORCE = 2;
const MOV_SPEED = 0.005;
const MAX_VEL = 1.2;

interface RobotPropTypes {
  started: boolean;
}

useGLTF.preload('/Models/robot-draco.glb');
useGLTF.preload('/Models/football.glb');

export default function Robot(props: RobotPropTypes) {
  const robotRef = useRef<Group>(null!);
  const rigBodyRef = useRef<RapierRigidBody>(null!);
  const ballRef = useRef<RapierRigidBody>(null!);
  const { nodes, materials, animations }: any = useGLTF(
    'Models/robot-draco.glb'
  );
  const football = useGLTF('Models/football.glb');
  const goalpost = useLoader(OBJLoader, 'Models/goalpost.obj');
  const { actions } = useAnimations(animations, robotRef);

  // state init
  const [lightPosition, setLightPosition] = useState<Vector3>(
    new Vector3(0, -100, 0)
  );
  const [isJumping, setIsJumping] = useState(false);
  const [controllable, setControllable] = useState(false);
  const [distance, setDistance] = useState(0);
  const [hideRobot, setHideRobot] = useState(true);
  const [enterance, setEnterance] = useState(false);
  const [talk, setTalk] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [goal, setGoal] = useState(false);
  const [goalCount, setGoalCount] = useState(0);

  // talk content's state
  const [annotationData, setAnnotationData] = useState<string>('');

  useEffect(() => {
    window.innerWidth <= 600 ? setDistance(0.75) : setDistance(2);
    props.started && !debugMode ? setEnterance(true) : setEnterance(false);
    props.started && setHideRobot(false);

    // debug mode
    setDebugMode(false); // enable this to turn on the debug mode
    debugMode && setControllable(true);
  }, [props.started, debugMode]);

  // movement controls
  const MoveForward = useKeyboardControls((state) => state[Controls.forward]);
  const MoveBackward = useKeyboardControls((state) => state[Controls.backward]);
  const MoveLeft = useKeyboardControls((state) => state[Controls.left]);
  const MoveRight = useKeyboardControls((state) => state[Controls.right]);
  const Jump = useKeyboardControls(
    (state) => state.jump && state[Controls.jump]
  );

  // animation functions
  const idleAnimation = () => {
    actions.Idle?.play();
    actions.Walking?.stop();
    actions.Dance?.stop();
    actions.Wave?.stop();
  };

  const waveAnimation = () => {
    actions.Wave?.play();
    actions.Idle?.stop();
    actions.Walking?.stop();
    actions.Dance?.stop();
  };

  const walkAnimation = () => {
    actions.Walking?.play();
    actions.Idle?.stop();
    actions.Dance?.stop();
    actions.Wave?.stop();
  };

  const danceAnimation = () => {
    actions.Dance?.play();
    actions.Walking?.stop();
    actions.Idle?.stop();
    actions.Wave?.stop();
  };

  const removeAllAnimation = () => {
    actions.Idle?.stop();
    actions.Walking?.stop();
    actions.Dance?.stop();
    actions.Wave?.stop();
  };

  // talk script
  const doTalk = () => {
    setEnterance(false);
    setTalk(true);
    setAnnotationData("Hey there! I'm glad you are here 👋🏻");
    waveAnimation();

    setTimeout(() => {
      idleAnimation();
      setAnnotationData(
        'This website is under development. Please come back later'
      );
    }, 5000);

    setTimeout(() => {
      danceAnimation();
      setAnnotationData(
        'My master is currently working hard to finish this website 😋'
      );
    }, 10000);

    setTimeout(() => {
      setAnnotationData('');
    }, 15000);

    setTimeout(() => {
      idleAnimation();
      setAnnotationData("Hey, do you want to play? Let's play football!");
    }, 20000);

    setTimeout(() => {
      setAnnotationData('');
      setTalk(false);
      removeAllAnimation();
      setControllable(true);
    }, 25000);
  };

  useFrame((state, delta) => {
    if (robotRef.current && rigBodyRef.current) {
      const robot = robotRef.current;
      const rigBody = rigBodyRef.current;
      const impulse = { x: 0, y: 0, z: 0 };
      const linvel = rigBody.linvel();
      let changeRotation = false;

      // uncontrolable animation
      if (enterance && robot.parent!.position.x > distance) {
        robot.parent!.position.x -= delta * 0.5;
        walkAnimation();
      } else if (enterance && robot.parent!.position.x <= distance) {
        robot.rotation.y = -Math.PI * 2.075;
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
          robot.parent!.position.y + 0.15,
          robot.parent!.position.z + 0.25
        )
      );

      // moving
      if (MoveForward && linvel.z > -MAX_VEL && controllable) {
        impulse.z -= delta < 0.005 ? MOV_SPEED : MOV_SPEED * 2;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
        actions.Idle?.stop();
      }

      if (MoveBackward && linvel.z < MAX_VEL && controllable) {
        impulse.z += delta < 0.005 ? MOV_SPEED : MOV_SPEED * 2;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
        actions.Idle?.stop();
      }

      if (MoveLeft && linvel.x > -MAX_VEL && controllable) {
        impulse.x -= delta < 0.005 ? MOV_SPEED : MOV_SPEED * 2;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
        actions.Idle?.stop();
      }

      if (MoveRight && linvel.x < MAX_VEL && controllable) {
        impulse.x += delta < 0.005 ? MOV_SPEED : MOV_SPEED * 2;
        changeRotation = true;
        actions.Running?.play();
        actions.Dance?.stop();
        actions.Idle?.stop();
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
      ballRef.current.setTranslation({ x: 0, y: 0, z: 0 }, true);
      ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }
  };

  const goalBall = () => {
    setGoal(true);
    if (ballRef.current) {
      ballRef.current.setTranslation({ x: 0, y: 0, z: 0 }, true);
      ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }

    setGoalCount(goalCount + 1);

    setTimeout(() => {
      setGoal(false);
    }, 2000);
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
              ? new Vector3(
                  distance < 1
                    ? robotRef.current.parent!.position.x - 0.5
                    : robotRef.current.parent!.position.x - 0.75,
                  robotRef.current.parent!.position.y + 0.25,
                  robotRef.current.parent!.position.z + 0.1
                )
              : new Vector3(0, -1000, 0)
          }
          text={annotationData}
        />
      )}
      <pointLight intensity={0.25} position={lightPosition} />
      {controllable && (
        <RigidBody
          ref={ballRef}
          colliders='ball'
          restitution={1.25}
          scale={0.1}
          position={[0, 0, 0]}
          onIntersectionEnter={({ other }) => {
            if (other.rigidBodyObject?.name === 'void') {
              resetBallPosition();
            }
            if (other.rigidBodyObject?.name === 'goal') {
              goalBall();
            }
          }}
        >
          <Clone object={football.scene} />
        </RigidBody>
      )}
      {controllable && (
        <Annotation
          position={new Vector3(0, 1.4, 0)}
          title='GOAL COUNT'
          text='Goal Count'
          content={`${goalCount}`}
          board
        />
      )}
      {controllable && (
        <rectAreaLight
          width={1.5}
          intensity={1}
          color={goal ? '#69f0ae' : '#18ffff'}
          position={[-3.525, 0, 0]}
          rotation-y={-Math.PI * 0.5}
        />
      )}
      {controllable && (
        <RigidBody
          type='fixed'
          scale={0.003}
          position={[-3.25, -1.05, -0.75]}
          rotation-y={-Math.PI * 0.5}
          colliders='trimesh'
        >
          <Clone object={goalpost} />
        </RigidBody>
      )}
      {controllable && (
        <RigidBody colliders={false} type='fixed' name='goal' sensor>
          <mesh position={[-3.25, -0.75, 0]} rotation-y={Math.PI * 0.5}>
            <planeGeometry args={[1.5, 0.6]} />
            <meshBasicMaterial visible={false} side={DoubleSide} />
            <CuboidCollider
              rotation-y={Math.PI * 0.5}
              position={[0, -0.25, 0]}
              args={[0.75, 0.01, 0.2]}
              sensor
            />
          </mesh>
        </RigidBody>
      )}
      {!hideRobot && (
        <RigidBody
          ref={rigBodyRef}
          scale={0.085}
          position={debugMode ? [0, 0, 0] : [5, 0, 0]}
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
            rotation-y={debugMode ? 0 : -Math.PI / 2}
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
      )}
    </>
  );
}
