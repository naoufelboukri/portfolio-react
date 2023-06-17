import React from "react";

import './Projects.scss';
import Selected from "../Selected/Selected";
import MockProjects from "./mock-projects";
import Card from "./Card/Card";

function Projects() {

    const cards = MockProjects.map(project => {
        return <Card item={project}></Card>
    })

    return (
        <div className="Projects">
            <Selected>Selected projects</Selected>

            { cards }
        </div>
    )
}

export default Projects;