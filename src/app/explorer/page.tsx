import React from 'react'

type Props = {
    test? : string;
}

function Explorer({test}: Props) {
  return (
    <div>Explorer
        <p>{test}</p>
    </div>

  )
}

export default Explorer