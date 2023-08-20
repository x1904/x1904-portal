'use client'

import formationsData from '../../data/formations.json';
import Formation from './formation';
import FormationInterface from './formationinterface'
import { useState } from 'react';

interface Formations {
 formations: FormationInterface[];
}

const Formations: React.FC = () => {
    const data: Formations = formationsData
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
                {/* <h3 className="underline border-blue-400">Formations</h3> */}
                Qualifications
                <div className="my-4 mx-8 bg-blue-400 h-1"></div>
            </h1>
            <div className="relative grid place-items-center w-full" >
                {isListVisible && data.formations.map(formation => (
                    <div key={formation.title} className='m-auto min-w-full'>
                    <Formation formation={formation} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Formations