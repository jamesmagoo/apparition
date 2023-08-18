'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { requestProvider } from 'webln'
import LoginModal from './LoginModal'
import { KeyIcon, BoltIcon } from '@heroicons/react/20/solid'

type Props = {}



const Navbar = (props: Props) => {

    const [showLoginModal, setShowLoginModal] = useState(false);

    // Modal cancel button clicked
    const handleCancel = () => {
        setShowLoginModal(false);
    };

    // Register modal submit button clicked
    const handleLoginSubmit = () => {
        console.log("Alby...")
    };

    return (
        <nav className='justify-between'>
            <LoginModal handleCancel={handleCancel} handleSubmit={handleLoginSubmit} showLoginModal={showLoginModal}/>
            <Link href="./">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-black bg-white pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
                        <b>stargazer -&nbsp; </b> explore lyrics & poetry
                    </p>
                </div>
            </Link>
            <Link href={"./user"}>user</Link>
            <Link href={"./stargazer"}>stargazer</Link>
            <button
                type='button'
                className='relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 border border-black shadow-sm text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-200'
                
                onClick={() => setShowLoginModal(true)}
              >
                <BoltIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                <span>Login with Bitcoin</span>
              </button>
        </nav>
    )
}

export default Navbar