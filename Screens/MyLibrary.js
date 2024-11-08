import { SafeAreaView, View, Text, Image, Pressable, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const filterItem = ({ item }) => (
    <Pressable style={styles.filterContainer}>
        <Text style={styles.filterTitle}>{item.name}</Text>
    </Pressable>
)

const ArtistItems = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{ width: 60, height: 60 }} />
            <View style={{justifyContent: 'space-around', marginLeft: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name="user" size={16} color="black" />
                    <Text style={{ fontSize: 14, color: '#000', marginLeft: 10 }}>{item.followers} Followers</Text>
                </View>
            </View>
        </View>
        <Pressable style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
        </Pressable>
    </View>
)

const MusicItems = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{ width: 60, height: 60 }} />
            <View style={{marginLeft: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#000' }}>{item.artist}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="triangle-right" size={16} color="white" />
                    <Text>{item.view}M </Text>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text>{item.duration}</Text>
                </View>
            </View>
        </View>
        <Entypo name="heart" size={36} color="cyan" />
    </View>
)

const AlbumItems = ({ item }) => (
    <View style={styles.playListContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.playListTitle}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.author}>{item.author}</Text>
                <Entypo name="dot-single" size={36} color="#B3B6BD" />
                <Text style={styles.numberOfSongs}>{item.numberOfSongs} Songs</Text>
            </View>
        </View>
        <Pressable style={{position: 'absolute', right: 10}}>
            <MaterialCommunityIcons name="chevron-right" size={40} color="black" />
        </Pressable>
    </View>
)

const MyLibrary = () => {
    const filter = [
        {
            id: 1,
            name: 'PlayLists',
        },
        {
            id: 2,
            name: 'New tag',
        },
        {
            id: 3,
            name: 'Songs',
        },
        {
            id: 4,
            name: 'Albums',
        },
        {
            id: 5,
            name: 'Artists',
        },
    ]

    const artist = [
        {
            id: 1,
            name: 'Arijit Singh',
            followers: 1234,
            image: require('../assets/My_Library/Image_107.png'),
        },
        {
            id: 2,
            name: 'Atif Aslam',
            followers: 1234,
        },
        {
            id: 3,
            name: 'Neha Kakkar',
            followers: 1234,
        },
        {
            id: 4,
            name: 'Shreya Ghoshal',
            followers: 1234,
        },
    ]

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
    ]

    const album = [
        {
            id: 1,
            title: 'Ipsum sit nulla',
            author: 'Asley Scott',
            numberOfSongs: 12,
            image: require('../assets/My_Playlists/Image_110.png')
        },
        {
            id: 2,
            title: 'Occaecat aliq',
            author: 'Jose Garcia',
            numberOfSongs: 4,
            image: require('../assets/My_Playlists/Image_111.png')
        },
    ]
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Your Library</Text>
                <Entypo name="magnifying-glass" size={32} color="black" />
            </View>
            <FlatList
                data={filter}
                renderItem={filterItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={artist.filter((item, index) => index < 1)}
                renderItem={ArtistItems}
            />
            <FlatList
                data={music}
                renderItem={MusicItems}
            />
            <FlatList
                data={album}
                renderItem={AlbumItems}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '700',
    },
    filterContainer: {
        padding: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 20,
        marginRight: 10,
    },
    filterTitle: {
        color: '#000',
        fontSize: 16,
    },
    followButton: {
        height: 40,
        width: 80,
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    followText: {
        color: '#fff',
        fontSize: 16,
    },
    playListContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 10,
    },
    playListTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    author: {
        fontSize: 16,
        fontWeight: '500',
        color: '#B3B6BD',
    },
    numberOfSongs: {
        fontSize: 16,
        fontWeight: '500',
        color: '#B3B6BD',
    }
});

export default MyLibrary;