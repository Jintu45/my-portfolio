import React from 'react';
import about from '../../../image/portfolio pic.jpg'
import './about.css'
const About = () => {
    return (
       <div className='m-auto py-12'>
            <h2 className="text-3xl text-center font-semibold border-b-4 border-blue-600 pb-3">About Me</h2>
            <div className='  about'>
                <div className='max-w-screen-lg m-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-12'>
                    <div>
                        <h1 className="text-6xl font-bold who-i-am mb-4">WHO I AM</h1>
                        <p className='text-lg text-gray-800 font-semibold text-justify'><strong>Hi my name is jintu paul, </strong> 
                            I am student of habiganj polytechnic institute. I am a front end developer. I always ready to take on new challenge. My childhood dreams was to become a web developer, then i start firstly html, css, bootstrap then i learn tailwind css, javascript, react, nodeJs, mongoDb, expressJs etc. I am confident in my ability to contribute to the success of any organization. I am also a quick learner with excellent communication and problem-solving skills, and I am always looking for opportunities to grow and improve as a developer.
                        </p>
                    </div>

                    <div className='text-center d-flex justify-center items-center'>
                        <img className='h-auto w-full ml-24' src={about} alt="" />
                    </div>
                </div>
            </div>
       </div>
    );
};

export default About;