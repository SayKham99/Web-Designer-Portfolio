import React from 'react';
import Navbar from "../components/usable/navbar/navbar";
import Footer from "../components/usable/Footer/footer";
import './layout.scss'
import ScrollTop from "../components/usable/ScrollTop/Scroll";

function Layout({children, color}) {
    return (<div className='main__wrapper'>
        <ScrollTop/>
        <Navbar/>
        <main>{children}</main>
        <Footer color={color}/>
    </div>);
}

export default Layout;