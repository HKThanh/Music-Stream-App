import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
import CustomSlider from '../components/CustomSlider';
import {
    setSound,
    setCurrentSong,
    setIsPlaying,
    setCurrentDuration,
    setDuration
} from '../redux-toolkit/playerSlice';

import MusicManager from '../utils/MusicManager';

const MusicPlayer = ({navigation, route }) => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player);
    const musicManager = useRef(new MusicManager(dispatch));

    const { item } = route.params;
    const { screen } = route.params;

    // stop current sound if item is different
    useEffect(() => {
        if (musicManager.current.sound != null && player.currentSong.id !== item.id) {
            musicManager.current.stopCurrentSound();
            dispatch(setIsPlaying(false));
        }
    }, [item.preview]);

    //Play Sound
    const playSound = async () => {
        try {
            musicManager.current.playSound(item.preview);
            dispatch(setSound(musicManager.current.sound));
            dispatch(setCurrentSong(item));
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    // Resume Sound
    const resumeSound = async () => {
        try {
            musicManager.current.resumeSound();
        } catch (error) {
            console.error('Error resuming sound:', error);
        }
    };

    // Pause Sound 
    const pauseSound = async () => {
        try {
            musicManager.current.pauseSound();
        } catch (error) {
            console.error('Error pausing sound:', error);
        }
    };

    // Handle Slider Value Change
    const handleSliderValueChange = async (value) => {
        musicManager.current.handleSliderValueChange(value);
    };

    // Format Time Helper
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <View style={styles.container}>
            {/* Album Art */}
            <ImageBackground
                source={require('../assets/Play_an_Audio/Image_58.png')}
                style={styles.albumArt}
            >
                {/* Top Bar */}
                <View style={styles.topBar}>
                    <Text style={styles.playText}>Play</Text>
                    <Icon name="chevron-down" size={24} color="white" 
                        onPress={() => navigation.navigate(screen)}
                    />
                </View>

                <Image source={{uri: item.artist.picture}} style={{height: 400, width: 400}}></Image>

                {/* Song Info */}
                <View style={styles.songInfoContainer}>
                    <Text style={styles.songTitle}>{item.title}</Text>
                    <Text style={styles.artistName}>{item.artist.name}</Text>
                </View>

                {/* Waveform and Time */}
                <View style={styles.waveformContainer}>
                    {/* <Icon name="waveform" size={30} color="white" /> */}
                    < CustomSlider 
                        currentDuration={player.currentDuration} 
                        duration={player.duration} 
                        onSlidingComplete={handleSliderValueChange}
                    />

                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{formatTime(player.currentDuration)}</Text>
                        <Text style={styles.timeText}>{formatTime(player.duration)}</Text>
                    </View>
                </View>

                {/* Playback Controls */}
                <View style={styles.controlsContainer}>
                    <TouchableOpacity>
                        <Icon name="shuffle" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="skip-previous" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButton}
                    >
                        {player.isPlaying ? (
                            <Icon name="pause" size={30} color="black" 
                                onPress={() => {
                                    pauseSound();
                                    dispatch(setIsPlaying(false));
                                }} />
                        ) : (
                            <Icon name="play" size={30} color="black" 
                                onPress={() => {
                                    if (musicManager.current.sound != null) {
                                        resumeSound();
                                    } else {
                                        playSound();
                                    }
                                    dispatch(setIsPlaying(true));
                                }} />
                        )    
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="skip-next" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="repeat" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Bottom Icons */}
                <View style={styles.bottomIconsContainer}>
                    <View style={styles.iconWithText}>
                        <Icon name="heart-outline" size={24} color="white" />
                        <Text style={styles.iconText}>12K</Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Icon name="comment-outline" size={24} color="white" />
                        <Text style={styles.iconText}>450</Text>
                    </View>
                    <Icon name="share-outline" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 80,
    },
    playText: {
        color: 'white',
        fontSize: 18,
    },
    albumArt: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    songInfoContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    songTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    artistName: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
    },
    waveformContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    timeText: {
        color: 'white',
        fontSize: 12,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    playButton: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    iconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 4,
    },
});

export default MusicPlayer;