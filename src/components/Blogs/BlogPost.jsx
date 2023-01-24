import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import './BlogPost.css';

const BlogPost = () => {
  const posts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      category: 'Reactjs',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget laoreet augue, a congue metus. Sed eget magna risus. Sed auctor, odio id bibendum fringilla, magna augue tincidunt velit, vel iaculis est odio euismod velit.',
      imageUrl: require('../../assests/images/js.jpg'),
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      category: 'Nodejs',

      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget laoreet augue, a congue metus. Sed eget magna risus. Sed auctor, odio id bibendum fringilla, magna augue tincidunt velit, vel iaculis est odio euismod velit.',
      imageUrl: require('../../assests/images/js.jpg'),
    },
    {
      title: 'My Third Blog Post',
      author: 'Jane Smith',
      category: 'MongoDB',

      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget laoreet augue, a congue metus. Sed eget magna risus. Sed auctor, odio id bibendum fringilla, magna augue tincidunt velit, vel iaculis est odio euismod velit.',
      imageUrl: require('../../assests/images/js.jpg'),
    },
    {
      title: 'My Fo Blog Post',
      author: 'Jane Smith',
      category: 'JavaScript',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget laoreet augue, a congue metus. Sed eget magna risus. Sed auctor, odio id bibendum fringilla, magna augue tincidunt velit, vel iaculis est odio euismod velit.',
      imageUrl: require('../../assests/images/js.jpg'),
    },
  ];
  return (
    <div className="services-section">
      <p style={{ textAlign: 'center', margin: '20px'}} className="text">
        Welcome to Learn with Coders! We are a community of passionate
        developers, designers, and creators who want to share our knowledge and
        help others learn to code.Our tutorials cover a variety of programming
        languages, including HTML, CSS, JavaScript, Python, and more. We also
        have guides and tutorials on popular web development frameworks and
        libraries, such as React, Angular, and Vue.js.In addition to our written
        tutorials, we also offer video courses and live coding sessions. These
        allow you to watch and learn from experienced developers as they work on
        real-world projects.
      
      </p>{' '}
      {posts.map(post => (
        <div className="card" key={post.title}>
          <div className="card-image">
            <img src={post.imageUrl} alt="blog" />
          </div>
          <div className="card-content">
            <h1 style={{ color: 'black', fontSize: '18px', fontWeight: '700' }}>
              {post.title}
              <p style={{ color: 'gray', fontSize: '12px' }}>
                {post.category}
                <h1 style={{ color: 'green' }}>Created by {post.author}</h1>
              </p>
            </h1>
            <p>{post.content}</p>
            <Link to={'/'}>
              <Button variant={'ghost'} colorScheme={'yellow'}>
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
