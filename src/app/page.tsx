'use client'

import Stargazer from "./components/Stargazer";



/**
 * 
 * MAIN PAGE 
 * 
 */
export default function Home() {

  if (typeof navigator !== 'undefined') {
    // navigator is defined, safe to use here
    console.log(navigator.userAgent);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-100 h-max">
      <Stargazer/>
      <h6>Not in a million years</h6>
    </div>
  )
}
