export type IPlayer = {
    username: string;
};

export type TPlaySelectionType = 'direct' | 'random';
export type TGameCategory = 'serious' | 'funny' | 'crazy';
export type TGameType = 'single' | 'multi';
export type TPlayerSelectionType = 'direct' | 'random';

export const QuestionCategoryObject = Object.freeze({
    serious: 'serious',
    funny: 'funny',
    crazy: 'crazy',
} as const);
  
export type TQuestionCategory = keyof typeof QuestionCategoryObject;

export interface IQuestion {
    text: string;
    category: TQuestionCategory;
    createdAt: Date;
    updatedAt: Date;
}

export interface IRequestGameStartData {
    players: IPlayer[];
    playerSelectionType: TPlaySelectionType;
    category: TGameCategory;
}
  
export interface IResponseGameInfo {
    _id: string;
    selectedQuestion: IQuestion;
    selectedPlayer: IPlayer;
    isOver: boolean;
    currentRound: number;
    gameType: TGameType;
    playerSelectionType: TPlayerSelectionType;
    players: IPlayer[];
    currentQuestionIndex: number;
    questionLength: number;
    isNewRound: boolean;
}
  
export interface IResponseBase<T> {
    code: number;
    message: string;
    data: T;
}

export interface IErrorResponse {
    code: number;
    message: string;
}