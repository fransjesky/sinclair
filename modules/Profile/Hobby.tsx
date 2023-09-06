import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Keyboard } from 'swiper/modules';
import SliderButton from '@/components/Layout/SliderButton';
import { comfortaa } from '@/theme/Typography';

// REDUX
import { useAppSelector } from '@/redux/hooks';

// swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function Hobby() {
  const mobile = useAppSelector((state) => state.global.isMobile);
  const [mobileView, setMobileView] = useState(mobile);
  const videoList = [
    'https://www.youtube.com/embed/MvDN-xpedcE?si=aiMOAlOgeBbtacdL',
    'https://www.youtube.com/embed/miLpjEkTstE?si=HW66-Ez1iBc-JNuU',
    'https://www.youtube.com/embed/vTMfTWqdIL4?si=-RWN31RyLusyruYY',
  ];

  useEffect(() => {
    const mobileControl = () => {
      window.innerWidth <= 425 ? setMobileView(true) : setMobileView(false);
    };

    window.addEventListener('resize', mobileControl);
  }, []);

  return (
    <Box
      component='div'
      sx={{
        margin: {
          xs: '2rem 0',
          sm: '2rem 0',
          md: '0',
        },
        minHeight: { xs: '80vh', sm: '70vh' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <Box
        component='article'
        sx={{
          marginBottom: '20px',
          width: {
            xs: '100%',
            sm: '100%',
            md: '50%',
          },
          color: '#ffffff',
          fontSize: '0.75rem',
        }}
      >
        <Container maxWidth='lg'>
          <Box component='div'>
            <Typography
              sx={{
                marginBottom: '1rem',
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: '1.5rem',
              }}
            >
              What are my hobbies?
            </Typography>
            <Typography
              sx={{
                marginBottom: '1rem',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontFamily: comfortaa.style.fontFamily,
                fontWeight: 400,
              }}
            >
              As with most people, I have a lot of hobbies. Some of those
              hobbies are watching movies, listening to music, or even
              gardening. However, since I was a kid, I have always loved playing
              video games. I was really into competitive games.{' '}
              <strong style={{ color: '#2196f3' }}>Overwatch</strong> is one of
              my favorite games of all time. I was really good at it and even
              reached <strong style={{ color: '#2196f3' }}>Grand Master</strong>{' '}
              rank. When I was in college, I started to do live streaming and
              finally decided to start a{' '}
              <strong style={{ color: '#2196f3' }}>YouTube</strong> channel.
              Here is some of it:
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container maxWidth='xl' sx={{ position: 'relative' }}>
        <SliderButton previous />
        <Swiper
          centeredSlides
          effect='coverflow'
          rewind={false}
          grabCursor={true}
          navigation={{
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
          }}
          keyboard={{
            enabled: true,
          }}
          loop={mobileView ? true : false}
          slidesPerView={1}
          spaceBetween={50}
          modules={[Navigation, Keyboard, EffectCoverflow]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            426: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            769: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {videoList.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component='div'
                  sx={{
                    width: '100%',
                    height: {
                      xs: '320px',
                      sm: '360px',
                      md: '400px',
                    },
                  }}
                >
                  <iframe
                    name='Sinclair channel'
                    width='100%'
                    height='100%'
                    src={data}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                    allowFullScreen
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SliderButton />
      </Container>
      <Box component='span' sx={{ marginTop: '1.65rem', width: '100%' }}>
        <Typography
          sx={{
            color: '#d3bc90',
            fontSize: '0.55rem',
            fontWeight: 600,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {mobileView
            ? 'click the arrow to change slide'
            : 'click the arrow or press arrow button on your keyboard to change slide'}
        </Typography>
      </Box>
    </Box>
  );
}
