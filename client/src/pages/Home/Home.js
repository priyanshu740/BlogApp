import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './home.css'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router'

function Home() {
    const [posts,setPosts] = useState([])
    const {search} = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/post/"+search)
            setPosts(res.data)
            // console.log(res);
        }
        fetchPosts()
    }, [search])
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}

export default Home
