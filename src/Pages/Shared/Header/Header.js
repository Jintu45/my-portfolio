import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo1'
const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Me</Link></li>
              <li><Link to='/skill'>Skill</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <Link className=' flex justify-center items-center' to='/'><img className='ml-20 h-16 w-auto rounded-full' src={logo} alt="" /><h2 className='text-4xl mr-10 font-bold font-mono  text-cyan-600'>JP</h2></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Me</Link></li>
              <li><Link to='/skill'>Skill</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Contact</a>
        </div>
      </div>
    );
};

export default Header;