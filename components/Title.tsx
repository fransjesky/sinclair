import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
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

  const title = useMemo(() => {
    return renderTitle({
      text: 'JESKY',
      font: '/Montserrat-Black.ttf',
      fontSize: aspect / 1.75,
    });
  }, [aspect]);

  const subTitle = useMemo(() => {
    return renderTitle({
      color: '#2196f3',
      text: 'Frontend Developer',
      font: '/NotoSansJP-ExtraLight.ttf',
      fontSize: aspect / 12,
      xPosition: aspect * -0.55,
      yPosition: aspect * 0.3,
    });
  }, [aspect]);

  return (
    <group position={[0, 0.25, -2]}>
      {props.started && subTitle}
      {props.started && title}
    </group>
  );
}
