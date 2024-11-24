import { Audio } from 'expo-av';
import { setDuration, setCurrentDuration, setCurrentSong } from '../redux-toolkit/playerSlice';

class MusicManager {
    constructor(dispatch) {
        if (!MusicManager.instance) {
            this.currentSong = null;
            this.sound = null;
            this.dispatch = dispatch;
            this.isPlaying = false;
            this.playlist = [];
            MusicManager.instance = this;
        }
        return MusicManager.instance;
    }

    // Get the MusicManager instance (singleton)
    static getInstance(dispatch) {
        if (!MusicManager.instance) {
            MusicManager.instance = new MusicManager(dispatch);
        } else if (dispatch) {
            MusicManager.instance.dispatch = dispatch; // Update dispatch if provided
        }
        return MusicManager.instance;
    }

    // Stop and unload the current sound
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

    // Load and play the sound from a given URI
    async playSound(uri) {
        try {
            if (!uri) throw new Error('Audio URI is invalid or undefined.');
            await this.stopCurrentSound();
    
            const { sound } = await Audio.Sound.createAsync({ uri });
            this.sound = sound;
            this.isPlaying = true;
    
            await sound.playAsync();
            this.sound.setOnPlaybackStatusUpdate((status) => this.handlePlaybackStatus(status));
    
            const status = await this.sound.getStatusAsync();
            if (status.isLoaded) {
                const totalDuration = Math.floor(status.durationMillis / 1000);
                this.dispatch(setDuration(totalDuration));
            }
        } catch (error) {
            console.error('Error playing sound:', error);
            this.handleNextTrack(); // Automatically skip to the next track on error
        }
    }

    // Set the playlist and current song
    setPlaylist(playlist, currentSong) {
        this.playlist = playlist;
        this.currentSong = currentSong;
    }

    // Handle playback status updates
    handlePlaybackStatus(status) {
        if (status.isLoaded) {
            // Update current playback position
            const current = Math.floor(status.positionMillis / 1000);
            this.dispatch(setCurrentDuration(current));

            // Replay when finished
            // if (status.didJustFinish && !status.isLooping) {
            //     this.sound
            //         .replayAsync()
            //         .then(() => console.log('Replay successful'))
            //         .catch((error) => console.error('Error replaying sound:', error));
            // }

            // next track when finished
            if (status.didJustFinish) {
                console.log('Song finished playing, moving to next track.');
                this.handleNextTrack(); // Reset current duration
            }
        } else if (status.error) {
            console.error('Playback error:', status.error);
        }
    }

    // Resume playback of the current sound
    async resumeSound() {
        try {
            if (this.sound && !this.isPlaying) {
                await this.sound.playAsync();
                this.isPlaying = true;
            }
        } catch (error) {
            console.error('Error resuming sound:', error);
        }
    }

    // Pause the current sound
    async pauseSound() {
        try {
            if (this.sound && this.isPlaying) {
                await this.sound.pauseAsync();
                this.isPlaying = false;
            }
        } catch (error) {
            console.error('Error pausing sound:', error);
        }
    }

    // Handle slider value changes (seek functionality)
    async handleSliderValueChange(value) {
        try {
            if (this.sound) {
                await this.sound.setPositionAsync(value * 1000); // Convert seconds to milliseconds
                this.dispatch(setCurrentDuration(value));
            }
        } catch (error) {
            console.error('Error updating slider position:', error);
        }
    }

    // Get the next track URI from the playlist
    getNextTrackUri() {
        if (!this.playlist || !this.currentSong) {
            throw new Error('Playlist or current song is not defined.');
        }
        const currentIndex = this.playlist.findIndex(song => song.id === this.currentSong.id);
        if (currentIndex === -1) {
            throw new Error('Current song not found in playlist.');
        }
        const nextIndex = (currentIndex + 1) % this.playlist.length;
        return this.playlist[nextIndex].preview; // Ensure correct property
    }

    // Get the previous track URI from the playlist
    getPreviousTrackUri() {
        const currentIndex = this.playlist.findIndex(song => song.id === this.currentSong.id);
        const previousIndex = (currentIndex - 1 + this.playlist.length) % this.playlist.length;
        return this.playlist[previousIndex].uri;
    }

    // Handle the next track button press
    async handleNextTrack() {
        try {
            const nextIndex = (this.playlist.findIndex(song => song.id === this.currentSong.id) + 1) % this.playlist.length;
            this.currentSong = this.playlist[nextIndex]; // Update currentSong
            this.dispatch(setCurrentSong(this.currentSong));
            const nextUri = this.currentSong.preview; // Use correct property name
            await this.playSound(nextUri);
        } catch (error) {
            console.error('Error playing next track:', error);
        }
    }

    // Handle the previous track button press
    async handlePreviousTrack() {
        try {
            const previousUri = this.getPreviousTrackUri();
            await this.playSound(previousUri);
        } catch (error) {
            console.error('Error playing previous track:', error);
        }
    }

}

export default MusicManager;