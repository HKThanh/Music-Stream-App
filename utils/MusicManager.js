import { Audio } from 'expo-av';
import { setDuration, setCurrentDuration } from '../redux-toolkit/playerSlice';

class MusicManager {
    constructor(dispatch) {
        if (!MusicManager.instance) {
            this.sound = null;
            this.dispatch = dispatch;
            MusicManager.instance = this;
        }
        return MusicManager.instance;
    }

    // get MusicManager instance
    static getInstance(dispatch) {
        if (!MusicManager.instance) {
            MusicManager.instance = new MusicManager(dispatch);
        }
        return MusicManager.instance;
    }

    // Stop the current sound
    async stopCurrentSound() {
        if (this.sound) {
            try {
                await this.sound.stopAsync();
                await this.sound.unloadAsync();
                this.sound = null;
                this.isPlaying = false;
            } catch (error) {
                console.error('Error stopping current sound:', error);
            }
        }
    }

    // Load and play the sound
    async playSound(uri) {
        try {
            if (!uri) throw new Error('Invalid audio URI');

            await this.stopCurrentSound();

            const { sound } = await Audio.Sound.createAsync({ uri });
            this.sound = sound;
            this.isPlaying = true;

            await sound.playAsync();

            // Add a playback status listener
            this.sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded) {
                    const current = Math.floor(status.positionMillis / 1000);
                    this.dispatch(setCurrentDuration(current));
                }
            });

            // Update duration
            const status = await this.sound.getStatusAsync();
            if (status.isLoaded) {
                const totalDuration = Math.floor(status.durationMillis / 1000);
                this.dispatch(setDuration(totalDuration));
            }
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }

    // Resume the sound
    async resumeSound() {
        try {
            if (this.sound) {
                await this.sound.playAsync();
                this.isPlaying = true;
            }
        } catch (error) {
            console.error('Error resuming sound:', error);
        }
    }

    // Pause the sound
    async pauseSound() {
        try {
            if (this.sound) {
                await this.sound.pauseAsync();
                this.isPlaying = false;
            }
        } catch (error) {
            console.error('Error pausing sound:', error);
        }
    }

    // Handle slider value change
    async handleSliderValueChange(value) {
        if (this.sound) {
            try {
                await this.sound.setPositionAsync(value * 1000); // Convert seconds to milliseconds
                this.dispatch(setCurrentDuration(value));
            } catch (error) {
                console.error('Error updating position:', error);
            }
        }
    }
}

export default MusicManager;