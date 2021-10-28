import React from 'react'
import './home.css'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

function Home() {
    return (
        <div className='home'>
            <Posts/>
            <Sidebar/>
        </div>
    )
}

export default Home
