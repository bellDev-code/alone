import { TPlaySelectionType } from '@Api/types';
import { ModeButton } from '@Components/Button/ModeButton';
import React from 'react'

interface IProps {
    selectedPlayType: TPlaySelectionType;
    // 타입스크립트에서 setState를 props로 넘길때 사용
    setSelectedPlayType: React.Dispatch<React.SetStateAction<TPlaySelectionType>>;
}

const index = ({ selectedPlayType, setSelectedPlayType }: IProps) => {
    const handleClickType = (type: TPlaySelectionType) => {
        setSelectedPlayType(type)
    }

    const isRandom = selectedPlayType === 'random'

  return (
    <div className='flex flex-col items-center gap-4 py-10'>
        <ModeButton 
            onClick={() => handleClickType('direct')}
        >질문 대상자를 지목합니다.
        </ModeButton>
        <ModeButton
            onClick={() => handleClickType('random')}
        >질문 대상자를 랜덤으로 지정합니다.
        </ModeButton>
    </div>
  )
}

export default index