import { Box } from '@mui/material';
import Link from 'next/link';

export interface projectProps {
    title: string;
    description: string;
    link: string;
}


const Project: React.FC<projectProps> = ({title, description, link}) => {
    const containerStyle = {
        margin: "2%",
        width: "100%"
    }
    return (
                <Link href={link} className='h-full rounded-3xl p-10 w-full bg-white bolt text-gray-800'>
                    <span className='flex text-7xl underline hover:decoration-blue-600 relative'>{title}</span>
                    <span className='block text-xl m-2'>{description}</span>
                </Link>
    )
}

export default Project;