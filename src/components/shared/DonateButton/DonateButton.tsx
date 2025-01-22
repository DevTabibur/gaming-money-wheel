import React from 'react'
import './DonateButton.css' // Use '.css' for global styles if not using CSS modules

interface DonateButtonProps {
  text?: string
  onClick?: () => void
}

const DonateButton: React.FC<DonateButtonProps> = ({
  text = 'Donate now',
  onClick,
}) => {
  return (
    <button
      className="btnDonate px-5 py-4 text-2xl rounded-full font-bold text-center w-full"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default DonateButton
