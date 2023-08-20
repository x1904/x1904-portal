'use client'

import skillsData from '../../data/skills.json';
import { useState } from 'react';

interface Skills {
    skills: string[];
   }

const Jobs: React.FC = () => {
    const data: Skills = skillsData
    const containerStyle = {
        border: "1px solid black",
        width: "100%"
    }
   
    return (
        <div className="my-8 lg:my-2 w-full">
            <h1 className="w-full text-3xl font-bold text-center">
                {/* <h3 className="underline border-blue-400">Jobs</h3> */}
                Skills
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
            <div className="grid text-center md:grid-cols-4 lg:mb-0 lg:text-left">
                {data.skills.map(skill => (
                    <div key={skill} className="group rounded-lg border border-transparent px-5 py-4 transition-colors" >
                        <div
                            className={`text-center mb-3 text-2xl font-semibold`}
                            >
                            <h2 className={`m-0 max-w-[60ch] text-xl`}>{skill}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jobs