import React from 'react'
import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/SinglePost'
function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
