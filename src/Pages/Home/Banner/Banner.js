import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css'
import myImg from '../../../image/my-bg2.png'
const Banner = () => {
    const handleType = (count) => {
        
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    return (
        <div className='banner'>
          <div className='grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg m-auto justify-center items-center'>
            <div className='mt-20'>
                <h1 className='text-2xl font-semibold text-cyan-400 mb-3'>Hello! I AM</h1>
                <h1 className='text-8xl sm:text-5xl font-bold text-slate-300 mb-5'>Jintu Paul</h1>
                        <h1 className='text-4xl text text-gray-50 font-semibold mb-4'>
                    I am a {' '}
                    <span className=' text-cyan-400 font-semibold text-4xl' >
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Mern Stack Developer', 'Front End Developer', 'Javascript Developer', 'React Developer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                    </span>
                </h1>
                <button className="btn btn-primary mr-4 px-8">Resume</button>
                <button className="btn btn-secondary px-8">About Me</button>
            </div>

            <div>
                {/* <img src={myImg} alt="" /> */}
            </div>
          </div>
        </div>
    );
};

export default Banner;