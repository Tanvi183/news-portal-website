import React from 'react';
import { format } from "date-fns";
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 pt-5'>
            <img className='w-8/12 md:w-[400px] mx-auto' src={logo} alt="website logo" />
            <p className='text-center text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>
                {
                    format(new Date(), "EEEE , MMMM MM , yyyy")
                }
            </p>
        </div>
    );
};

export default Header;