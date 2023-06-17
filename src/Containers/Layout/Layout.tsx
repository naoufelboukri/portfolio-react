import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout(props: any) {
    return (
        <>
            <header>
                <h1>
                    <Link to='/'><img src="/favicon.ico" alt="NaanDev"/></Link>
                </h1>
                <Navbar></Navbar>
            </header>
            <main>
                
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;