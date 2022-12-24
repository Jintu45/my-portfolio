import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({project}) => {
    const {name, img, details} = project;
    return (
        <div>
            <p></p>
            <div className="card w-96 glass ">
                <figure><img className='h-80' src={img} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-semibold">{name}</h2>
                    <p className=' text-slate-300 text-justify'>
                    <>
                        {
                            details.length > 80 ? 
                            <span>{details.slice(0, 80) + '... '}
                            </span>
                            :
                            <p className='mb-1'>{details}</p>
                        }
                    </>
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/projectsDetails/${project._id}`}><button className='btn btn-primary'>Details Website</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;