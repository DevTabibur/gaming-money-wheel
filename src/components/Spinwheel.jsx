'use client'
import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Loader, useGLTF } from '@react-three/drei'
import { Color, PCFSoftShadowMap } from 'three'
import { getWheelRotationAngle } from '@/utils/getWheelRotationAngle'
import { getWheelActiveColors } from '@/utils/getWheelActiveColors'

const SpinWheel = ({ rotationSpeed, isLoading, initialValue }) => {
  const [hasRotated, setHasRotated] = useState(false) // Track if the wheel has rotated at least once
  const { nodes, materials, isReady } = useGLTF('/wheel-new.glb')
  const { gl, scene } = useThree() // Access renderer for shadow setup
  const directionalLightRef = useRef(null)
  // console.log('nodes', nodes);
  // console.log('materials', materials);

  const wheelRef = useRef()

  useEffect(() => {
    // Function to set the wheel rotation angle based on the initial value
    const setWheelRotation = async () => {
      // Check if loading is complete and if wheel reference is available
      if (!isLoading && wheelRef.current) {
        // Get the rotation angle for the wheel based on the initial face value
        const angle = await getWheelRotationAngle(initialValue)
        if (angle) {
          // Set the wheel's rotation to the calculated angle
          wheelRef.current.rotation.set(0, 0, angle.z)
          // console.log('angle', angle);
        }
      }
    }

    // Retrieve the active face colors based on the initial face value
    const faceColors = getWheelActiveColors(initialValue)
    console.log('faceColors', faceColors)

    // Enable shadows if WebGL and directional light reference are available
    if (gl && directionalLightRef.current && faceColors) {
      gl.shadowMap.enabled = true // Enable shadow map in WebGL renderer
      gl.shadowMap.type = PCFSoftShadowMap // Set shadow mapping type for smoother shadows

      // Configure the directional light's shadow properties
      directionalLightRef.current.castShadow = true
      directionalLightRef.current.shadow.mapSize.width = 1024 // Shadow map width
      directionalLightRef.current.shadow.mapSize.height = 1024 // Shadow map height
      directionalLightRef.current.shadow.camera.near = 1 // Near clipping plane for shadow camera
      directionalLightRef.current.shadow.camera.far = 100 // Far clipping plane for shadow camera
    }

    // Apply colors to the specified meshes in the scene if nodes are available
    if (nodes) {
      // Loop over each mesh name in the faceColors object
      Object.keys(faceColors).forEach((meshName) => {
        // Retrieve the mesh object for the specified mesh name
        const meshToHighlight = nodes[meshName]

        if (meshToHighlight) {
          // Set default color as a fallback in case highlighting fails
          const originalColor = new Color('#000000')
          // Set the highlight color from faceColors for this specific mesh
          const highlightColor = new Color(faceColors[meshName])

          // Enable casting and receiving shadows on the mesh
          meshToHighlight.castShadow = true
          meshToHighlight.receiveShadow = true

          if (isLoading) {
            // If loading, apply the original color and reset hasRotated
            meshToHighlight.material.color.copy(originalColor)
            setHasRotated(true)
          } else if (hasRotated) {
            // Once rotation has happened, apply the highlight color to the mesh
            // console.log(`Applying highlight color to ${meshName}`);
            meshToHighlight.material.color.copy(highlightColor)
          } else {
            // Default case for meshes without highlighting
            meshToHighlight.material.color.copy(originalColor)
          }

          // Ensure the material updates immediately with new color
          meshToHighlight.material.needsUpdate = true
          // Recompute vertex normals if needed for smoother shading
          meshToHighlight.geometry.computeVertexNormals()
        } else {
          // Log a warning if the mesh name was not found in the nodes
          // console.warn(`Mesh ${meshName} not found in nodes`);
        }
      })
    }

    // Call function to set the rotation based on initial value
    setWheelRotation()
  }, [initialValue, isLoading, nodes, hasRotated, gl, scene])

  // Rotate the wheel while spinning
  useFrame(() => {
    if (isLoading && wheelRef.current) {
      wheelRef.current.rotation.z += rotationSpeed
    }
  })

  if (isReady) {
    return <Loader /> // Replace with a loading indicator
  }

  return (
    <>
      <group ref={wheelRef} dispose={null}>
        <group name="Scene">
          {/* face x0 blue color */}
          <group name="face1" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle002_1"
              geometry={nodes.Circle002_1.geometry}
              material={materials['face1 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle002"
              geometry={nodes.Circle002.geometry}
              material={materials['face1 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle002_2"
              geometry={nodes.Circle002_2.geometry}
              material={materials['face1 mat 3']}
            />
          </group>

          {/* face x0 blue color */}
          <group name="face11" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle028_1"
              geometry={nodes.Circle028_1.geometry}
              material={materials['face1.1 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle028"
              geometry={nodes.Circle028.geometry}
              material={materials['face1.1 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle028_2"
              geometry={nodes.Circle028_2.geometry}
              material={materials['face1.1 mat 3']}
            />
          </group>

          {/* CASE 1  ==> FACE x0 (blue color)*/}
          <group name="face12" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle035_1"
              geometry={nodes.Circle035_1.geometry}
              material={materials['face1.2 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle035"
              geometry={nodes.Circle035.geometry}
              material={materials['face1.2 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle035_2"
              geometry={nodes.Circle035_2.geometry}
              material={materials['face1.2 mat 3']}
            />
          </group>

          <group name="face13" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle031_1"
              geometry={nodes.Circle031_1.geometry}
              material={materials['face1.3 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle031"
              geometry={nodes.Circle031.geometry}
              material={materials['face1.3 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle031_2"
              geometry={nodes.Circle031_2.geometry}
              material={materials['face1.3 mat 3']}
            />
          </group>

          {/* CASE 2 ==> FACE x1 (white color) */}
          <group name="face2" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle007_1"
              geometry={nodes.Circle007_1.geometry}
              material={materials['face2 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle007"
              geometry={nodes.Circle007.geometry}
              material={materials['face2 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle007_2"
              geometry={nodes.Circle007_2.geometry}
              material={materials['face2 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle007_3"
              geometry={nodes.Circle007_3.geometry}
              material={materials['face2 mat 4']}
            />
          </group>

          <group name="face21" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle030_1"
              geometry={nodes.Circle030_1.geometry}
              material={materials['face2.1 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle030"
              geometry={nodes.Circle030.geometry}
              material={materials['face2.1 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle030_2"
              geometry={nodes.Circle030_2.geometry}
              material={materials['face2.1 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle030_3"
              geometry={nodes.Circle030_3.geometry}
              material={materials['face2.1 mat 4']}
            />
          </group>

          {/* CASE 3 ==> FACE x5 (white color) */}
          <group name="face3" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle006_1"
              geometry={nodes.Circle006_1.geometry}
              material={materials['face3 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle006"
              geometry={nodes.Circle006.geometry}
              material={materials['face3 mat 2']}
            />

            {/* number 3 */}
            <mesh
              name="Circle006_2"
              geometry={nodes.Circle006_2.geometry}
              material={materials['face3 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle006_3"
              geometry={nodes.Circle006_3.geometry}
              material={materials['face3 mat 4']}
            />
          </group>

          <group name="face31" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1  */}
            <mesh
              name="Circle022_1"
              geometry={nodes.Circle022_1.geometry}
              material={materials['face3.1 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle022"
              geometry={nodes.Circle022.geometry}
              material={materials['face3.1 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle022_2"
              geometry={nodes.Circle022_2.geometry}
              material={materials['face3.1 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle022_3"
              geometry={nodes.Circle022_3.geometry}
              material={materials['face3.1 mat 4']}
            />
          </group>

          <group name="face32" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle027_1"
              geometry={nodes.Circle027_1.geometry}
              material={materials['face3.2 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle027"
              geometry={nodes.Circle027.geometry}
              material={materials['face3.2 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle027_2"
              geometry={nodes.Circle027_2.geometry}
              material={materials['face3.2 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle027_3"
              geometry={nodes.Circle027_3.geometry}
              material={materials['face3.2 mat 4']}
            />
          </group>

          {/* CASE 4 ==> FACE x50 (white color) */}

          <group name="face4" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle032_1"
              geometry={nodes.Circle032_1.geometry}
              material={materials['face4 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle032"
              geometry={nodes.Circle032.geometry}
              material={materials['face4 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle032_2"
              geometry={nodes.Circle032_2.geometry}
              material={materials['face4 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle032_3"
              geometry={nodes.Circle032_3.geometry}
              material={materials['face4 mat 4']}
            />
          </group>

          <group name="face5" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle024_1"
              geometry={nodes.Circle024_1.geometry}
              material={materials['face5 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle024"
              geometry={nodes.Circle024.geometry}
              material={materials['face5 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle024_2"
              geometry={nodes.Circle024_2.geometry}
              material={materials['face5 mat 3']}
            />
          </group>

          {/* CASE 6 ==> FACE x0 (white color) */}
          <group name="face6" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle025_1"
              geometry={nodes.Circle025_1.geometry}
              material={materials['face6 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle025"
              geometry={nodes.Circle025.geometry}
              material={materials['face6 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle025_2"
              geometry={nodes.Circle025_2.geometry}
              material={materials['face6 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle025_3"
              geometry={nodes.Circle025_3.geometry}
              material={materials['face6 mat 4']}
            />
          </group>

          {/* CASE 7 ==> FACE x1000 (white color) */}
          <group name="face7" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle008_1"
              geometry={nodes.Circle008_1.geometry}
              material={materials['face7 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle008"
              geometry={nodes.Circle008.geometry}
              material={materials['face7 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle008_2"
              geometry={nodes.Circle008_2.geometry}
              material={materials['face7 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle008_3"
              geometry={nodes.Circle008_3.geometry}
              material={materials['face7 mat 4']}
            />
          </group>

          {/* CASE 8 ==> FACE x100 (white color) */}
          <group name="face8" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle023_1"
              geometry={nodes.Circle023_1.geometry}
              material={materials['face8 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle023"
              geometry={nodes.Circle023.geometry}
              material={materials['face8 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle023_2"
              geometry={nodes.Circle023_2.geometry}
              material={materials['face8 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle023_3"
              geometry={nodes.Circle023_3.geometry}
              material={materials['face8 mat 4']}
            />
          </group>

          {/* CASE 5 ==> FACE x1 (blue color) */}
          <group name="face9" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle026_1"
              geometry={nodes.Circle026_1.geometry}
              material={materials['face9 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle026"
              geometry={nodes.Circle026.geometry}
              material={materials['face9 mat 2']}
            />
            {/* number 3 */}
            <mesh
              name="Circle026_2"
              geometry={nodes.Circle026_2.geometry}
              material={materials['face9 mat 3']}
            />
          </group>

          {/* CASE 9 ==> FACE x300 (white color) */}
          <group name="face10" rotation={[Math.PI / 2, -0.471, 0]}>
            {/* number 1 */}
            <mesh
              name="Circle029_1"
              geometry={nodes.Circle029_1.geometry}
              material={materials['face10 mat 1']}
            />
            {/* number 2 */}
            <mesh
              name="Circle029"
              geometry={nodes.Circle029.geometry}
              material={materials['face10 mat 2']}
            />
            {/* number 3*/}
            <mesh
              name="Circle029_2"
              geometry={nodes.Circle029_2.geometry}
              material={materials['face10 mat 3']}
            />
            {/* the text */}
            <mesh
              name="Circle029_3"
              geometry={nodes.Circle029_3.geometry}
              material={materials['face10 mat 4']}
            />
          </group>

          {/* the last border circle + border lines + middle circle */}
          <group name="Circle016" rotation={[Math.PI / 2, -0.471, 0]}>
            <mesh
              name="Circle003"
              geometry={nodes.Circle003.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Circle003_1"
              geometry={nodes.Circle003_1.geometry}
              material={materials['face1 mat 2']}
            />
            <mesh
              name="Circle003_2"
              geometry={nodes.Circle003_2.geometry}
              material={materials['face1 mat 1']}
            />
            <mesh
              name="Circle003_3"
              geometry={nodes.Circle003_3.geometry}
              material={materials['Material.015']}
            />
            <mesh
              name="Circle003_4"
              geometry={nodes.Circle003_4.geometry}
              material={materials['face1 mat 3']}
            />
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/spinwheel.glb')

export default SpinWheel
