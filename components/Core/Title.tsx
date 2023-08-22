import { useMemo } from 'react';
import { FileLoader } from 'three';
import { useThree, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface TitleTypes {
  started: boolean;
}

interface TextTypes {
  color?: string;
  text: string;
  font: string;
  fontSize: number;
  xPosition?: number;
  yPosition?: number;
}

const renderTitle = ({
  color,
  text,
  font,
  fontSize,
  xPosition,
  yPosition,
}: TextTypes) => (
  <Text
    color={color ? color : '#ffffff'}
    anchorX='center'
    anchorY='middle'
    font={font}
    fontSize={fontSize}
    position={[xPosition ? xPosition : 0, yPosition ? yPosition : 0, 0]}
  >
    {text}
  </Text>
);

export default function Title(props: TitleTypes) {
  const { viewport } = useThree();
  const aspect = viewport.aspect;
  const montserrat = '/Montserrat.ttf';
  const notoSansJP = 'NotoSansJP.ttf';

  useLoader(FileLoader, montserrat);
  useLoader(FileLoader, notoSansJP);

  const title = useMemo(() => {
    return renderTitle({
      text: 'JESKY',
      font: montserrat,
      fontSize: aspect / 1.75,
    });
  }, [aspect]);

  const subTitle = useMemo(() => {
    return renderTitle({
      color: '#2196f3',
      text: 'Frontend Developer',
      font: notoSansJP,
      fontSize: aspect / 12,
      xPosition: aspect * -0.55,
      yPosition: aspect * 0.3,
    });
  }, [aspect]);

  return (
    <group position={[0, 0.05, -3]}>
      {props.started && subTitle}
      {props.started && title}
    </group>
  );
}
