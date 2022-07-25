import React from 'react'
import webImage from '../images/photo-2.png'

function Home() {
    return (
        <div className="alert alert-info mt-5 container" role="alert">
            <img src="/images/photo-1.jpg" width='150px' className='with-border-raidus' alt="My photo" />
            <p>Hello my name is Mohamed. I am a fullstack Web Developer.</p>
            <img src={webImage} style={{width:'100%'}} alt="web" />
        </div>
    )
}

export default Home