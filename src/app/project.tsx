import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export interface projectProps {
    title: string;
    description: string;
    link: string;
    logo: string;
}

const Project: React.FC<projectProps> = ({title, description, link, logo}) => {
    const containerStyle = {
        margin: "2%",
        width: "100%"
    }
    return (
        <Link href={link} className='h-full text-center rounded-3xl p-10 my-12 w-full md:w-3/4 xl:w-1/2 bg-gray-200 bolt text-gray-800'>
            { logo != "" && <Image
                className='block m-auto lg:float-right'
                alt="project logo"
                src={logo}
                width={150}
                height={150}
                />}
            <span className='block text-4xl md:text-7xl lg:text-7xl xl:text-9xl underline hover:decoration-blue-600 relative'>{title}</span>
            <span className='block text-xl lg:text-2xl xl:text-3xl m-2'>{description}</span>
            
        </Link>
    )
}

export default Project;