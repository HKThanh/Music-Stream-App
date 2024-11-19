import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    isPlaying: false,
    position: 0,
    duration: 0,
    currentDuration: 0,
    isRandom: false,
    isRepeat: false,
    playlist: [],
    currentSong: {},
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlaylist: (state, action) => {
            state.playlist = action.payload;
        },
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setCurrentDuration: (state, action) => {
            state.currentDuration = action.payload;
        },
        setIsRandom: (state, action) => {
            state.isRandom = action.payload;
        },
        setIsRepeat: (state, action) => {
            state.isRepeat = action.payload;
        },
    }
});

export const { setPlaylist, setCurrentSong, setIsPlaying, setPosition, setDuration, setCurrentDuration, setIsRandom, setIsRepeat } = playerSlice.actions;

export default playerSlice.reducer;