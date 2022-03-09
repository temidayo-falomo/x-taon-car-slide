import React from 'react'
import Navbar from '../navbar/Navbar'
import './Page.css'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {BsPinterest, BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'


function Page() {
  return (
    <section>
        <Navbar />
        <div className='container'>
            <div className="texts">
                <h1>MIDNIGHT</h1>
                <p>X-TRON is a sport car design by Adobe Substance.</p>
                <button>Explore More<HiArrowNarrowRight /></button>
            </div>
        </div>
    </section>
  )
}

export default Page