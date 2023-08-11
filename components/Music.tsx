import { PositionalAudio } from '@react-three/drei';

interface MusicTypes {
  started: boolean;
}

export default function Music(props: MusicTypes) {
  return props.started && <PositionalAudio autoplay loop url='/BGM.mp3' load />;
}
