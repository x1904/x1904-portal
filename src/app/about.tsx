// 'use client'

import aboutData from '../../data/about.json';
import {AboutInterface} from './aboutinterface';
import { useState } from 'react'

// interface Props {
//     title: string;
//     society: string;
//     period: string;
//     details: string;
//   }

const About: React.FC<(AboutInterface)> = ({...About}) => {
    // const data: AboutInterface = aboutData
    const containerStyle = {
        margin: "2%",
        width: "100%"
    }
    const [isListVisibleIntro, setListVisibleIntro] = useState(true);
    const toggleListVisibilityIntro = () => {
        setListVisibleIntro(!isListVisibleIntro);
      };
    const [isListVisibleSkills, setListVisibleSkills] = useState(true);
    const toggleListVisibilitySkills = () => {
        setListVisibleSkills(!isListVisibleSkills);
    };
    const [isListVisibleSoftSkills, setListVisibleSoftSkills] = useState(true);
    const toggleListVisibilitySoftSkills = () => {
        setListVisibleSoftSkills(!isListVisibleSoftSkills);
    };
    return (
        <div className='min-w-full my-8 lg:my-2 w-full' >
            <div>
            <h1 className="w-full text-3xl font-bold text-center" onClick={toggleListVisibilityIntro}>
                {/* <h3 className="underline border-blue-400">Jobs</h3> */}
                Presentation
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
                
                    {isListVisibleIntro && About.intro && About.intro.map(block => (
                        <div key={block[0]} className='m-auto min-w-full mb-4'>
                            <p className="flex items-center space-x-4">
                                {block}
                            </p >
                        </div>
                    ))}
            </div>
            <div>
            {isListVisibleIntro && (<div className="my-4 mx-16 bg-blue-400 h-0.5"></div>)}
                    {isListVisibleIntro && About.conclusion &&
                        <p key={About.conclusion[0]} className='m-auto'>
                            <a href="mailto:dev@demesh.xyz?subject=Contact"     
                            className="text-center">
                                {About.conclusion}
                            </a >
                        </p>
                    }
                    <div className='container m-10'></div>
            </div>

            <div className="place-items-center">
            <h1 className="w-full text-3xl font-bold text-center" onClick={toggleListVisibilitySoftSkills}>
                {/* <h3 className="underline border-blue-400">Jobs</h3> */}
                Soft Skills
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
                <div className='m-auto center mb-4 lg:columns-3 md:columns-2 columns-1'>
                    {isListVisibleSoftSkills && About.soft_skills && About.soft_skills.map(skill => (
                        <div key={skill[0]} className='mb-4 mx-2'>
                            <div className="text-center space-x-4 rounded-full border-2 border-blue-400 px-4 py-2  hover:border-white-400 hover:bg-blue-400 hover:text-xl">
                                <p>{skill}</p>
                            </div >
                        </div>
                    ))}
                </div>
            </div>

            <div>
            <h1 className="w-full text-3xl font-bold text-center" onClick={toggleListVisibilitySkills}>
                {/* <h3 className="underline border-blue-400">Jobs</h3> */}
                Skills
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
                <div className='mx-auto md:w-3/4 lg:w-full lg:columns-3 '>
                    {isListVisibleSkills && About.skills && About.skills.map(skill => (
                        <div className="h-24 align-middle text-center rounded-full border-2 border-blue-400 px-8 py-4 mb-4 hover:border-white-400 hover:bg-blue-400 hover:text-xl">
                            <p>{skill}</p>
                        </div >
                    ))}
                </div>
            </div>
            
            
        </div>
    )
}

export default About;