import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
import CustomSlider from '../components/CustomSlider';
import Slider from '@react-native-community/slider';

const MusicPlayer = ({navigation, route }) => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);
    const [position, setPosition] = useState(0);
    const soundRef = useRef(null);

    item = {
        url: "https://qwgduhsdzdrxiflrkovg.supabase.co/storage/v1/object/sign/ncs/Royalty.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuY3MvUm95YWx0eS5tcDMiLCJpYXQiOjE3MzE1ODAwODYsImV4cCI6MTczNDE3MjA4Nn0.5qM5yo9A3r2IzuEpBfTFdWSn6qy8yWoD8spkRXmEVfw&t=2024-11-14T10%3A28%3A06.819Z",
        name: 'Royalty',
        artist: 'Egzod',
        artwork: 'https://linkstorage.linkfire.com/medialinks/images/374fc4ba-fe39-4bcf-9cf0-74c87c879ed0/artwork-440x440.jpg'
    }

    async function playSound() {
        try {
            if (!item || !item.url) {
                throw new Error('Invalid item or URL');
            }

            const { sound } = await Audio.Sound.createAsync({ uri: item.url });
                setSound(sound);
                soundRef.current = sound;
                await sound.playAsync();
            
            if (soundRef.current) {
                await soundRef.current.setPositionAsync(position);
                await soundRef.current.playAsync();
            }

            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }

    // stop sound
    async function stopSound() {
        try {
            if (!sound) {
                throw new Error('Invalid sound');
            }
            setIsPlaying(!isPlaying);
            await sound.pauseAsync();
        } catch (error) {
            console.error('Error stopping sound:', error);
        }
    }

    // pause sound
    async function pauseSound() {
        try {
            if (soundRef.current) {
                const status = await soundRef.current.getStatusAsync();
                setPosition(status.positionMillis);
                await soundRef.current.pauseAsync();
            }

            setIsPlaying(false);
        } catch (error) {
            console.error('Error pausing sound:', error);
        }
    }

    // get sound duration
    useEffect(() => {
        if (sound) {
            sound.getStatusAsync().then((status) => {
                if (status.isLoaded) {
                    const durationInSeconds = Math.floor(status.durationMillis / 1000);
                    setDuration(durationInSeconds);
    
                    const currentPositionInSeconds = Math.floor(status.positionMillis / 1000);
                    setCurrentDuration(currentPositionInSeconds);
                }
            });
    
            // Update the slider in real-time during playback
            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded) {
                    const currentPositionInSeconds = Math.floor(status.positionMillis / 1000);
                    setCurrentDuration(currentPositionInSeconds);
                }
            });
        }
    }, [sound]);

    // make a slider to change the current duration
    const handleSliderValueChange = async (value) => {
        if (soundRef.current) {
            try {
                await soundRef.current.setPositionAsync(value * 1000); // Convert seconds to milliseconds
                setCurrentDuration(value); // Update UI
            } catch (error) {
                console.error('Error updating position:', error);
            }
        }
    };

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
                }
            : undefined;
    }, [sound]);

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
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <Image source={{uri: item.artwork}} style={{height: 400, width: 400}}></Image>

                {/* Song Info */}
                <View style={styles.songInfoContainer}>
                    <Text style={styles.songTitle}>{item.name}</Text>
                    <Text style={styles.artistName}>{item.artist}</Text>
                </View>

                {/* Waveform and Time */}
                <View style={styles.waveformContainer}>
                    {/* <Icon name="waveform" size={30} color="white" /> */}
                    < CustomSlider 
                        currentDuration={currentDuration} 
                        duration={duration} 
                        onSlidingComplete={handleSliderValueChange}
                    />

                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{formatTime(currentDuration)}</Text>
                        <Text style={styles.timeText}>{formatTime(duration)}</Text>
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
                    <TouchableOpacity style={styles.playButton}>
                        {isPlaying ? (
                            <Icon name="pause" size={30} color="black" onPress={pauseSound} />
                        ) : (
                            <Icon name="play" size={30} color="black" onPress={playSound} />
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