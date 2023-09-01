import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Card from '@/components/Layout/Card';
import GlyphText from '@/components/Layout/GlyphText';
import {
  SiAdobe as Adobe,
  SiAmazonaws as AWS,
  SiAndroidstudio as AndroidStudio,
  SiBootstrap as Bootstrap,
  SiCss3 as CSS,
  SiExpress as Express,
  SiFigma as Figma,
  SiFirebase as Firebase,
  SiGithub as Github,
  SiGit as Git,
  SiHeroku as Heroku,
  SiHtml5 as HTML,
  SiJira as Jira,
  SiJavascript as JavaScript,
  SiMui as MaterialUI,
  SiMongodb as MongoDB,
  SiMysql as MySQL,
  SiNetlify as Netlify,
  SiNextdotjs as NextJS,
  SiNodedotjs as Node,
  SiOpenai as OpenAi,
  SiPostgresql as Postgre,
  SiPostman as Postman,
  SiReact as ReactIcon,
  SiRedux as Redux,
  SiSass as SASS,
  SiSocketdotio as Socket,
  SiStackoverflow as StackOverflow,
  SiTailwindcss as Tailwind,
  SiThreedotjs as ThreeJS,
  SiVercel as Vercel,
  SiVisualstudiocode as VScode,
  SiXcode as Xcode,
} from 'react-icons/si';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Skills() {
  const mobile = useAppSelector((state) => state.global.isMobile);
  const frontEnd = [
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'Tailwind',
    'Material-UI',
    'JavaScript',
    'Next JS',
    'React',
    'React Native',
    'Redux',
    'Three JS',
  ];

  const backEnd = [
    'Node JS',
    'Express',
    'Socket.io',
    'Firebase',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
  ];

  const utilities = [
    'Git',
    'Github',
    'VS Code',
    'Postman',
    'Jira',
    'Vercel',
    'AWS',
    'Netlify',
    'Heroku',
    'Xcode',
    'Android Studio',
    'Adobe',
    'Figma',
    'Stack Overflow',
    'Open AI',
  ];

  // icons
  const frontEndIcon = [
    <HTML key='html' />,
    <CSS key='css' />,
    <SASS key='sass' />,
    <Bootstrap key='bootstrap' />,
    <Tailwind key='tailwind' />,
    <MaterialUI key='mui' />,
    <JavaScript key='jsx' />,
    <NextJS key='next' />,
    <ReactIcon key='react' />,
    <ReactIcon key='react-native' />,
    <Redux key='redux' />,
    <ThreeJS key='threejs' />,
  ];

  const backEndIcon = [
    <Node key='node' />,
    <Express key='express' />,
    <Socket key='socket' />,
    <Firebase key='firebase' />,
    <MongoDB key='mongodb' />,
    <MySQL key='mysql' />,
    <Postgre key='postgre' />,
  ];

  const utilitiesIcon = [
    <Git key='git' />,
    <Github key='github' />,
    <VScode key='vscode' />,
    <Postman key='postman' />,
    <Jira key='jira' />,
    <Vercel key='vercel' />,
    <AWS key='aws' />,
    <Netlify key='netlify' />,
    <Heroku key='heroku' />,
    <Xcode key='xcode' />,
    <AndroidStudio key='android-studio' />,
    <Adobe key='adobe' />,
    <Figma key='figma' />,
    <StackOverflow key='stack-overflow' />,
    <OpenAi key='open-ai' />,
  ];

  // description variables
  const cardDescription = [
    `Also known as a Client side, this is a part of website where user can view and interect with. Most of the features in this section is handling the visual aspects of UI/UX.`,
    `Server side is a process that running behind the scenes. It is responsible for data management, logic and communication with database and other software or devices through API.`,
    `Better known as DevOps, is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.`,
  ];

  return (
    <Box
      component='div'
      sx={{
        minHeight: '70vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          component='div'
          sx={{
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GlyphText
            english='programming skills'
            japanese='プログラミングスキル'
            size={mobile ? 'medium' : 'large'}
          />
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.125rem',
              textAlign: 'center',
            }}
          >
            list of my skills set
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid item>
            <Card
              title='Front-End'
              icon={frontEndIcon}
              list={frontEnd}
              desc={cardDescription[0]}
              scrollable
            />
          </Grid>
          <Grid item>
            <Card
              title='Back-End'
              icon={backEndIcon}
              list={backEnd}
              desc={cardDescription[1]}
              scrollable
            />
          </Grid>
          <Grid item>
            <Card
              title='Utilities'
              icon={utilitiesIcon}
              list={utilities}
              desc={cardDescription[2]}
              scrollable
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
