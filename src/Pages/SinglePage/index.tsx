import { BaseButton } from '@Components/Button/BaseButton'
import usePlayerStore from '@Store/usePlayerStore'
import React from 'react'

const SinglePage = () => {
  const { username, setUsername } = usePlayerStore();

  const onChangeName = () => {
    setUsername(username)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-2'>
        <input type="text" placeholder='이름을 입력해주세요' value={username} onChange={onChangeName} />
        <BaseButton>추가</BaseButton>
      </div>
    </div>
  )
}

export default SinglePage