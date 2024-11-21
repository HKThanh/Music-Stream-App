import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setIsPlaying, setCurrentDuration, setDuration } from '../redux-toolkit/playerSlice';
import MusicManager from '../utils/MusicManager';
import Slider from '@react-native-community/slider';

const width = Dimensions.get('window').width;

const PlayMusicItem = ({ item, screen }) => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state) => state.player.isPlaying);
    const duration = useSelector((state) => state.player.duration);
    const currentDuration = useSelector((state) => state.player.currentDuration);

    const navigation = useNavigation();
    const musicManager = new MusicManager(dispatch);

    if (!item || !item.album || !item.artist) return null;

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            dispatch(setIsPlaying(false));
            musicManager.pauseSound();
        } else {
            dispatch(setIsPlaying(true));
            musicManager.resumeSound();
        }
    };

    const handlePress = () => {
        navigation.navigate('MusicPlayer', { item, screen: screen });
    };

    const handleSliderValueChange = async (value) => {
        musicManager.handleSliderValueChange(value);
    };

    return (
        <View 
            style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#021526', position: 'absolute', bottom: 0, width: width }}
        >
            <Slider 
                style={{ width: width, height: 40, position: 'absolute', top: -20 }}
                minimumValue={0}
                maximumValue={duration}
                value={currentDuration}
                minimumTrackTintColor="cyan"
                maximumTrackTintColor="#000"
                thumbTintColor="cyan"
                onSlidingComplete={handleSliderValueChange}
            />
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={{ flexDirection: 'row' }}>
                    {item.album.cover ? (
                        <Image source={{ uri: item.album.cover }} style={{ width: 60, height: 60 }} />
                    ) : (
                        <View style={{ width: 60, height: 60, backgroundColor: '#333' }} />
                    )}
                    <View style={{ marginLeft: 20 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>{item.title_short}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: '#fff' }}>{item.artist.name}</Text>
                            <Entypo name="dot-single" size={24} color="#A8ACB4" />
                            <Text style={{ color: '#fff' }}>{formatDuration(item.duration)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 5 }}>
                <Ionicons name="heart-outline" size={28} color="white" />
                <Ionicons 
                    name={isPlaying ? "pause-outline" : "play-outline"} 
                    size={28} 
                    color="white" 
                    onPress={handlePlayPause} 
                />
            </View>
        </View>
    );
};

export default PlayMusicItem;
