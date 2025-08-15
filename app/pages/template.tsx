"use client";

import React, { useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(1);
  return (
    <div>
        Template { state }
        <button onClick={ () => setState(state + 1) } >create</button>
        { children }

    </div>
  )
}
