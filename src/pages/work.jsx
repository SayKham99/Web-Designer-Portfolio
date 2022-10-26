import React from 'react';
import Layout from "../layout/layout";
import WorkHeader from "../components/Work/header/workHeader";
import Projects from "../components/Work/projects/projects";

function Work() {
    return (
        <Layout>
            <WorkHeader/>
            <Projects/>
        </Layout>
    );
}

export default Work;