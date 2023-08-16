'use client'
import { SimplePool, Event } from 'nostr-tools';
import { useEffect, useRef, useState } from 'react';
import  NotesList from './components/NotesList';

export const RELAYS = [
  "wss://nostr-pub.wellorder.net",
  "wss://nostr.drss.io",
  "wss://nostr.swiss-enigma.ch",
  "wss://relay.damus.io",
];

export interface Metadata {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string;
}

/**
 * 
 * MAIN PAGE 
 * 
 */
export default function Home() {

  const [pool, setPool] = useState<SimplePool | null>(null);

  const [events, setEvents] = useState<Event[]>([]);

  // const [events] = useDebounce(eventsImmediate, 1500);

  const [metadata, setMetadata] = useState<Record<string, Metadata>>({});

  const metadataFetched = useRef<Record<string, boolean>>({});

  const [hashtags, setHashtags] = useState<string[]>([]);

  // setup a relays pool
  useEffect(() => {
    const _pool = new SimplePool();
    setPool(_pool);

    return () => {
      _pool.close(RELAYS);
    };
  }, []);

  // subscribe to some events
  useEffect(() => {
    if (!pool) return;

    setEvents([]);
    const sub = pool.sub(RELAYS, [
      {
        kinds: [30023],
        limit: 5,
        "#t": ["nostr"],
      },
    ]);

    sub.on("event", (event: Event) => {
      console.log(event)
      setEvents((events) => [...events, event])
      //setEvents((events) => insertEventIntoDescendingList(events, event));
    });

    return () => {
      sub.unsub();
    };
  }, [pool]);

  // useEffect(() => {
  //   if (!pool) return;

  //   const pubkeysToFetch = events
  //     .filter((event) => metadataFetched.current[event.pubkey] !== true)
  //     .map((event) => event.pubkey);

  //   pubkeysToFetch.forEach(
  //     (pubkey) => (metadataFetched.current[pubkey] = true)
  //   );

  //   const sub = pool.sub(RELAYS, [
  //     {
  //       kinds: [0],
  //       authors: pubkeysToFetch,
  //     },
  //   ]);

  //   sub.on("event", (event: Event) => {
  //     const metadata = JSON.parse(event.content) as Metadata;

  //     setMetadata((cur) => ({
  //       ...cur,
  //       [event.pubkey]: metadata,
  //     }));
  //   });

  //   sub.on("eose", () => {
  //     sub.unsub();
  //   });

  //   return () => {};
  // }, [events, pool]);

  if (!pool) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div>
        <NotesList notes={events} />
        Not in a million years 
      </div>
    </main>
  )
}
