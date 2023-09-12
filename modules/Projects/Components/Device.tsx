import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { TextureLoader, Color } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Keyboard: THREE.Mesh;
    Body: THREE.Mesh;
    Touchbar: THREE.Mesh;
    Frame: THREE.Mesh;
    Logo: THREE.Mesh;
    Screen: THREE.Mesh;
  };
  materials: {
    Frame: THREE.MeshStandardMaterial;
    Logo: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
  };
};

export function MacbookPro(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('Models/macbook-pro.glb') as GLTFResult;
  const screenRef = useRef<THREE.Mesh>();

  const defineTextureColor = (material: THREE.Material) => {
    if (material instanceof THREE.MeshStandardMaterial) {
      material.color = new THREE.Color(0x1f2025);
      material.color.convertSRGBToLinear();
    }
  };

  const applyScreenTexture = async (texture: any, node: any) => {
    // texture.flipY = false;
    // texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
    // texture.generateMipmaps = false;

    // // Decode the texture to prevent jank on first render
    // await renderer.current.initTexture(texture);

    node.material.color = new Color(0xffffff);
    node.material.transparent = true;
    node.material.map = texture;
  };

  // Traverse the nodes and apply the color
  nodes.Keyboard.traverse((node: any) => {
    if (node.isMesh) {
      defineTextureColor(node.material);
    }
  });

  // Traverse the nodes and apply the color
  nodes.Frame.traverse((node: any) => {
    if (node.isMesh) {
      defineTextureColor(node.material);
    }

    // if (node.name === 'Screen') {
    //       placeholderScreen.current = node.clone();
    //       placeholderScreen.current.material = node.material.clone();
    //       node.parent.add(placeholderScreen.current);
    //       placeholderScreen.current.material.opacity = 1;
    //       placeholderScreen.current.position.z += 0.001;

    //       applyScreenTexture(placeholder, placeholderScreen.current);

    //       loadFullResTexture = async () => {
    //         const image = await resolveSrcFromSrcSet(texture);
    //         const fullSize = await textureLoader.loadAsync(image);
    //         await applyScreenTexture(fullSize, node);
    //       };
    //     }
    //   });
  });

  // Function to apply the screen texture
  // const applyScreenTexture = async (
  //   texture: THREE.Texture,
  //   node: THREE.Mesh
  // ) => {
  //   texture.flipY = false;
  //   texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
  //   texture.generateMipmaps = false;

  //   // Decode the texture to prevent jank on first render
  //   await renderer.current.initTexture(texture);

  //   node.material.color = new Color(0xffffff);
  //   node.material.transparent = true;
  //   node.material.map = texture;
  // };

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load('/assets/preview.jpg', (texture) => {
      applyScreenTexture(texture, screenRef.current);
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard.geometry}
        material={materials.Frame}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Touchbar.geometry}
          material={materials.Frame}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        position={[0, -0.62, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={materials.Logo}
          position={[0, 1.2, -0.106]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 1.2, -0.106]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('Models/macbook-pro.glb');
