import React from 'react';
import './Posts.css';

const posts = [
    {
        id: 5,
        date: 'December 22, 2024',
        title: 'up and running!',
        description: 'finally got the website deployed today! still have to work out some kinks'
    },
    {
        id: 4,
        date: 'December 21, 2024',
        title: 'Getting the hang out it',
        description: 'Added some more stuff to each section on this page to make it look nice :)'
    },
    {
        id: 3,
        date: 'December 20, 2024',
        title: 'Research on React.js',
        description: 'Trying to figure out how this works... Lots of files hah',
    },
    {
        id: 2,
        date: 'December 19, 2024',
        title: 'Finally finished',
        description: 'Today I finished my machine learning exam and I celebrated with some friends.',
    },
    {
        id: 1,
        date: 'December 18, 2024',
        title: 'Day before exam',
        description: 'Last day of studying the concepts of my machine learning class!',
    },
];

const Posts = () => {
    return (
        <div className="posts">
            <h2>Latest Posts</h2>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-entry">
                        <div className="post-date">{post.date}</div>
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-description">{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
