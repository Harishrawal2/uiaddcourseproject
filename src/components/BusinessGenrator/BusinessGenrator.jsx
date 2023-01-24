import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import randomWords from 'random-words';

function BusinessIdeaGenerator() {
  const [idea, setIdea] = useState('');

  const handleGenerate = () => {
    const industry = randomWords({ exactly: 1, wordsPerString: 2 });
    const action = randomWords({ exactly: 1, wordsPerString: 2 });
    const target = randomWords({ exactly: 1, wordsPerString: 2 });
    setIdea(`A ${industry} service that ${action} for ${target}.`);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={2}>
        Idea Generator
      </Heading>
      <p>
        If you're looking for an idea generator, there are a click button you
        could try:
      </p>
      <Button onClick={handleGenerate} variantColor="teal" mb={4}>
        Generate Idea
      </Button>
      {idea && (
        <Heading as="h3" size="md" mt={4}>
          {idea}
        </Heading>
      )}
    </Box>
  );
}

export default BusinessIdeaGenerator;
