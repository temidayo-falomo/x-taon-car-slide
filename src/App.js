import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Page from './components/page/Page';
import {BsFillCaretRightSquareFill, BsFillCaretLeftSquareFill} from 'react-icons/bs'
import {BsPinterest, BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'

const SlideShow = ({imgs}) => {
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    setIndex(0)
  }, [])

  const next = () => {
    if(index === imgs.length - 1) {
      setIndex(0)
    }else {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if(index === 0) {
      setIndex(imgs.length - 1)
    }else {
      setIndex(index - 1)
    }
  }


  return <div className='slideshow'>
    <img className='cover' src={imgs[index]} alt=''/>
    <div className='actions'>
      <button onClick={prev}><BsFillCaretLeftSquareFill/></button>
      <button onClick={next}><BsFillCaretRightSquareFill /></button>
    </div>
  </div>
}

function App() {
  return (
    <div className="App">
      <Page />
      <SlideShow
      imgs={[
        './assets/cagdas-yalman-xtaon-01 1.svg',
        './assets/back.svg',
        './assets/side.svg',
        './assets/top.svg'
      ]}
      />
       <ul className="social-media">
          <li><a href="/"><BsPinterest /></a></li>
          <li><a href="/"><BsGithub /></a></li>
          <li><a href="/"><BsInstagram /></a></li>
          <li><a href="/"><BsFacebook /></a></li>
        </ul>
    </div>
  );
}

export default App;
