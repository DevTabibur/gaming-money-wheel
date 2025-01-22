import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import * as dat from 'dat.gui'

/**
 * Utility function to add various lights to a Three.js scene.
 * The function uses dat.GUI for interactive controls.
 */
export function LightingSetup() {
  // Refs for different types of lights
  const directionalLightRef = useRef<THREE.DirectionalLight>(null)
  const pointLightRef = useRef<THREE.PointLight>(null)
  const spotLightRef = useRef<THREE.SpotLight>(null)
  const hemisphereLightRef = useRef<THREE.HemisphereLight>(null)
  const rectAreaLightRef = useRef<THREE.RectAreaLight>(null)

  // Effect to set up dat.GUI for controlling light properties
  useEffect(() => {
    const gui = new dat.GUI()

    // Cleanup dat.GUI when component is unmounted
    return () => gui.destroy()
  }, [])

  // Return the set of lights
  return (
    <>
      {/* Ambient light for overall illumination without a specific direction */}
      <ambientLight intensity={0.2} color="#ffffff" />

      {/* Directional light simulates sunlight, casting light in a specific direction */}
      <directionalLight
        ref={directionalLightRef}
        position={[-50, -50, -13]}
        intensity={5}
        color="#c9c9c9"
      />

      {/* Point light emits light in all directions from a single point, with customizable intensity, distance, and decay */}
      <pointLight
        ref={pointLightRef}
        position={[20, 20, 20]}
        intensity={20}
        distance={50}
        decay={0.1}
        color="#F8E954"
      />

      {/* Spot light casts light in a cone shape, with options for angle and penumbra (soft edge) */}
      <spotLight
        ref={spotLightRef}
        position={[15, -14, 10]}
        intensity={2.8}
        angle={0.99}
        penumbra={0.64}
        distance={20}
        decay={0}
        color="#c7e576"
        castShadow
      />

      {/* Hemisphere light simulates light from the sky, with a color for the ground as well */}
      <hemisphereLight
        ref={hemisphereLightRef}
        groundColor="#c9c9c9"
        intensity={1.31}
      />

      {/* Rect area light emits light in a rectangular area, often used for soft lighting */}
      <rectAreaLight
        ref={rectAreaLightRef}
        position={[20, 9, -3.2]}
        width={10}
        height={10}
        intensity={1}
        color="#ffffff"
      />
    </>
  )
}
