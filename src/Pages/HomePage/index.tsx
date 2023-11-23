import { ModeButton } from '@Components/Button/ModeButton'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <ModeButton>공유 모드</ModeButton>
        <ModeButton>개인 모드</ModeButton>
    </div>
  )
}

export default HomePage