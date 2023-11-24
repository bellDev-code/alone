import { client } from "./client";
import { IErrorResponse, IRequestGameStartData, IResponseBase, IResponseGameInfo } from "./types";
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

const prefix = '/game/single-game'

const singleGameStart = async({
    players,
    playerSelectionType,
    category
}: IRequestGameStartData): Promise<IResponseBase<IResponseGameInfo>> => {
    const response: AxiosResponse<IResponseBase<IResponseGameInfo>, 
    IRequestGameStartData> = await client.post(`${prefix}/start`, {
        players,
        playerSelectionType,
        category
    })
    return response.data
}

export const useStartGameQuery = () => {
    return useMutation<
      IResponseBase<IResponseGameInfo>,
      AxiosError<IErrorResponse>,
      IRequestGameStartData
    >({
      mutationFn: singleGameStart,
    });
  };