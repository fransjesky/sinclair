import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

interface AnnouncerType {
  start: boolean;
  duration?: number;
  icon?: React.ReactNode;
  message: string;
}

/* ----------------------------------- DEVEVELOPER'S NOTE -----------------------------------
 * This component depends on the start props. If the state given to start props is always
 * true, then the autohide function would not works. Check the example on modules/Hero/Hero.tsx
 * On the example, the annnouncer is rendered based on isControllable state, however the state
 * will always return true value. So to trigger this announcer once for each render,
 * manually set the start prop with true value.
 * ---------------------------------------------------------------------------------------- */

export const Announcer = ({
  start,
  duration = 8,
  icon = null,
  message,
}: AnnouncerType) => {
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    // reset the previous announcement
    setShowAnnouncement(false);
    let autoHide: ReturnType<typeof setTimeout>;

    // start announcement
    if (start) {
      setShowAnnouncement(true);
      autoHide = setTimeout(() => {
        setShowAnnouncement(false);
      }, duration * 1000);
    }

    return () => {
      clearTimeout(autoHide);
    };
  }, [start, duration]);

  return (
    <Box
      component='div'
      sx={{
        minHeight: '3rem',
        width: 'auto',
        padding: '0.25rem 1rem',
        position: 'fixed',
        top: '6rem',
        left: '50%',
        borderRadius: '0.5rem',
        backgroundColor: '#ffffff',
        transform: 'translate(-50%, 0)',
        opacity: showAnnouncement ? 1 : 0,
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        userSelect: 'none',
        zIndex: showAnnouncement ? 999 : -1,
        boxShadow:
          '0 0.0625rem 0.5rem 0 rgba(0,0,0,.04), 0 0.0625rem 0.3125rem 0 rgba(0,0,0,.04)',
        WebkitBoxShadow:
          '0 0.0625rem 0.5rem 0 rgba(0,0,0,.04), 0 0.0625rem 0.3125rem 0 rgba(0,0,0,.04)',
      }}
    >
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
        <Typography
          sx={{
            marginLeft: '0.5rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};
