import React from 'react';
import Navbar from "../components/usable/navbar/navbar";
import Footer from "../components/usable/Footer/footer";
import './layout.scss'
function Layout({children}) {
    return (<div className='main__wrapper'>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>);
}

export default Layout;