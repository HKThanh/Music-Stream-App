import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import {setAlbum, setCurrentSong} from "../redux-toolkit/playerSlice";
import PlayMusicItem from "../components/MinimizedPlayMusicItem";
import MusicManager from "../utils/MusicManager";

const { width } = Dimensions.get('window');

const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}   

const MusicItems = ({ item, navigation }) => (
    <TouchableOpacity style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => navigation.navigate('MusicPlayer', { item, screen: 'PlayListDetail' })}
    >
        <View style={{flexDirection: 'row'}}>
            <Image source={{uri: item.album.cover}} style={{ width: 60, height: 60 }} />
            <View style={{marginLeft: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                <Text style={{ fontSize: 14, color: '#000' }}>{item.artist.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="triangle-right" size={16} color="#A8ACB4" />
                    <Text style={{color: '#A8ACB4'}}>{item.rank} </Text>
                    <Entypo name="dot-single" size={24} color="#A8ACB4" />
                    <Text style={{color: '#A8ACB4'}}>{formatDuration(item.duration)}</Text>
                </View>
            </View>
        </View>
        <Entypo name="dots-three-horizontal" size={32} color="black" />
    </TouchableOpacity>
)

const PlayListDetail = ({ navigation, route }) => {
    const { id } = route.params;

    const api = 'https://api.deezer.com/album/' + id;
    const player = useSelector(state => state.player);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => dispatch(setAlbum(data.tracks.data)))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="chevron-left" size={32}
                    onPress={() => navigation.goBack()}
                />
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
                    data={player.album}
                    renderItem={({ item }) => <MusicItems item={item} navigation={navigation} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {player.currentSong && <PlayMusicItem item={player.currentSong} screen={"PlayListDetail"} />}
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