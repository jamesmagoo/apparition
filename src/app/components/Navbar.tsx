import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav>
            <Link href="./">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <b>focal -&nbsp; </b> explore the written word on Nostr
                </p>
            </div>
            </Link>
            <Link href={"./explorer"}>Stargazer</Link>
            <Link href={"./explorer"}>Points</Link>
            <Link href={"./explorer"}>Lens</Link>
            <Link href={"./explorer"}>User</Link>
        </nav>
    )
}

export default Navbar