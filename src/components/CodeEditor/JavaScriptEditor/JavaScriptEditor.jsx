import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import './JavaScriptEditor.css';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

function JavaScriptEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  function handleChange(event) {
    setCode(event.target.value);
  }

  function handleClick() {
    try {
      // eslint-disable-next-line
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  }

  return (
    <div className="JavaScriptEditor">
      <h1 style={{ fontSize: '30px' }}>JavaScript Compiler</h1>
      <p
        style={{
          color: 'GrayText',
          fontWeight: '700',
        }}
      >
        Write Online code and Enjoy the your software developer journey
      </p>
      <Link to="/compiler">
        <Button colorScheme={'gray'}>
          <BiArrowBack /> Back
        </Button>
      </Link>
      <div className="editor-container">
        <textarea
          className="editor"
          value={code}
          onChange={handleChange}
          placeholder="Enter your JavaScript code here"
        ></textarea>
      </div>
      <div className="button-container">
        <Button colorScheme={'green'} onClick={handleClick}>
          Run Code
        </Button>
      </div>{' '}
      <div className="output-container">
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default JavaScriptEditor;
