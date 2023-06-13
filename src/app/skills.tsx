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
        <div className='max-w-90' >
            <span className='underline font-semibold'>Skills</span>
        <div className="mb-32 grid text-center  md:grid-cols-4 lg:mb-0 lg:grid-cols-8 lg:text-left">
                {data.skills.map(skill => (
                    <div key={skill} className="group rounded-lg border border-transparent px-5 py-4 transition-colors" >
                        <div
                            className={`text-center mb-3 text-2xl font-semibold`}
                            rel="noopener noreferrer"
                            >
                            <h2 className={`m-0 max-w-[60ch] min-w-[30ch] text-sm opacity-50`}>{skill}</h2>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    )
}

export default Jobs