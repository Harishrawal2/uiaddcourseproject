import { Button } from '@chakra-ui/react';
import React from 'react';
import './CodeEditor.css';
import { DiJavascript1, DiHtml5 } from 'react-icons/di';
import { Link } from 'react-router-dom';

function CodeEditor() {
  return (
    <div className="CodeEditor-container">
      <h1>
        All CodeEditor <span style={{ color: 'green' }}>Compiler</span>
      </h1>
      <p
        style={{
          color: 'GrayText',
          fontWeight: '900',
        }}
      >
        Write Online code and Enjoy the your software developer journey
      </p>
      <p
        style={{
          fontWeight: '500',
          textTransform: 'uppercase',
        }}
        className="vector-graphics"
      >
        Best of Luck !
      </p>
      <div className="CodeEditor-grid">
        <div className="service-item">
          <h2>
            <DiHtml5 />
            Run HTML and CSS Code Editor
          </h2>
          <p>
            HTML (Hypertext Markup Language) is the standard language used for
            creating web pages. It provides a structure for the content on a
            webpage, using a set of tags and attributes to define the layout,
            text, images, links, and other elements. Web browsers use HTML to
            render the content of a webpage.
          </p>
          <Link to="/frontcode">
            <Button variant={'ghost'} colorScheme={'yellow'}>
              Start Write Code
            </Button>
          </Link>
        </div>
        <div className="service-item">
          <h2>
            <DiJavascript1 />
            Run JavaScript Code Editor
          </h2>
          <p>
            JavaScript is a programming language that is primarily used to
            create interactive and dynamic websites, as well as to build web and
            mobile applications. It is a versatile and powerful language that
            can be used on the front-end (client-side) and back-end
            (server-side) of web development.
          </p>
          <Link to="/jseditor">
            <Button variant={'ghost'} colorScheme={'yellow'}>
              Start Write Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
