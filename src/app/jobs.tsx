'use client'

import jobsData from '../../data/jobs.json';
import Job from './job';
import JobInterface from './jobinterface'
import { useState } from 'react';

interface Jobs {
 jobs: JobInterface[];
}

const Jobs: React.FC = () => {
    const data: Jobs = jobsData
    const containerStyle = {
        border: "1px solid black",
        width: "100%"
    }
    const [isListVisible, setListVisible] = useState(true);
    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
      };
    return (
        <div className="w-full">
            <h1 className="w-full text-3xl font-bold" onClick={toggleListVisibility}>
                <hr className="wborder-gray-300 my-4"/>Jobs
            </h1>
            {/* <hr className="border-gray-300 my-4" /> */}
            <div className="relative grid place-items-center w-full" >
                {isListVisible && data.jobs.map(job => (
                    <div key={job.title} className='m-auto min-w-full'>
                    <Job  job={job} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jobs