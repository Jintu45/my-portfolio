import React from 'react';
import { FaLaptop, FaNode, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiNodejs, IconName } from "react-icons/di";
import skill from '../../../image/choose.png'
import './skill.css'

const Skills = () => {
    return (
        <div className='max-w-screen-xl m-auto py-16'>
            <section>
                <div className='grid grid-cols-1 lg:grid-cols-2 m-auto gap-10'>
                    <div>
                    <h1 className="skill text-5xl skill1 font-bold text-center mb-5 ">My Skills</h1>
                        <p className='text-center mb-8 text-slate-100 text-lg'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
                        <img src={skill} alt="" />
                    
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className="feuters-items text-center bg-slate-100 margin-top ">
                            <div className="feuture-icon">
                                <DiJavascript1></DiJavascript1>
                            </div>
                            <h3 className='py-3 font-semibold text-4xl text-gray-800'>Javascript</h3>
                            <p className=' text-gray-700 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
                        </div>

                        <div className="feuters-items text-center bg-slate-100 margin-btm">
                            <div className="feuture-icon">
                                {/* <FaLaptop></FaLaptop> */}
                                <FaReact></FaReact>
                            </div>
                            <h3 className='py-3 font-semibold text-4xl text-gray-800'>React</h3>
                            <p className=' text-gray-700 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
                        </div>

                        <div className="feuters-items text-center bg-slate-100 margin-top">
                            <div className="feuture-icon">
                                <FaNode></FaNode>
                            </div>
                            <h3 className='py-3 font-semibold text-4xl text-gray-800'>Node Js</h3>
                            <p className=' text-gray-700 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
                        </div> 

                        <div className="feuters-items text-center bg-slate-100 margin-btm">
                            <div className="feuture-icon">
                                <DiMongodb></DiMongodb>
                            </div>
                            <h3 className='py-3 font-semibold text-4xl text-gray-800'>MongoDB</h3>
                            <p className=' text-gray-700 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;