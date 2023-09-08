import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Announcer } from '@/components';
import { useAppSelector, useAppDispatch, playMusic, stopMusic } from '@/redux';
import { HeroCanvas, HeroOverlay } from './Container';

export const Hero = () => {
  const dispatch = useAppDispatch();
  const isStarted = useAppSelector((state) => state.global.isStarted);
  const isControllable = useAppSelector((state) => state.global.isControllable);
  const isMusicPlaying = useAppSelector((state) => state.global.isMusicPlaying);
  const [height, setHeight] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    isStarted &&
      setTimeout(() => {
        setStarted(true);
      }, 500);
    isMusicPlaying ? setMuted(false) : setMuted(true);

    setHeight(window.innerHeight);

    // disable right click
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    // prevent auto scrolling when press spacebar
    const preventSpaceScroll = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', preventSpaceScroll);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', preventSpaceScroll);
    };
  }, [isStarted, isMusicPlaying]);

  const handleMute = () => {
    if (muted) {
      setMuted(false);
      dispatch(stopMusic());
    } else {
      setMuted(true);
      dispatch(playMusic());
    }
  };

  return (
    <Box
      component='div'
      sx={{
        height: { xs: height, sm: '100vh' },
        width: '100%',
      }}
    >
      <HeroCanvas muted={muted} started={started} />
      <HeroOverlay muted={muted} started={started} onClick={handleMute} />
      {started && (
        <Announcer
          start={!muted}
          duration={8}
          icon={<HeadphonesIcon sx={{ color: '#2196f3' }} />}
          message='Music is now playing'
        />
      )}
      {started && (
        <Announcer
          start={muted}
          duration={8}
          icon={<HeadsetOffIcon sx={{ color: '#2196f3' }} />}
          message='Music has stopped'
        />
      )}
      {isControllable && (
        <Announcer
          start={true}
          duration={8}
          icon={<SportsEsportsIcon sx={{ color: '#2196f3' }} />}
          message='Sinclair is now controllable!'
        />
      )}
    </Box>
  );
};
