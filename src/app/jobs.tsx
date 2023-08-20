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
        <div className="my-8 lg:my-2 w-full">
            <h1 className="w-full text-3xl font-bold text-center" onClick={toggleListVisibility}>
                {/* <h3 className="underline border-blue-400">Jobs</h3> */}
                Jobs
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
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