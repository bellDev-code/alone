import { BaseButton } from '@Components/Button/BaseButton'
import usePlayerStore from '@Store/usePlayerStore'
import React from 'react'

const SinglePage = () => {
  const { username, setUsername, addPlayers, players } = usePlayerStore();

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();
      addNames();
    }
  };

  const addNames = () => {
    if(username.length > 1) {
      addPlayers()
    }
  }

  return (
    <div className='px-5'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex gap-2'>
          <input type="text" placeholder='이름을 입력해주세요' 
            value={username} 
            onChange={onChangeName} 
            onKeyDown={handleEnterKey} 
          />
          <BaseButton onClick={addNames}>추가</BaseButton>
        </div>
        <div className='h-[120px] w-3/5 my-5 overflow-auto'>
          {players.map((player, index) => {
            return (
              <div className='py-1' key={index}>{index + 1}. {player.username}</div>
            )
          })}
        </div>
      </div>
      <div className='flex'>
        <div className='text-lg'>총 인원 : {players.length}</div>
      </div>
      <div className='flex justify-end'>
        <BaseButton>다음</BaseButton>
      </div>
    </div>
  )
}

export default SinglePage