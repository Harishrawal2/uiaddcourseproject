import {
  Button,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import vg from '../../assests/images/bg.png';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import {
  DiNodejs,
  DiJavascript,
  DiJava,
  DiDjango,
  DiPhp,
  DiDatabase,
  DiDotnet,
} from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import introVideo from '../../assests/videos/intro.mp4';
import BusinessGenrator from '../../components/BusinessGenrator/BusinessGenrator';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-left']}
            spacing="5"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />

            <Text
              textAlign={['center', 'left']}
              textShadow={'2px 2px 10px yellow'}
              children="Welcome to Learn with Coders! Our website offers a wide range of resources for those who are just starting out with coding, as well as for experienced developers who want to improve their skills.
              "
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>{' '}
              <Link to="/blog">
                <Button size={'lg'} margin={'5'} colorScheme="gray">
                  Read Blog
                </Button>
              </Link>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>{' '}
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="SKILLS NOTES"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <DiDjango />
          <DiJavascript />
          <DiNodejs />
          <FaReact />
          <SiMongodb />
          <FaPython />
          <DiJava />
          <DiDotnet />
          <DiPhp />
          <DiDatabase />
          <AiOutlineConsoleSql />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BusinessGenrator />
      </div>
    </section>
  );
};

export default Home;
