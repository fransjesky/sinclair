import { useRef, useState, useEffect, useMemo } from 'react';
import { DoubleSide, Group, Object3D, Vector3 } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import {
  useGLTF,
  useAnimations,
  useKeyboardControls,
  SpotLight,
  Clone,
} from '@react-three/drei';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import {
  RigidBody,
  RapierRigidBody,
  CapsuleCollider,
  CuboidCollider,
} from '@react-three/rapier';
import { Controls } from '@/modules/Hero/Canvas';
import Annotation from './Annotation';
interface RobotPropTypes {
  started: boolean;
}

useGLTF.preload('/Models/robot-draco.glb');
useGLTF.preload('/Models/football.glb');
useGLTF.preload('/Models/goalpost.obj');

const areaLight = (reverse: boolean) => {
  return (
    <rectAreaLight
      width={1.5}
      intensity={10}
      color={reverse ? '#00e5ff' : '#ff5722'}
      position={reverse ? [3.525, 0.75, 0] : [-3.525, -0.75, 0]}
      rotation-y={reverse ? Math.PI * 0.5 : -Math.PI * 0.5}
    />
  );
};

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
  const [chaseLightA, setChaseLightA] = useState<Vector3>(
    new Vector3(0, -100, 0)
  );
  const [chaseLightB, setChaseLightB] = useState<Vector3>(
    new Vector3(0, -100, 0)
  );
  const [chaseDistanceA, setChaseDistanceA] = useState(0);
  const [chaseDistanceB, setChaseDistanceB] = useState(Math.PI);
  const [chaseTargetA] = useState(() => new Object3D());
  const [chaseTargetB] = useState(() => new Object3D());
  const [chaseLightOpacity, setChaseLightOpacity] = useState(0);
  const [chaseLightIntensity, setChaseLightIntensity] = useState(0);
  const [showChaseLight, setShowChaseLight] = useState(true);
  const [isJumping, setIsJumping] = useState(false);
  const [controllable, setControllable] = useState(false);
  const [distance, setDistance] = useState(0);
  const [enterance, setEnterance] = useState(false);
  const [talk, setTalk] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [goalCount, setGoalCount] = useState(0);
  const leftPostLight = useMemo(() => areaLight(false), []);
  const rightPostLight = useMemo(() => areaLight(true), []);

  // movement controls
  const Reset = useKeyboardControls((state) => state[Controls.reset]);
  const MoveForward = useKeyboardControls((state) => state[Controls.forward]);
  const MoveBackward = useKeyboardControls((state) => state[Controls.backward]);
  const MoveLeft = useKeyboardControls((state) => state[Controls.left]);
  const MoveRight = useKeyboardControls((state) => state[Controls.right]);
  const Sprint = useKeyboardControls((state) => state[Controls.sprint]);
  const Jump = useKeyboardControls(
    (state) => state.jump && state[Controls.jump]
  );

  const JUMP_FORCE = 2;
  const MOV_SPEED = 0.005;
  let MAX_VEL = 1.2;

  // talk content's state
  const [annotationData, setAnnotationData] = useState<string>('');

  useEffect(() => {
    window.innerWidth <= 600 ? setDistance(-0.25) : setDistance(-0.5);
    props.started && !debugMode ? setEnterance(true) : setEnterance(false);

    // debug mode
    setDebugMode(false); // enable this to turn on the debug mode
    debugMode && setControllable(true);
  }, [props.started, debugMode]);

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
        'My master is currently working hard to finish this website 🎉'
      );
    }, 10000);

    setTimeout(() => {
      setAnnotationData(
        "Hey, do you want to play with me? Let's play football!"
      );
    }, 15000);

    setTimeout(() => {
      setAnnotationData('');
      setTalk(false);
      removeAllAnimation();
      setControllable(true);
    }, 20000);
  };

  // reset logic
  const resetBallPosition = () => {
    if (ballRef.current) {
      ballRef.current.setTranslation({ x: 0, y: 0, z: 0 }, true);
      ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }
  };

  const goalBall = () => {
    if (ballRef.current) {
      ballRef.current.setTranslation({ x: 0, y: 0, z: 0 }, true);
      ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }

    setGoalCount(goalCount + 1);
  };

  const resetBotPosition = () => {
    if (rigBodyRef.current) {
      rigBodyRef.current.setTranslation({ x: 0, y: -1, z: -1 }, true);
      rigBodyRef.current.setLinvel({ x: 0, y: -1, z: -1 }, true);
    }
  };

  // use frame animations
  useFrame((state, delta) => {
    if (robotRef.current && rigBodyRef.current) {
      const robot = robotRef.current;
      const rigBody = rigBodyRef.current;
      const impulse = { x: 0, y: 0, z: 0 };
      const linvel = rigBody.linvel();
      let changeRotation = false;

      if (Sprint) {
        MAX_VEL = 2;
      } else {
        MAX_VEL = 1.2;
      }

      // uncontrolable animation
      if (enterance && robot.parent!.position.z < distance) {
        robot.parent!.position.z += delta * 0.5;
        walkAnimation();
      } else if (enterance && robot.parent!.position.z >= distance) {
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
          robot.parent!.position.y + 0.2,
          robot.parent!.position.z + 0.2
        )
      );

      // smooth visibility animation of chase light
      if (props.started && !controllable) {
        setTimeout(() => {
          setChaseLightOpacity((state) =>
            state < 1 ? (state += 0.0025) : (state = 1)
          );
          setChaseLightIntensity((state) =>
            state < 3 ? (state += 0.005) : (state = 3)
          );
        }, 5000);
      }

      if (controllable) {
        setChaseLightOpacity((state) =>
          state > 0 ? (state -= 0.01) : (state = 0)
        );

        setChaseLightIntensity((state) =>
          state > 0 ? (state -= 0.01) : (state = 0)
        );

        chaseLightOpacity === 0 && setShowChaseLight(false);
      }

      // chase light motion
      if (props.started) {
        setChaseLightA(
          new Vector3(
            Math.sin(chaseDistanceA) * 2,
            -1,
            Math.cos(chaseDistanceA) * 2
          )
        );
        setChaseDistanceA((state) => (state += delta < 0.005 ? 0.0075 : 0.05));

        setChaseLightB(
          new Vector3(
            Math.sin(chaseDistanceB) * 2,
            -1,
            Math.cos(chaseDistanceB) * 2
          )
        );
        setChaseDistanceB((state) => (state += delta < 0.005 ? 0.0075 : 0.05));
      }

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
        actions.Idle?.play();
      }

      // reset position
      if (Reset && controllable) {
        resetBotPosition();
        resetBallPosition();
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

  return (
    <>
      {talk && (
        <Annotation
          position={
            robotRef.current
              ? new Vector3(
                  distance < 1
                    ? robotRef.current.parent!.position.x - 0.7
                    : robotRef.current.parent!.position.x - 0.75,
                  robotRef.current.parent!.position.y + 0.25,
                  robotRef.current.parent!.position.z + 0.1
                )
              : new Vector3(0, -1000, 0)
          }
          text={annotationData}
        />
      )}
      <pointLight intensity={0.5} position={lightPosition} />
      {props.started && showChaseLight && (
        <>
          <SpotLight
            dispose={null}
            position={[-2, 2, 0]}
            target={chaseTargetA}
            radiusTop={0}
            radiusBottom={1}
            distance={10}
            attenuation={10}
            angle={0.1}
            anglePower={5}
            intensity={chaseLightIntensity}
            opacity={chaseLightOpacity}
            color={0x03a9f4}
            shadowCameraFov={undefined}
            shadowCameraLeft={undefined}
            shadowCameraRight={undefined}
            shadowCameraTop={undefined}
            shadowCameraBottom={undefined}
            shadowCameraNear={undefined}
            shadowCameraFar={undefined}
            shadowBias={undefined}
            shadowMapWidth={undefined}
            shadowMapHeight={undefined}
          />
          <SpotLight
            dispose={null}
            position={[2, 2, 0]}
            target={chaseTargetB}
            radiusTop={0}
            radiusBottom={1}
            distance={10}
            attenuation={10}
            angle={0.1}
            anglePower={5}
            intensity={chaseLightIntensity}
            opacity={chaseLightOpacity}
            color={0x18ffff}
            shadowCameraFov={undefined}
            shadowCameraLeft={undefined}
            shadowCameraRight={undefined}
            shadowCameraTop={undefined}
            shadowCameraBottom={undefined}
            shadowCameraNear={undefined}
            shadowCameraFar={undefined}
            shadowBias={undefined}
            shadowMapWidth={undefined}
            shadowMapHeight={undefined}
          />
        </>
      )}
      <primitive object={chaseTargetA} position={chaseLightA} />
      <primitive object={chaseTargetB} position={chaseLightB} />
      {controllable && (
        <>
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
          <RigidBody
            type='fixed'
            scale={0.003}
            position={[-3.25, -1.05, -0.75]}
            rotation-y={-Math.PI * 0.5}
            colliders='trimesh'
          >
            <Clone object={goalpost} />
          </RigidBody>
          <RigidBody
            type='fixed'
            scale={0.003}
            position={[3.25, -1.05, 0.75]}
            rotation-y={Math.PI * 0.5}
            colliders='trimesh'
          >
            <Clone object={goalpost} />
          </RigidBody>
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
          <RigidBody colliders={false} type='fixed' name='goal' sensor>
            <mesh position={[3.25, -0.75, 0]} rotation-y={Math.PI * 0.5}>
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
          {leftPostLight}
          {rightPostLight}
        </>
      )}
      <RigidBody
        ref={rigBodyRef}
        scale={0.085}
        position={debugMode ? [0, 0, 0] : [0, 0, -5]}
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
        <group ref={robotRef} dispose={null}>
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
