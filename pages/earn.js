import { React } from 'react';
import { CodeIcon, LightningBoltIcon, 
  AcademicCapIcon,   CalculatorIcon,
  LightBulbIcon,  BookOpenIcon,  
  VideoCameraIcon,} from '@heroicons/react/outline';


import Navbar from '../components/navbar';

const features = [
  {
    name: 'Discord Server ',
    description:
      'Join our Discord Server',
    icon: BookOpenIcon,
    href: 'https://discord.com/',
  },
  {
    name: 'Twitter',
    description:
      'Join us on Twitter ',
    icon: VideoCameraIcon,
    href: 'https://twitter.com',
  },
  {
    name: 'Telegram',
    description:
      'Join us on Telegram',
    icon:LightBulbIcon,
    href: 'https://telegram.org/',
  },
  {
    name: 'Facebook',
    description:
      'Join us on Facebook',
    icon: AcademicCapIcon,
    href: 'https://facebook.com',
  },
  {
    name: 'YouTube',
    description:
      'Join us on YouTubes',
    icon: LightningBoltIcon,
    href: 'https://www.youtube.com/',
  },
  

];

export default function CS() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <div className="md:items-center">
          <center>
            <br />
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Learn and Earn</h2>
            <br />
            <br />
          </center>
          <div>
          <center>
          <p> For a user to earn, you have to go to the section of the book or video</p>
          <br />
            <br />
          <ul>
              <li>1. Select a book to read or a video to watch.</li>
              <li>2. After reading or watching,</li>
              <li>3. Take a short quiz to ascertain that knowledge was impacted.</li>
              <li>4. If you successully passed the quiz, you earn an Delibrary NFT.</li>
              <li>5. Five Delibrary NFT qualifies you access to Premium contents.</li>
          </ul>
          </center>
          </div>
        </div>
        

      </div>
    </>
  );
}
