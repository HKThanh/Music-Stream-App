import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const MusicItems = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
    </View>
)

const PlayListDetail = ({ route }) => {
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
        <SafeAreaView>
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
            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <FontAwesome6 name="heart" size={24} color="black" />
                    <MaterialCommunityIcons name="dots-horizontal" size={32} color="black" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <FontAwesome5 name="random" size={24} color="black" />
                    <MaterialIcons name="play-circle" size={64} color="black" />
                </View>
            </View>
            <FlatList
                data={music}
                renderItem={MusicItems}
                keyExtractor={item => item.id.toString()}
                style={{height: width}}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        height: 80,
    },
    playlist: {
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