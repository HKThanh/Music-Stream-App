import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
    duration: 0,
    currentDuration: 0,
    isRandom: false,
    isRepeat: false,
    playlist: [],
    currentSong: null,
    sound: null,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setSound: (state, action) => {
            state.sound = action.payload;
        },
        setPlaylist: (state, action) => {
            state.playlist = action.payload;
        },
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
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

export const { 
    setPlaylist, 
    setCurrentSong, 
    setIsPlaying, 
    setSound,
    setDuration, 
    setCurrentDuration, 
    setIsRandom, 
    setIsRepeat 
} = playerSlice.actions;

export default playerSlice.reducer;