import React from 'react'
import Post from '../post/Post'
import './posts.css'

function Posts({posts}) {
    return (
        <div className='posts'>
        {posts.map((p) => (
            <Post post={p} key={Math.random() + 1}/>
        ))}
        </div>
    )
}

export default Posts
