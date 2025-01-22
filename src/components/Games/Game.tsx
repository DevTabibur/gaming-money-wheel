/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import wheelarrow from '@/assets/wheelarrow.png'
import DonateButton from '../shared/DonateButton/DonateButton'
import FrutigerButton from '../shared/FrutigerButton/FrutigerButton'
import useScale from '@/hook/useScale'
import Wheel3D from '../Wheel3D/Wheel3D'

// if backend data, send it like this way, then it will show the user diferrent angles  (DO NOT DELET IT)
// case 1 ==> Face x0(blue color)
// case 2 ==> Face x1
// case 3 ==> Face x5(white color)
// case 4 ==> Face x50(white color)
// case 5 ==> Face x1(blue color)
// case 6 ==> //  Face x0 (white color)
// case 7 ==> //  Face x1000 (white color)
// case 8 ==> Face x100(white color)
// case 9 ==>  //  Face x300
// default  ==> // if its value is 0 or Default case if face is out of range ==> Face x0 (blue color)

const Game = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  console.log('onLoadingComplete', onLoadingComplete)
  const scale = useScale(800) // Use the hook with a breakpoint of 800px
  const [isLoading, setIsLoading] = useState(false)
  const rotationSpeed = 2
  const [initialValue, setInitialValue] = useState(1) // track initial face values

  // its fake api
  const mockApiCall = () => {
    return new Promise<{ wheelValue: number }>((resolve) => {
      setTimeout(() => {
        const randomWheelValue = Math.floor(Math.random() * 9) + 1 // Generates a number between 1 and 10
        resolve({ wheelValue: randomWheelValue })
      }, 2000)
    })
  }

  // have to place bet function here
  const handleBetClick = async () => {
    setIsLoading(true)
    try {
      const { wheelValue } = await mockApiCall()
      setInitialValue(wheelValue)
    } catch (error) {
      console.log('Failed to retrieve dice points.', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="absolute inset-0 flex items-end justify-center w-full h-full overflow-hidden">
      <div
        style={{
          transform: `scaleY(${scale})`,
          transformOrigin: 'center bottom',
        }}
        className="flex items-end gap-10 justify-center relative h-full w-full"
      >
        {/* Spacer for alignment */}
        <div className="w-80" />
        {/* Wheel and Arrow Section */}
        <div className="select-none relative flex justify-center items-center">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              repeatType: 'reverse',
            }}
            className="relative flex items-center justify-center wheelbg w-[27rem] pt-10 h-[40rem] z-10"
          >
            <Wheel3D
              isLoading={isLoading}
              key="wheel1"
              initialValue={initialValue}
              rotationSpeed={rotationSpeed}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              repeatType: 'reverse',
            }}
            className="absolute w-48 z-50 -right-24"
          >
            <Image
              src={wheelarrow}
              alt="wheel arrow"
              width={400}
              height={400}
              className="w-full"
            />
          </motion.div>
        </div>
        {/* Right Section with Bet Options */}
        <div className="relative h-[32rem] w-[24rem] mb-56 ">
          <div className="flex items-center justify-between max-w-[24rem] mx-auto w-full z-0 absolute -top-64 px-6">
            <div className="bg-yellow-500 rounded-full w-2 h-[70vh]" />
            <div className="bg-yellow-500 rounded-full w-2 h-[70vh]" />
          </div>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              repeatType: 'reverse',
            }}
            className="relative h-[32rem] w-[24rem] hanging-container mb-56 flex items-center justify-center flex-col z-10"
          >
            <div className="pt-3 px-10 grid grid-cols-3 gap-4">
              <FrutigerButton text="20" />
              <FrutigerButton text="100" />
              <FrutigerButton text="300" />
              <FrutigerButton text="800" />
              <FrutigerButton text="3000" />
              <FrutigerButton text="10000" />
            </div>
            <div className="w-full px-10 pt-8 flex flex-col items-center">
              <div className="relative flex">
                <input
                  type="text"
                  className="w-full text-center inp-bg placeholder:font-bold text-white placeholder:text-white py-2 px-4 rounded-l-full outline-none"
                  placeholder="100"
                />
                <FrutigerButton text="✖" />
              </div>
              <div className="relative flex items-center w-full justify-center mt-36 ">
                <DonateButton onClick={handleBetClick} text="Place a Bet" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* </div> */}
    </section>
  )
}

export default Game

// old code, do not delete it
// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import wheelarrow from '@/assets/wheelarrow.png'
// import DonateButton from '../shared/DonateButton/DonateButton'
// import FrutigerButton from '../shared/FrutigerButton/FrutigerButton'
// import useScale from '@/hook/useScale'
// import Wheel3D from '../Wheel3D/Wheel3D'

// // if backend data, send it like this way, then it will show the user diferrent angles  (DO NOT DELET IT)
// // case 1 ==> Face x0(blue color)
// // case 2 ==> Face x1
// // case 3 ==> Face x5(white color)
// // case 4 ==> Face x50(white color)
// // case 5 ==> Face x1(blue color)
// // case 6 ==> //  Face x0 (white color)
// // case 7 ==> //  Face x1000 (white color)
// // case 8 ==> Face x100(white color)
// // case 9 ==>  //  Face x1 (blue color)
// // case 10 ==> // Face  x300
// // default  ==> // if its value is 0 or Default case if face is out of range ==> Face x300

// const Game = () => {
//   const scale = useScale(800) // Use the hook with a breakpoint of 800px
//   const [isLoading, setIsLoading] = useState(false)

//   const [initialValue, setInitialValue] = useState(0) // track initial face values
//   const [selectedFace, setSelectedFace] = useState<number | null>() // Track selected face

//   // its fake api
//   const mockApiCall = () => {
//     return new Promise<{ wheelValue: number }>((resolve) => {
//       setTimeout(() => {
//         const randomWheelValue = Math.floor(Math.random() * 10) + 1 // Generates a number between 1 and 10
//         resolve({ wheelValue: randomWheelValue })
//       }, 2000)
//     })
//   }

//   // have to place bet function here
//   const handleBetClick = async () => {
//     setIsLoading(true)
//     try {
//       const { wheelValue } = await mockApiCall()
//       setInitialValue(wheelValue)
//       setSelectedFace(wheelValue) // Update selected face after API call
//     } catch (error) {
//       console.log('Failed to retrieve dice points.', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <section className="absolute inset-0 flex items-end justify-center w-full h-full overflow-hidden">
//       <div
//         style={{
//           transform: `scaleY(${scale})`,
//           transformOrigin: 'center bottom',
//         }}
//         className="flex items-end gap-10 justify-center relative h-full w-full"
//       >
//         {/* Spacer for alignment */}
//         <div className="w-80" />
//         {/* Wheel and Arrow Section */}
//         <div className="select-none relative flex justify-center items-center">
//           <motion.div
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 10,
//               repeatType: 'reverse',
//             }}
//             className="relative flex items-center justify-center wheelbg w-[27rem] pt-10 h-[40rem] z-10"
//           >
//             <Wheel3D
//               isLoading={isLoading}
//               // selectedFace={selectedFace}
//               key="wheel1"
//               initialValue={initialValue}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 10,
//               repeatType: 'reverse',
//             }}
//             className="absolute w-48 z-50 -right-24"
//           >
//             <Image
//               src={wheelarrow}
//               alt="wheel arrow"
//               width={400}
//               height={400}
//               className="w-full"
//             />
//           </motion.div>
//         </div>
//         {/* Right Section with Bet Options */}
//         <div className="relative h-[32rem] w-[24rem] mb-56 ">
//           <div className="flex items-center justify-between max-w-[24rem] mx-auto w-full z-0 absolute -top-64 px-6">
//             <div className="bg-yellow-500 rounded-full w-2 h-[70vh]" />
//             <div className="bg-yellow-500 rounded-full w-2 h-[70vh]" />
//           </div>
//           <motion.div
//             initial={{ y: -20 }}
//             animate={{ y: 0 }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 10,
//               repeatType: 'reverse',
//             }}
//             className="relative h-[32rem] w-[24rem] hanging-container mb-56 flex items-center justify-center flex-col z-10"
//           >
//             <div className="pt-3 px-10 grid grid-cols-3 gap-4">
//               <FrutigerButton text="20" />
//               <FrutigerButton text="100" />
//               <FrutigerButton text="300" />
//               <FrutigerButton text="800" />
//               <FrutigerButton text="3000" />
//               <FrutigerButton text="10000" />
//             </div>
//             <div className="w-full px-10 pt-8 flex flex-col items-center">
//               <div className="relative flex">
//                 <input
//                   type="text"
//                   className="w-full text-center inp-bg placeholder:font-bold text-white placeholder:text-white py-2 px-4 rounded-l-full outline-none"
//                   placeholder="100"
//                 />
//                 <FrutigerButton text="✖" />
//               </div>
//               <div className="relative flex items-center w-full justify-center mt-36 ">
//                 <DonateButton onClick={handleBetClick} text="Place a Bet" />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* </div> */}
//     </section>
//   )
// }

// export default Game
