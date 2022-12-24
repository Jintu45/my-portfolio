import React from 'react';
import './Contact.css'
import { FaBeer, FaGlobe, FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg m-auto my-16'>

            <div className=' bg-gray-600 p-10 rounded-l-3xl'>
                <h3 className="text-3xl font-semibold text-white mb-10">Write Us</h3>
                <form action="#">
                <div className="form-group">
                    <input className='border-none w-full form-control' type="email"name="name" id="name" placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <input className='border-none w-full form-control' type="text"name="name" id="name" placeholder="E-mail" required/>
                </div>
                <div className="form-group">
                    <input className='border-none w-full form-control' type="text" name="name" id="name" placeholder="Subject" />
                </div>
                <div className="form-group">
                    <textarea name="Message" className='w-full message' id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className="form-group">
                    <input className='btn btn-warning text-white mt-6' type="submit" value="Send Message"/>
                </div>
                </form>
            </div>

            <div className=' bg-gray-900 p-10 rounded-r-3xl'>
                <h3 className="text-2xl font-semibold text-white mb-10">Contact information</h3>
                <h4 className="text-lg mb-8 text-slate-500">We're open for any suggestion or just to have a chat</h4>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaLocationArrow></FaLocationArrow></span>
                    <div className="text pl-3">
                        <p className='text- text-zinc-400'><span className='text-white'>Address:</span> Habiganj, Sylhet, Bangladesh</p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaPhone></FaPhone></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Phone:</span> <a href="tel://1234567920">+01757146195</a></p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaMailBulk></FaMailBulk></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Email:</span> <a href="/cdn-cgi/l/email-protection#6b02050d042b12041e1918021f0e45080406"><span className="__cf_email__" data-cfemail="533a3d353c132a3c2621203a27367d303c3e">jintupaul45@gmail.com</span></a></p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaGlobe></FaGlobe></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Website: </span> <a href="#">jintupaul45.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;