import { create } from 'zustand';

type singleInputState = {
    username: string;
    setUsername: (name: string) => void;
}

const usePlayerStore = create<singleInputState>((set) => ({
    username: '',
    setUsername: (name) => set({username: name}),
}))

export default usePlayerStore