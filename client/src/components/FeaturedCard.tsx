import React from 'react'
import { Button } from './ui/button';
import { Link } from 'lucide-react';

interface CardProps {
    imageUrl: string;
    name: string;
    mode: string;
    date: string;
    teamSize: string;
    hackURL: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, mode, date, teamSize,hackURL}) => {
    return (
      <div className="bg-gradient-to-r from-slate-950 to-gray-800 border-2 border-spacing-2 border-white text-yellow-400 rounded-lg shadow-lg flex flex-col   md:flex-row p-4 md:px-0 md:p-8 space-y-4 md:space-y-0">
        <div className="flex justify-center w-full md:w-1/2 ">
          <img src={imageUrl} alt="Event" className="md:w-1/2 sm:w-full h-1/2 md:h-full  rounded-md" />
        </div>
        <div className="flex flex-col justify-between w-full md:w-1/2 p-4 space-y-2 md:space-y-2">
          
            <div className="text-lg md:text-2xl flex"><strong>Name:{" "}</strong><p className='text-white'>{name}</p></div>
            <div className="text-lg md:text-2xl flex"><strong>Mode:{" "}</strong> <p className='text-white'>{mode}</p></div>
            <div className="text-lg md:text-2xl flex"><strong>Last Date:{" "}</strong><p className='text-white'> {date}</p></div>
            <div className="text-lg md:text-2xl flex"><strong>Team Size:{" "}</strong><p className='text-white'>{teamSize}</p></div>
          
          </div>
          <div className="flex items-center justify-center pr-2 md:justify-start">
            <a href={hackURL} target='_blank' title="Visit the hackathon website">
              <Button  variant={'outline'} className="bg-yellow-500 text-black p-2 rounded-full">
                <Link />
              </Button>
            </a>
          
        </div>
      </div>
    );
};

export default Card;
