import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Layout from '../components/layout'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Library({ Component, pageProps }) {
  return (
    <Layout>
    <div>
        <Head>
        <title>Decentralized Library | Ebooks and Videos : Learn and Earn </title>
        <meta name="Decentralized Library | Learn and Earn as you use the Decentralized Library" content="DeLib" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </div>
    </Layout>
  )
}

export default Library