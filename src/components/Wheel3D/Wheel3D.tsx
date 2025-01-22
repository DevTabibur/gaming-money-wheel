/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import { Canvas, GroupProps } from '@react-three/fiber'

import { LightingSetup } from '@/utils/LightingSetup'
import SpinWheel from '../Spinwheel'

interface Wheel3DProps extends GroupProps {
  isLoading: boolean
  initialValue: number
  rotationSpeed: number
}

const Wheel3D: React.FC<Wheel3DProps> = ({
  isLoading,
  initialValue,
  rotationSpeed,
}) => {
  return (
    <>
      <Canvas className="w-[100%] h-[100%]" orthographic camera={{ zoom: 46 }}>
        <LightingSetup />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <SpinWheel
              rotationSpeed={rotationSpeed}
              isLoading={isLoading}
              initialValue={initialValue}
              //           onStop={handleStop}
            />
          </group>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Wheel3D
