import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import GlyphText from '@/components/Layout/GlyphText';
import Describer from '@/components/Layout/Describer';

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
            <strong>Frans Jesky Yeremi</strong> (born June 26, 1991), better
            known as Jesky, is a professional Full Stack Developer. He put
            interest in programming and computer since elementary school. Most
            people around him know that he&apos;s good with computer. At senior
            high school, he learned scripting programming language from his
            close friend and develop his skills autodidact.
            <br />
            <br />
            After graduated from high school in 2010, he went to a Atmajaya
            Catholic University and took International Law faculty to follow his
            late father path. While attending the university, he kept developing
            his programming skills from the internet and gained even more
            interest in programming and computer engineering.
            <br />
            <br />
            Years has passed, in 2015 after discussed it with his mother and
            main family, he decided to go to Japan and focus on studying
            computer science there. After spending a year in Kyoshin, a Japanese
            language school to learn Japanese, he finally went to Kyoto Computer
            College. While living and studying in Japan, he also built his own
            first PC with budget he got from working as a part timer in a
            restaurant.
            <br />
            <br />
            Returning from Japan after living in there for about 3 years, he was
            introduced about bootcamp from his mother and decided to try and
            join Hacktiv8, a programming bootcamp that focused on teaching full
            stack javascript development.
            <br />
            <br />
            After spending about a year in two different bootcamps and doing
            freelance job as web designer for living, he finally got his first
            full time job as a developer in Xcidic, a start up IT company based
            on Singapore.
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
            <strong>Frans Jesky Yeremi</strong> (born June 26, 1991), better
            known as Jesky, is a professional Full Stack Developer. He put
            interest in programming and computer since elementary school. Most
            people around him know that he&apos;s good with computer. At senior
            high school, he learned scripting programming language from his
            close friend and develop his skills autodidact.....
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
