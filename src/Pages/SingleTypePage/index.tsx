import { useStartGameQuery } from '@Api/singleGame'
import { IRequestGameStartData, TPlayerSelectionType } from '@Api/types'
import { BaseButton } from '@Components/Button/BaseButton'
import { toast } from '@Components/Toastify/Toastify'
import { ROUTE_PATH } from '@Configure/constant'
import PlayTypeSelection from "@Components/PlayerSelectType"
import usePlayerStore from '@Store/usePlayerStore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SingleTypePage = () => {
    const { players } = usePlayerStore()
    const { mutate: singleGameStartMutate } = useStartGameQuery()
    const navigate = useNavigate()
    const [ selectedPlayType, setSelectedPlayType ] = useState<TPlayerSelectionType>('direct')

    const singleGameStart = () => {
        const gameStartData: IRequestGameStartData = {
            players,
            playerSelectionType: selectedPlayType,
            category: 'serious'
        }
    
        singleGameStartMutate(gameStartData, {
            onSuccess: (data) => {
                if(data.code === 200) {
                    navigate(`${ROUTE_PATH.ANSWER_PAGE}`)
                } else if(data.code === 400 && data.message === 'At least two players are require') {
                    toast('최소 두 명의 플레이어가 필요합니다.')
                } else if(data.code === 400 && data.message === 'Username must be unique') {
                    toast('중복된 이름이 있습니다.')
                }
            },
            onError: (error) => {
                if (error.response?.data.message === 'Game is over') {
                    toast('이미 종료된 게임입니다.');
                } 
            }
        })
    }
    
  return (
    <div>
        <div className='flex items-center justify-center'>
            모든 인원이 대답을 하면 다시 선택할 수 있습니다.
        </div>
        <PlayTypeSelection
          selectedPlayType={selectedPlayType}
          setSelectedPlayType={setSelectedPlayType}
        />
        <div className='flex items-end justify-end gap-4 py-5'>
            <BaseButton>이전</BaseButton>
            <BaseButton onClick={singleGameStart}>시작</BaseButton>
        </div>
    </div>
  )
}

export default SingleTypePage