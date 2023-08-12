import React, { useRef, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Group, PointLight } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

// components
import Annotation from './Annotation';

export default function Robot(props: any) {
  const robotRef = useRef<Group>(null!);
  const lightRef = useRef<PointLight>(null!);
  const { nodes, materials, animations }: any = useGLTF('Models/robot.glb');
  const { actions } = useAnimations(animations, robotRef);

  // animation states variables
  const [enterance, setEnterance] = useState(false);
  const [observe, setObserve] = useState(false);
  const [standby, setStandby] = useState(false);
  const [talk, setTalk] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  // talk content's state
  const [annotationData, setAnnotationData] = useState<string>('');

  useEffect(() => {
    props.started && !debugMode ? setEnterance(true) : setEnterance(false);

    // debug mode
    setDebugMode(false); // enable this to debug the model
  }, [props.started, debugMode]);

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

  const doTalk = () => {
    setTalk(true);
    setAnnotationData("Hey there! I'm glad you are here 👋🏻");

    setTimeout(() => {
      setAnnotationData("My name's Sinclair and i'm Jesky's AI assistance");
    }, 10000);

    setTimeout(() => {
      setAnnotationData('Please click me anytime if you need help 😋');
    }, 20000);

    setTimeout(() => {
      setAnnotationData('');
    }, 30000);

    setTimeout(() => {
      setAnnotationData('Oh! You are still here.. Enjoying the music?');
    }, 40000);

    setTimeout(() => {
      setAnnotationData('');
    }, 50000);
  };

  const walkAnimation = () => {
    actions['RobotArmature|Robot_Walking']?.play();
    actions['RobotArmature|Robot_Idle']?.stop();
    actions['RobotArmature|Robot_Dance']?.stop();
  };

  const idleAnimation = () => {
    actions['RobotArmature|Robot_Idle']?.play();
    actions['RobotArmature|Robot_Walking']?.stop();
    actions['RobotArmature|Robot_Dance']?.stop();
  };

  const danceAnimation = () => {
    actions['RobotArmature|Robot_Dance']?.play();
    actions['RobotArmature|Robot_Walking']?.stop();
    actions['RobotArmature|Robot_Idle']?.stop();
  };

  useFrame((state, delta) => {
    // animations
    if (enterance && robotRef.current.position.x < 2) {
      robotRef.current.position.x += delta * 0.5;
      walkAnimation();
    } else if (enterance && robotRef.current.position.x >= 2) {
      robotRef.current.rotation.y = -Math.PI + 0.25;
      idleAnimation();
      doObserve();
    } else if (observe && robotRef.current.position.x > -2) {
      robotRef.current.rotation.y = -Math.PI / 2;
      robotRef.current.position.x -= delta * 0.5;
      walkAnimation();
    } else if (observe && robotRef.current.position.x <= -2) {
      robotRef.current.rotation.y = -Math.PI - 0.25;
      idleAnimation();
      doStandby();
    } else if (standby && robotRef.current.position.x < 2) {
      robotRef.current.position.x += delta * 0.5;
      robotRef.current.position.z += delta * 0.25;
      robotRef.current.rotation.y = Math.PI / 2.35;
      walkAnimation();
    } else if (standby && robotRef.current.position.x >= 2) {
      robotRef.current.rotation.y = -Math.PI * 2;
      danceAnimation();
      !talk && doTalk();
    }

    // update lighting
    lightRef.current.position.set(
      robotRef.current.position.x,
      robotRef.current.position.y + 4,
      robotRef.current.position.z + 1
    );
  });

  return (
    <>
      <group
        ref={robotRef}
        scale={0.1}
        position={debugMode ? [0, -1, 0] : [-6, -1, 0]}
        rotation-y={debugMode ? 0 : Math.PI / 2}
        dispose={null}
        {...props}
      >
        {talk && (
          <Annotation
            position={
              robotRef.current
                ? [
                    robotRef.current.position.x - 8.5,
                    robotRef.current.position.y + 3.5,
                    robotRef.current.position.z + 0.1,
                  ]
                : [0, -10, 0]
            }
            text={annotationData}
          />
        )}
        <pointLight ref={lightRef} intensity={0.5} />
        <group name='Root_Scene'>
          <group name='RootNode'>
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
        </group>
      </group>
    </>
  );
}
