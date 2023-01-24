import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import BlogPost from './BlogPost';

const BlogHeader = () => {
  const data = [
    {
      title: 'Tutorial',
      category: 'Reactjs',
    },
  ];

  return (
    <Box>
      <Box bg={'gray'}>
        
        <Center mt={5}>
          {data.map(menus => (
            <Menu key={menus}>
              <MenuButton margin={3} as={Button}>
                {menus.title}
              </MenuButton>
              <MenuList>
                <MenuItem>{menus.category}</MenuItem>
              </MenuList>
            </Menu>
          ))}
        </Center>
      </Box>
      <Box>
        <BlogPost />
      </Box>
    </Box>
  );
};

export default BlogHeader;
