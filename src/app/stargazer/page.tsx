'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {}

const page = (props: Props) => {


  const lyricsEvent = {
    "id": "04d03336271abc1dcd8a3e9bd7bfc66fda96bf324d00784091d6ef8476988e65",
    "pubkey": "7f4f672af0cb2e9263f525d68f3043c05c1e7a1ade5aaf4b89afc400c184579e",
    "created_at": 1692341604,
    "kind": 30023,
    "tags": [
      [
        "d",
        "0edc4ca8"
      ],
      [
        "summary",
        "Testing a new idea"
      ],
      [
        "published_at",
        "1692341604"
      ],
      [
        "t",
        "lyrics"
      ],
      [
        "title",
        "Tranquility Base Hotel & Casino"
      ]
    ],
    "content": "Jesus in the day spa  \nFilling out the information form  \nMama got her hair done  \nJust popping out to sing a protest song  \nI've been on a bender back to that prophetic esplanade  \nWhere I ponder all the questions  \nBut just manage to miss the mark, hoo-hoo\n\nGood afternoon  \nTranquility Base Hotel and Casino  \nMark speaking  \nPlease tell me how may I direct your call?\n\nThis magical thinking  \nFeels as if it really might catch on  \nMama wants some answers  \nDo you remember where it all went wrong?  \nTechnological advances  \nReally bloody get me in the mood  \nPull me in close on a crisp eve, baby  \nKiss me underneath the moon's side boob\n\nGood afternoon  \nTranquility Base Hotel and Casino  \nMark speaking  \nPlease tell me how may I direct your call?\n\nAnd do you celebrate your dark side  \nAnd then wish you'd never left the house?  \nHave you ever spent a generation  \nTrying to figure that one out?\n\nHoo-hoo  \nGood afternoon  \nTranquility Base Hotel and Casino  \nMark speaking  \nPlease tell me how may I direct your call?\n\n#lyrics ",
    "sig": "691ed3184579283ed05108cbfbb3a724f62bac0117c84e0e77d90fb2528e905844a48c89e86d48e61578b6be30a3d0cbedc3611b1a525a15fe152c1509526fa3"
  }
  return (

    <div className="flex min-h-screen flex-col items-center justify-center h-max">
      <div className='flex flex-row justify-between w-1/2'>
        <button className='bg-red-200 border border-black text-strong '>⚡️Zap</button>
        <p className='border-black border p-1 bg-red-200'>No. of Zaps:</p>
      </div>
      <h1>{lyricsEvent.tags.find(tag => tag[0] === 'title')?.[1]}</h1>
      <p>Arctic Monkeys</p>
   
      <div className='my-10 border border-grey-500 rounded-lg '>
        <ReactMarkdown
          className='font-mono mx-10 space-y-5'
          children={lyricsEvent.content}
          components={{
            // Map `h1` (`# heading`) to use `h2`s.
            h1: 'h2',
            // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
            p: ({node, ...props}) => <div className='border border-grey-500 p-5 cursor-pointer bg-white hover:bg-sky-100' onClick={()=>{console.log('Good lyric')}}{...props} />,
            //p: ({node, ...props}) => <MyFancyRule {...props} />
          }}
        />
      </div>

    </div>
  )
}

export default page