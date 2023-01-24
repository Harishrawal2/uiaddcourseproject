import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import nodeImage from '../../assests/images/node.jpg';
// import JSImage from '../../assests/images/js.jpg';
// import MongoDBImage from '../../assests/images/mongodb.png';
// import reactImage from '../../assests/images/front.jpg';

const Portfolio = () => {
  const [skills] = useState([
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 90 },
    { name: 'MognoDB', level: 90 },
    { name: 'Material UI', level: 90 },
  ]);
  const { colorMode } = useColorMode();

  const projects = [
    {
      title: 'Project 1',
      image: require('../../assests/images/front.jpg'),
      description:
        'This is a sample project that demonstrates my skills in web development.',
      link: 'https://www.project1.com',
    },
    {
      title: 'Project 2',
      image: require('../../assests/images/mongodb.png'),
      description:
        'This is another sample project that showcases my ability to create responsive designs.',
      link: 'https://www.project2.com',
    },
    {
      title: 'Project 3',
      image: require('../../assests/images/js.jpg'),
      description:
        'This project highlights my experience with creating mobile applications.',
      link: 'https://www.project3.com',
    },
    {
      title: 'Project 4',
      image: require('../../assests/images/js.jpg'),
      description:
        'This project highlights my experience with creating mobile applications.',
      link: 'https://www.project3.com',
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const text = [
    'Full Stack Developer',
    'MERN Developer',
    'Node JS Developer',
    'React Developer',
    'Back-End Developer',
    'Front-End Developer',
    'Web Designing',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % text.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <Box
        as="section"
        bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
        color="black"
        textAlign="center"
        py={8}
      >
        <Heading
          as="h1"
          fontSize={['2xl', '3xl', '4xl']}
          className="vector-graphics"
          textTransform={'uppercase'}
          colorScheme={'yellow'}
        >
          <span className="start">Welcome</span> To My{' '}
          <span className="port">Portfolio</span> Website
        </Heading>
        <Heading as="h2" fontSize={['xl', '1xl', '2xl']}>
          My Name is <span style={{ color: '#a3163e' }}>Harish Rawal</span> .
        </Heading>

        <Heading as="h2">
          <span
            style={{
              fontSize: '40px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: '#12d412',
            }}
          >
            {text[index]}
          </span>
        </Heading>
        <Text fontSize="xl" color={'GrayText'} fontWeight="900">
          I have 1.5 Year of Experience as a Freelancer.
        </Text>
      </Box>
      <div className="services-container">
        <h2
          style={{
            marginBottom: '25px',
            fontSize: '30px',
            color: 'GrayText',
            fontWeight: '900',
          }}
        >
          Our Services
        </h2>
        <div className="services-grid">
          <div className="service" style={{ backgroundColor: '#03A9F4' }}>
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>
              We offer custom web development using MERN Stack, MongoDB, React,
              Node, Express services to help bring your ideas to life.
            </p>
          </div>
          <div className="service" style={{ backgroundColor: '#69e469' }}>
            <i className="fas fa-mobile-alt"></i>
            <h3>Front-End Development</h3>
            <p>We specialize in creating high-performing Web Applications.</p>
          </div>
          <div className="service" style={{ backgroundColor: '#d56ae7' }}>
            <i className="fas fa-server"></i>
            <h3>Back-End Development</h3>
            <p>
              We provide Back-End Development in NodeJs Framework to help your
              business scale and grow.
            </p>
          </div>
          <div className="service" style={{ backgroundColor: '#ffa500' }}>
            <i className="fas fa-chart-line"></i>
            <h3>React Development</h3>
            <p>
              We offer React Development services to help you make informed
              business decisions to Create a Websites and Blog.
            </p>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="skills-container">
        <h2
          style={{
            marginBottom: '20px',
            fontSize: '30px',
            color: 'GrayText',
            fontWeight: '900',
          }}
        >
          My Skills
        </h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill">
              <h3 style={{ fontWeight: 'bold' }}>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress-level"
                  style={{ width: `${skill.level}%` }}
                >
                  <p>{skill.level}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* My Experience project section */}
      <div className="projects-container">
        <h2
          style={{
            marginBottom: '20px',
            fontSize: '30px',
            color: 'GrayText',
            fontWeight: '900',
          }}
        >
          My Projects
        </h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="yellow">View Project</Button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* conatct */}
      <div className="contact-container">
        <Heading>
          <Button
            variant={'outline'}
            colorScheme="blackAlpha"
            style={{
              marginBottom: '40px',
              color: 'GrayText',
              fontWeight: '900',
            }}
          >
            Contact Me
          </Button>
        </Heading>
      </div>
    </>
  );
};

export default Portfolio;
