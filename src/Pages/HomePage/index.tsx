import { ModeButton } from '@Components/Button/ModeButton'
import { ROUTE_PATH } from '@Configure/constant'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const singleClick = () => {
    navigate(`${ROUTE_PATH.SINGLE_PAGE}`)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
        <ModeButton onClick={singleClick}>공유 모드</ModeButton>
        <ModeButton>개인 모드</ModeButton>
    </div>
  )
}

export default HomePage