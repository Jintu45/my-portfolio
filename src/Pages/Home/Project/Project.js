import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import './Project.css'
import { useLoaderData } from 'react-router-dom';
const Project = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-server-indol-tau.vercel.app/projects')
        .then(res => res.json())
        .then(data =>{
            setProjects(data)
        })
    }, [])
    // const projects = useLoaderData()
    return (
       <div className='bg-project'> 
         <div className=' py-20'>

            <h2 className='font-bold project-title text-5xl text-emerald-400 text-center mb-16'>My Project</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:text-center gap-5 max-w-screen-xl m-auto'>
            {
                projects.map(project => <SingleProject key={project._id}
                    project={project}
                ></SingleProject>)
            }
            </div>
            </div>
       </div>
    );
};

export default Project;