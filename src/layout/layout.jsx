import React from 'react';
import Navbar from "../components/usable/navbar/navbar";
import Footer from "../components/usable/Footer/footer";
import './layout.scss'
function Layout({children,color}) {
    return (<div className='main__wrapper'>
        <Navbar/>
        <main>{children}</main>
        <Footer color={color}/>
    </div>);
}

export default Layout;