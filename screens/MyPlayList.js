import { SafeAreaView, Text, Image, Pressable, View, StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const playListItem = ({ item }) => (
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

const MyPlayList = () => {
    const item = [
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
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable>
                    <MaterialCommunityIcons name="chevron-left" size={32} color="black" />
                </Pressable>
                <Text style={styles.title}>PlayLists</Text>
                <Pressable>
                    <MaterialCommunityIcons name="cast" size={32} color="black" />
                </Pressable>
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.yourPlayList}>Your Playlists</Text>
                <FlatList 
                    data={item}
                    renderItem={playListItem}
                />
            </View>
            <Pressable style={{position: 'absolute', right: 10, bottom: 20}}>
                <Image source={require('../assets/My_Playlists/Icon_Button_5.png')} />
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    middleView: {
        padding: 10,
    },
    yourPlayList: {
        fontSize: 28,
        fontWeight: '700',
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

export default MyPlayList;