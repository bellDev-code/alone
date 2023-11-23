import RuleModal from '@Components/Modal/RuleModal';
import React, { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className='flex justify-between p-5'>
      <button onClick={openModal}>게임 룰 설명</button>

      <RuleModal open={open} closeModal={closeModal}  />

      {/* 추후 개발 */}
      <div>카카오톡 공유</div>
    </div>
  )
}

export default Header