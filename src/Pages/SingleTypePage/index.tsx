import { useStartGameQuery } from '@Api/singleGame'
import { IRequestGameStartData } from '@Api/types'
import { BaseButton } from '@Components/Button/BaseButton'
import { ModeButton } from '@Components/Button/ModeButton'
import { ROUTE_PATH } from '@Configure/constant'
import usePlayerStore from '@Store/usePlayerStore'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleTypePage = () => {
    const { players } = usePlayerStore()
    const {mutate: singleGameStartMutate } = useStartGameQuery()
    const navigate = useNavigate()

    const singleGameStart = () => {
        const gameStartData: IRequestGameStartData = {
            players,
            playerSelectionType: 'direct',
            category: 'serious'
        }
    
        singleGameStartMutate(gameStartData, {
            onSuccess: (data) => {
                if(data) {
                    navigate(`${ROUTE_PATH.HOME}`)
                }
            }
        })
    }
    
  return (
    <div>
        <div className='flex items-center justify-center'>
            모든 인원이 대답을 하면 다시 선택할 수 있습니다.
        </div>
        <div className='flex flex-col items-center gap-4 py-10'>
            <ModeButton>질문 대상자를 지목합니다.</ModeButton>
            <ModeButton>질문 대상자를 랜덤으로 지정합니다.</ModeButton>
        </div>
        <div className='flex items-end justify-end gap-4 py-5'>
            <BaseButton>이전</BaseButton>
            <BaseButton onClick={singleGameStart}>시작</BaseButton>
        </div>
    </div>
  )
}

export default SingleTypePage