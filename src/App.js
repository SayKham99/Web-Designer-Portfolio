import React from 'react';
import SwiperCarousel from "./components/Home/swiper/swiper";
import Navbar from "./components/usable/navbar/navbar";
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import Work from "./pages/work";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {
    return (<Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Work'} element={<Work/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/blog'} element={<Blog/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
    </Routes>);
}

export default App;