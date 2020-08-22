import React, { useState } from "react";
import { projectFields, projectInfo } from './project-info';
import '../../stylesheets/Projects.css'

function Projects() {

    const [projectSelected, setSelectedProject] = useState("project1");

    const selectedProject = () => {

        switch (projectSelected) {
            case "project1":
                return "project-0-selected"

            case "project2":
                return "project2"

            case "project3":
                return "project3"

            default:
                return
        }

    }
    console.log(projectSelected)

    return (

        <section className="" id="projects">

            <div className={projectSelected}>
                <div className="projects-nav">
                    <ul>
                        <li className="projects-nav-item" onClick={() => { setSelectedProject("project1") }}>Last Zoo</li>
                        <li className="projects-nav-item" onClick={() => { setSelectedProject("project2") }}>RADD Counterpick</li>
                        <li className="projects-nav-item" onClick={() => { setSelectedProject("project3") }}>Reservoir</li>
                    </ul>
                </div>

                <div>
                    {projectInfo.map((objectKey, index) => {
                        return (
                            <div className="">
                                <h3>Project name <span className="project-name">{objectKey.projectName}</span> </h3>
                                <p>Project description</p><br></br><p>{objectKey.projectDesc}</p>
                                <p><strong>SDLC Methodology</strong> {objectKey.projectSDLC}</p>
                                <p><strong>Front-end techonologies</strong> {objectKey.projectTechnologies}</p>
                            </div>
                        )
                    })}
                </div>

                <button type="button" class="btn btn-outline-dark">Live demo</button>
            </div>


        </section >

    )
}

export default Projects;