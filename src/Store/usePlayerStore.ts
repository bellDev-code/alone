import { create } from 'zustand';

type singleInputState = {
    username: string;
    setUsername: (name: string) => void;
    players: {username: string}[];
    addPlayers: () => void;
}

const usePlayerStore = create<singleInputState>((set) => ({
    username: '',
    setUsername: (name) => set({username: name}),
    players: [],
    addPlayers: () => {
        set((state) => {
            if(state.username) {
                const updateNames = [...state.players, { username: state.username }]

                return { players: updateNames, username: ''}
            }
            return state
        })
    }
}))

export default usePlayerStore