import { React } from 'react';
import { CodeIcon, LightningBoltIcon, 
  LinkIcon,  HashtagIcon,
  LightBulbIcon,  BookOpenIcon,  
  } from '@heroicons/react/outline';


import Navbar from '../components/navbar';
import { PlayIcon } from '@heroicons/react/solid';

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
    icon: HashtagIcon,
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
    icon: LinkIcon,
    href: 'https://facebook.com',
  },
  {
    name: 'YouTube',
    description:
      'Join us on YouTubes',
    icon: PlayIcon,
    href: 'https://www.youtube.com/',
  },
  {
    name: 'GitHub',
    description:
      'Explore our code on Github ',
    icon: CodeIcon,
    href: 'https://www.github.com/',
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
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Join our Community</h2>
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
