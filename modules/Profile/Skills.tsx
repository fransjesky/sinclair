import React from 'react';
import { Box, Container } from '@mui/material';
import Card from '@/components/Layout/Card';

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
  SiVisualstudiocode as VScode,
  SiXcode as Xcode,
} from 'react-icons/si';

export default function Skills() {
  const frontEnd = [
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'Tailwind',
    'Material-UI',
    'JavaScript',
    'React',
    'React Native',
    'Redux',
    'Three.js',
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
        minHeight: '75vh',
        height: '75vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Card
            title='Front-End'
            icon={frontEndIcon}
            list={frontEnd}
            desc={cardDescription[0]}
            scrollable
          />
          <Card
            title='Back-End'
            icon={backEndIcon}
            list={backEnd}
            desc={cardDescription[1]}
            scrollable
          />
          <Card
            title='Utilities'
            icon={utilitiesIcon}
            list={utilities}
            desc={cardDescription[2]}
            scrollable
          />
        </Box>
      </Container>
    </Box>
  );
}
