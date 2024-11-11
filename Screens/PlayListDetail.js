import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const MusicItems = ({ item, play }) => (
    <TouchableOpacity style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => play()}
    >
        <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{ width: 60, height: 60 }} />
            <View style={{marginLeft: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#000' }}>{item.artist}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="triangle-right" size={16} color="#A8ACB4" />
                    <Text style={{color: '#A8ACB4'}}>{item.view}M </Text>
                    <Entypo name="dot-single" size={24} color="#A8ACB4" />
                    <Text style={{color: '#A8ACB4'}}>{item.duration}</Text>
                </View>
            </View>
        </View>
        <Entypo name="dots-three-horizontal" size={32} color="black" />
    </TouchableOpacity>
)

const PlayMusicItem = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#000', position: 'absolute', bottom: 0, width: width }}>
        <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{ width: 60, height: 60 }} />
            <View style={{marginLeft: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 14, color: '#fff' }}>{item.artist}</Text>
                    <Entypo name="dot-single" size={24} color="#A8ACB4" />
                    <Text style={{color: '#fff'}}>{item.duration}</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: width / 5}}>
            <Ionicons name="heart-outline" size={28} color="white" />
            <Ionicons name="play-outline" size={28} color="white" />
        </View>
    </View>
)

const PlayListDetail = ({ route }) => {
    const [isClicked, setIsClicked] = useState(false);

    const play = () => {
        setIsClicked(!isClicked);
    }

    const music = [ 
        {
            id: 1,
            name: 'Tum Hi Ho',
            artist: 'Arijit Singh',
            image: require('../assets/My_Library/Image_101.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 2,
            name: 'Tera Hone Laga Hoon',
            artist: 'Atif Aslam',
            image: require('../assets/My_Library/Image_102.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 3,
            name: 'Mile Ho Tum',
            artist: 'Neha Kakkar',
            image: require('../assets/My_Library/Image_104.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 4,
            name: 'Sun Raha Hai',
            artist: 'Shreya Ghoshal',
            image: require('../assets/My_Library/Image_105.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 5,
            name: 'Sun Raha Hai',
            artist: 'Shreya Ghoshal',
            image: require('../assets/My_Library/Image_105.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 6,
            name: 'Sun Raha Hai',
            artist: 'Shreya Ghoshal',
            image: require('../assets/My_Library/Image_105.png'),
            view: 2.1,
            duration: 3.36,
        },
        {
            id: 7,
            name: 'Sun Raha Hai',
            artist: 'Shreya Ghoshal',
            image: require('../assets/My_Library/Image_105.png'),
            view: 2.1,
            duration: 3.36,
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="chevron-left" size={32} />
                <MaterialIcons name="cast" size={32} />
            </View>
            <View style={styles.playlist}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/Playlist_Details_Audio_Listing/Image_50.png')} />
                    <View style={{position: 'absolute'}}>
                        <Text style={styles.playlistImageName}>Top 50</Text>
                        <Text style={styles.playlistImageName}>Canada</Text>
                    </View>
                </View>
                <View style={{marginLeft: 10, justifyContent: 'space-between', height: '100%'}}>
                    <Text style={styles.playlistName}>Top 50 - Canada</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome6 name="heart" size={16} color="cyan" />
                        <Text style={[styles.normalText, {marginLeft: 10}]}>1,234</Text>
                        <Entypo name="dot-single" size={32} color="black" />
                        <Text style={styles.normalText}>05:10:18</Text>
                    </View>
                    <Text style={styles.normalText}>Daily chart-toppers update</Text>
                </View>
            </View>
            <View style={{flex: 1,flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <FontAwesome6 name="heart" size={24} color="black" />
                    <MaterialCommunityIcons name="dots-horizontal" size={32} color="black" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <FontAwesome5 name="random" size={24} color="black" />
                    <MaterialIcons name="play-circle" size={64} color="black" />
                </View>
            </View>
            <View style={{flex: 5}}>
                <FlatList
                    data={music}
                    renderItem={({ item }) => <MusicItems item={item} play={play} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {isClicked ? <PlayMusicItem item={music[0]} /> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 80,
    },
    playlist: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        height: 140,
    },
    playlistName: {
        fontSize: 24,
        fontWeight: '700',
    },
    playlistImageName: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
    },
    normalText: {
        color: '#A8ACB4',
        fontSize: 16,
    }
});

export default PlayListDetail;