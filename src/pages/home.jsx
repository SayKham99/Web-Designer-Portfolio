import React from 'react';
import Layout from "../layout/layout";
import Carousel from "../components/Home/carousel/carousel";
import About from "../components/Home/smallAbout/about";
import ICan from "../components/Home/iCan/iCan";
import Partners from "../components/Home/partners/partners";
import Swiper from "../components/Home/swiper/swiper";

function Home() {
    return (
        <Layout>
            {/*<Carousel/>*/}
            <Swiper/>
            <About/>
            <ICan/>
            <Partners/>
        </Layout>
    );
}

export default Home;