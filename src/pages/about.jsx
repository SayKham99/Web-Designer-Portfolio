import React from 'react';
import Layout from "../layout/layout";
import Partners from "../components/usable/partners/partners";
import AboutICan from "../components/About/aboutICan/aboutICan";
import AboutHeader from "../components/About/header/aboutHeader";
import Expertise from "../components/About/expertise/expertise";

function About() {
    return (
        <Layout>
            <AboutHeader/>
            <Expertise/>
            <AboutICan/>
            <Partners/>
        </Layout>
    );
}

export default About;