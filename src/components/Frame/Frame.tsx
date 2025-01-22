/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { ReactNode, useState } from 'react'
import Jackpot from '../Jackpot/Jackpot'
import StickyNavigation from '../stickyNavigation/StickyNavigation'
import { buttons } from '../stickyNavigation/Buttons'
import useScale from '@/hook/useScale'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'
import host from '@/assets/host.png'
import { motion } from 'framer-motion'
import LuckyWheel from '../ui/LuckyWheel/LuckyWheel'
import WeeklyReward from '../ui/WeeklyReward/WeeklyReward'
import PrizesModalCard from '../ui/Modalnfo/PrizesModalCard'
import BonusesModalCard from '../ui/Modalnfo/BonusesModalCard'
import QuestOfTheDay from '../ui/QuestOfTheDay/QuestOfTheDay'
import ExtraCashback from '../ui/ExtraCashback/ExtraCashback'
import { Modal } from '../ui'

interface FrameProps {
  children: ReactNode
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  const [activeButton, setActiveButton] = useState<string>('group1')
  const scale = useScale(800) // Use the hook with a breakpoint of 800px

  // const [activeButton, setActiveButton] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = (id: string) => {
    setActiveButton(id)
    setIsModalOpen(true) // Open the modal when a button is clicked
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // setActiveButton(null)
  }

  // const handleButtonClick = (id: string) => {
  //   setActiveButton(id)
  // }

  const buttonList = buttons(activeButton, handleButtonClick)

  // console.log('scale',scale)

  // Define content based on the active button
  const renderModalContent = () => {
    switch (activeButton) {
      case 'group1':
        return <PrizesModalCard />
      case 'group2':
        return <BonusesModalCard />
      case 'group3':
        return <WeeklyReward />
      case 'group4':
        return <LuckyWheel />
      case 'group5':
        return <QuestOfTheDay />
      case 'group6':
        return <ExtraCashback />
      case 'group7':
        return null
      default:
        return null
    }
  }

  return (
    <section
      style={{
        transform: `scaleX(${scale})`,
        transformOrigin: 'center',
      }}
      className="frame-container overflow-hidden min-w-[1920px] h-screen"
    >
      <section className="w-[1920px] relative h-full   mx-auto">
        <div className="absolute top-0 z-50 left-0">
          <Jackpot />
        </div>
        {/* Add your image back if needed */}
        <motion.div
          className="h-[70vh] fixed -bottom-20  left-0 z-40"
          animate={{
            y: ['0%', '-10%', '0%'], // Move up and down for a bounce effect
          }}
          transition={{
            duration: 2, // Controls the speed of the bounce
            ease: 'easeInOut',
            repeat: Infinity, // Loop the animation infinitely
            repeatType: 'mirror', // Creates a smooth up-and-down motion
          }}
        >
          <Image
            src={host}
            alt="host"
            width={1000}
            height={1000}
            className="drop-shadow-lg h-full w-full"
          />
        </motion.div>

        <main className="w-full h-full">{children}</main>
        <StickyNavigation
          buttons={buttonList}
          bgColor="#2E0101"
          onButtonClick={handleButtonClick}
        />
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal} size="1100px">
            {renderModalContent()}
          </Modal>
        )}
      </section>
    </section>
  )
}

export default Frame
