import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss'


PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.propTypes = {
    posts : []
}

function PostList(props) {
    const {posts} = props;
    return (
        <div className='PostList'>
            <h2>React Hook - PostList</h2>
            <ul>
                {
                    posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostList;