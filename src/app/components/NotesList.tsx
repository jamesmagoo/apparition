import { Event } from 'nostr-tools';
import React from 'react'


interface Props {
    notes: Event[];
  }


const NotesList = ({notes}: Props) => {
    return (
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {notes.map((note, index) => (
          <div className="my-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"key={index}>
            <h1 className="text-xl ">{note.tags.find(tag => tag[0] === 'title')?.[1]}</h1>
            <p>{note.tags.find(tag => tag[0] === 'summary')?.[1]}</p>
            <ul>
              {note.tags.filter(tag => tag[0] === 't').map((tag, idx) => (
                <li className="text-xs"key={idx}>{tag[1]}</li>
              ))}
            </ul>
            {/* You can use other JSX here, like your <NoteCard /> component */}
          </div>
        ))}
      </div>
    );
  }

export default NotesList