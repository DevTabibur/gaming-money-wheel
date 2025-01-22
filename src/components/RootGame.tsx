'use client'

import Frame from '@/components/Frame/Frame'
import Game from '@/components/Games/Game'
import React, { useState } from 'react'
// import { Loader } from '@react-three/drei'

const RootGame = () => {
  const [loadingComplete, setLoadingComplete] = useState(false)

  // Callback to mark loading as complete
  const handleLoadingComplete = () => {
    setLoadingComplete(true)
  }
  console.log('loadingCOmplete', loadingComplete)

  return (
    <Frame>
      {/* {!loadingComplete && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                    <Loader />
                </div>
            )} */}
      <Game onLoadingComplete={handleLoadingComplete} />
    </Frame>
  )
}

export default RootGame
