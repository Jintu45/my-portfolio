import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './ProjectDetails.css'
const ProjectDetails = () => {
    const projectDetails = useLoaderData()
    const {img, name, details, item, item1, item2, item3, uses, link, role} = projectDetails
    return (
        <div className=' bg-slate-900 py-20'>
            <h1 className="text-4xl font-semibold text-center mb-16 text-white">{name}</h1>
            <div className='max-w-screen-lg m-auto grid grid-cols-1 lg:grid-cols-2'>
                <div className="card w-full glass">
                    <figure><img className='h-80 w-full' src={img} alt="car!"/></figure>
                    <div className="card-body">
                        <p className=' text-slate-300 text-justify'>{details}</p>
                        <div className="card-actions justify-end">
                    
                        </div>
                    </div>
                </div>

                <div className='py-10 px-8'>
                    <ul>
                        <li className='flex items-center font-semibold text-slate-400 text-lg mb-4'><span className='project-icon'><FaCheck></FaCheck></span> {item}</li>
                        <li className='flex font-semibold text-slate-400 text-lg mb-4'><span className='project-icon'><FaCheck></FaCheck></span>{item1}</li>
                        <li className='flex font-semibold text-slate-400 text-lg mb-4'><span className='project-icon'><FaCheck></FaCheck></span>{item2}</li>
                        <li className='flex font-semibold text-slate-400 text-lg mb-4'><span className='project-icon'><FaCheck></FaCheck></span>{item3}</li>
                    </ul>
                    <h4 className="text-white font-semibold text-lg"><strong className='text-orange-400'>Uses:</strong> {uses}</h4>
                    <div className='mt-10'>
                        <a className="btn btn-success mr-5 mb-4" href={link}>Client Side Code</a>
                        <Link to=''><button className="btn btn-warning mr-5">Server Side Code</button></Link>
                        <a className="btn btn-primary mt-3" href={link}>Live Side Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;