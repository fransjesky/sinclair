import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import GlyphText from '@/components/Layout/GlyphText';
import Describer from '@/components/Layout/Describer';
import { comfortaa } from '@/theme/Typography';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Biography() {
  const mobile = useAppSelector((state) => state.global.isMobile);
  const [showMore, setShowMore] = useState(false);
  const readMore = () => {
    if (showMore) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };
  return (
    <Box
      component='div'
      sx={{
        height: 'auto',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <Box component='div' sx={{ marginBottom: '1rem' }}>
        <GlyphText
          english='short biography'
          japanese='ショートバイオグラフィー'
          size={mobile ? 'medium' : 'large'}
        />
      </Box>
      {showMore ? (
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
            <Typography
              sx={{
                fontFamily: comfortaa.style.fontFamily,
                fontSize: '0.75rem',
              }}
            >
              <strong style={{ color: '#2196f3' }}>Frans Jesky Yeremi</strong>{' '}
              (born June 26, 1991), better known as Jesky, is a{' '}
              <strong style={{ color: '#2196f3' }}>Frontend Developer</strong>.
              He has had an interest in programming and computers since he was a
              kid and discovered Windows 95. Most people around him know that
              he&apos;s good with computers. At senior high school, he learned
              the programming language C++ from a close friend and develop his
              skills autodidact.
              <br />
              <br />
              After graduating from high school in 2010, he went to{' '}
              <strong style={{ color: '#2196f3' }}>
                Atmajaya Catholic University
              </strong>{' '}
              and took International Law Faculty to follow his late
              father&apos;s path as a lawyer. However, he was not interested in
              studying law. So, while attending the university, he continued to
              develop his programming skills from the internet and gained even
              more interest in programming and computer hardware engineering.
              <br />
              <br />
              In 2013, he decided to focus on learning how to create website
              apps by using low-code platforms like WordPress, et cetera.
              However, at that time, he also had another hobby and dream, which
              was music. He then applied and got accepted at the{' '}
              <strong style={{ color: '#2196f3' }}>
                Institute of Music Indonesia (IMI)
              </strong>
              . While attending the music college, he did some freelance work as
              well.
              <br />
              <br />
              Years have passed, and in 2015, after discussing it with his
              mother and main family, he decided to go to{' '}
              <strong style={{ color: '#2196f3' }}>Japan</strong> and focus on
              studying computer science there. After spending a year learning
              Japanese at{' '}
              <strong style={{ color: '#2196f3' }}>
                Kyoshin Language Academy
              </strong>
              , which is a Japanese language school, he finally got accepted at{' '}
              <strong style={{ color: '#2196f3' }}>
                京都コンピュータ学院 (Kyoto Computer College)
              </strong>
              . While living and studying in Japan, he also built his first PC
              with the budget he got from working as a part-timer in a
              restaurant.
              <br />
              <br />
              Returning from Japan after living there for about 3 years, he was
              introduced to bootcamp by his mother and decided to try and join{' '}
              <strong style={{ color: '#2196f3' }}>Hacktiv8</strong>, a
              programming bootcamp that focused on teaching full-stack
              javascript web development. Feeling a lack of experience and
              networking, he joined another bootcamp called{' '}
              <strong style={{ color: '#2196f3' }}>Impactbyte</strong>.
              <br />
              <br />
              After graduating from Impactbyte in early 2020, the year of the
              Corona virus pandemic, he got a job offer from the graduation
              ceremony, and in late 2020, he finally got his first full-time job
              as a frontend developer at{' '}
              <strong style={{ color: '#2196f3' }}>Xcidic</strong>, a start-up
              IT company based in Singapore.
            </Typography>
          </Container>
        </Box>
      ) : (
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
            <Typography
              sx={{
                fontFamily: comfortaa.style.fontFamily,
                fontSize: '0.75rem',
              }}
            >
              <strong style={{ color: '#2196f3' }}>Frans Jesky Yeremi</strong>{' '}
              (born June 26, 1991), better known as Jesky, is a{' '}
              <strong style={{ color: '#2196f3' }}>Frontend Developer</strong>.
              He has had an interest in programming and computers since he was a
              kid and discovered Windows 95. Most people around him know that
              he&apos;s good with computers. At senior high school, he learned
              the programming language C++ from a close friend and develop his
              skills autodidact.....
            </Typography>
          </Container>
        </Box>
      )}
      {showMore ? (
        <Button
          onClick={readMore}
          sx={{
            minWidth: '10rem',
            padding: '0.5rem 3rem',
            border: '0.125rem solid #2196f3',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            color: '#ffffff',
            backgroundColor: '#2196f3',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#ffffff',
              backgroundColor: '#2196f3',
            },
          }}
        >
          Hide Article
        </Button>
      ) : (
        <Button
          onClick={readMore}
          sx={{
            minWidth: '10rem',
            padding: '0.5rem 3rem',
            border: '0.125rem solid #2196f3',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            color: '#ffffff',
            backgroundColor: '#2196f3',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#ffffff',
              backgroundColor: '#2196f3',
            },
          }}
        >
          Read More
        </Button>
      )}
      <Box component='div' sx={{ margin: '2rem 0' }}>
        <Describer />
      </Box>
    </Box>
  );
}
