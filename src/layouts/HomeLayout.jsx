import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>

                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews/>
                </section>

                <nav className="w-11/12 mx-auto my-3">
                    <Navbar/>
                </nav>
            </header>

            <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
                <aside className='col-span-3'>
                    <LeftAside/>
                </aside>

                <section className="main col-span-6">
                    <Outlet/>
                </section>

                <aside className='col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;