import { React } from 'react';
import { CodeIcon, LightningBoltIcon,
  AcademicCapIcon,   CalculatorIcon,
  LightBulbIcon,  BookOpenIcon,  
  VideoCameraIcon,} from '@heroicons/react/outline';
import Navbar from '../components/navbar';

const features = [
  {
    name: 'Hundreds of Academic E-Books ',
    description:
      'The Library has more books that you could imagine. E-books repository are decentralized (IPFS Storage). ',
    icon: BookOpenIcon,
    href: '',
  },
  {
    name: 'Lot of Video-Books',
    description:
      'The full video books are here for you. if you cannot read the ebook format, you can read you favorite textbooks by watching them. ',
    icon: VideoCameraIcon,
    href: '',
  },
  {
    name: 'No Political Censorship',
    description:
      'No fear from government of your country not allowing certain books. You can read or watch them here',
    icon:LightBulbIcon,
    href: '',
  },
  {
    name: 'Learn and Earn',
    description:
      'The very First decentralized Library where you LEARN and EARN',
    icon: AcademicCapIcon,
    href: '',
  },
  {
    name: 'No Loss of Books',
    description:
      'Prevent the accidental or intentional loss of information from human consciousness',
    icon: LightningBoltIcon,
    href: '',
  },
  {
    name: 'Live Class Streaming',
    description:
      'Lecturers / Teachers can use this platform to shedule live teaching and learning. just contact us',
    icon: LightningBoltIcon,
    href: '',
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
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">About the Project</h2>
            <br />
            <br />
          </center>
        </div>
        
        <div className="py-12 bg-white">
         
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only"></h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
              {features.map((feature) => (feature.name === 'Open Source' ? (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                    {' '}
                    <a href={feature.href} className="hover:underline text-indigo-500"></a>
    
                  </dd>

                </div>
              ) : (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              )

              ))}
            </dl>
          </div>
        
        </div>

      </div>
    </>
  );
}
