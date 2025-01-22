'use client'
import React, { FC } from 'react'
import './FrutigerButton.css' // Import the CSS file

interface FrutigerButtonProps {
  onClick?: () => void
  text: string
}

const FrutigerButton: FC<FrutigerButtonProps> = ({ onClick, text }) => {
  return (
    <button className="frutiger-button" onClick={onClick}>
      <div className="inner px-5 py-2">
        <div className="top-white"></div>
        <span className="text">{text}</span>
      </div>
    </button>
  )
}

export default FrutigerButton
