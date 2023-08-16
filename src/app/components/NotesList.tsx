import { Event } from 'nostr-tools';
import React from 'react'
import { NoteCard } from './NoteCard';
import Link from 'next/link'


interface Props {
    notes: Event[];
  }


const NotesList = ({notes}: Props) => {
    return (
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        {notes.map((note, index) => (
          <div className="max-w-5xl font-mono text-sm lg:flex-col my-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"key={index}>
            <h1 className="text-2xl">{note.tags.find(tag => tag[0] === 'title')?.[1]}</h1>
            <p className='text-sm italic'>{note.tags.find(tag => tag[0] === 'summary')?.[1]}</p>
            {/* <p>{note.id}</p>
            <p>{note.pubkey}</p> */}
            <Link href={`/${note.id}`}>
               Click here 
            </Link>
          </div>
        ))}
      </div>
    );
  }

export default NotesList