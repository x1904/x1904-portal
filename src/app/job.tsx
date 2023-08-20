'use client'

import Image from 'next/image'
import JobInterface from './jobinterface';
import { useState } from 'react'

// interface Props {
//     title: string;
//     society: string;
//     period: string;
//     details: string;
//   }

const Job: React.FC<{job:JobInterface}> = ({
    job:{
        title,
        society,
        logo,
        period,
        details
    },
}) => {
    const containerStyle = {
        margin: "2%",
        width: "100%"
    }
    return (
        <div className=' m-5' >
            <div className="flex items-center space-x-4">
                { logo != "" && <Image
                className='inline'
                alt="society logo"
                src={logo}
                width={50}
                height={50}
                />}
                <div className="flex flex-col">
                    <h2 className="text-white-700 text-2xl font-semibold" >{society}</h2>
                    <h2 className="text-white-500">{period}</h2>
                </div>
            </div >
            <h2 className={`text-1xl font-semibold`}>{title}</h2>
            {details.split("\n").map(detail=>(
                <p>{detail}</p>
            ))}
        </div>
    )
}

export default Job;