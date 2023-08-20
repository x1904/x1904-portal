'use client'

import Image from 'next/image'
import FormationInterface from './formationinterface';
import { useState } from 'react'

const Formation: React.FC<{formation:FormationInterface}> = ({
    formation:{
        school,
        logo,
        title,
        period
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
                alt="school logo"
                src={logo}
                width={50}
                height={50}
                />}
                <div className="flex flex-col">
                    <h2 className="text-white-700 text-2xl font-semibold" >{school}</h2>
                    <h2 className="text-white-500">{period}</h2>
                </div>
            </div >
            <h2 className={`text-1xl font-semibold`}>{title}</h2>
        </div>
    )
}

export default Formation;