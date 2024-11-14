import { StyleSheet, Text, View, Pressable, ImageBackground, Image,FlatList, Touchable} from "react-native";
import React from "react";
// import React,{useEffect,useState} from 'react'

import avatar1 from '../assets/Feed_Audio_Listing/Avatar_4.png';
import avatar2 from '../assets/Feed_Audio_Listing/Avatar_5.png';
import image1 from '../assets/Feed_Audio_Listing/Image_93.png';
import image2 from '../assets/Feed_Audio_Listing/Image_94.png';
const data = [
    { id: '1', 
    avatar: '../assets/Feed_Audio_Listing/Avatar_4.png',
    name: 'Jesica Gozalez',
    date: '1 day ago',
    title: 'Flowers',
    numberoflisteners: '1.2k',
    duration: '03:45',
    author: 'Jesica Gozalez',
    like: '1000',
    comment: '1200',
    share: '3',
    bluetick: 'true',
    img:'../assets/Feed_Audio_Listing/Image_93.png',
     },
     { id: '2', 
        avatar: '../assets/Feed_Audio_Listing/Avatar_5.png',
        name: 'Jesica Gozalez',
        date: '1 day ago',
        title: 'Flowers',
        numberoflisteners: '1.2k',
        duration: '03:45',
        author: 'Jesica Gozalez',
        like: '1.2k',
        comment: '1.2k',
        share: '1.2k',
        bluetick: 'false',
        img:'../assets/Feed_Audio_Listing/Image_94.png',
         },
  ];

  const renderFeed = ({item}) => {
    return (
        <View style={styles.feedContainer}>
            <View style={styles.feedHeader}>
                <View style={styles.feedHeaderLeft}>
                    <Image source={require('../assets/Feed_Audio_Listing/Avatar_4.png')} style={styles.avatar} />
                    <View>
                        <View style={{flexDirection:'row'}} >
                        <Text style={styles.name}>{item.name}</Text>
                        {item.bluetick==='true' && <Image source={require('../assets/Check-Circle--Streamline-Outlined----Material-Symbols.png')} style={{width:16,height:16,marginTop:5,marginLeft:2}}/>}
                        {/* <Image source={require('../assets/Check-Circle--Streamline-Outlined----Material-Symbols.png')} style={{width:16,height:16,marginTop:5,marginLeft:2}}/> */}
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Text style={styles.date}>Posted a track </Text>
                        <Image source={require('../assets/Headspace--Streamline-Simple-Icons.png')} style={{width:6,height:6,marginTop:8}}/>
                        <Text style={styles.date}> {item.date}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.feedBody}>
                <ImageBackground source={require('../assets/Feed_Audio_Listing/Image_93.png')} style={{width: '100%', height: 300,justifyContent:'end',alignItems:'end',flexDirection:
                'column',borderRadius:10,overflow:'hidden'
                }} imageStyle={{borderRadius: 10}}>
                    <View style={{width:'100%',backgroundColor:'rgba(0,0,0,0.5)',borderRadius:10,padding:10,justifyContent:'center',alignItems:'start',height:'40%',position: 'absolute', bottom: 0,
                    }}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.author}>{item.author}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:120,marginTop:25
                            }}> 
                                <Image source={require('../assets/Player-Play--Streamline-Tabler.png')} style={{width:14,height:14}}/>
                                <Text style={styles.duration}>{item.numberoflisteners}</Text>
                                <Image source={require('../assets/Vector.png')} style={{width:8,height:8}}/>
                                <Text style={styles.duration}>{item.duration}</Text>
                            </View>
                        </View>
                    </View>
                    </ImageBackground>
            </View>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',}} >
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:5,width:180}}>
                   <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/Comments/Favorite--Streamline-Carbon.png')} style={{width:20,height:20}}/>
                            <Text> {item.like}</Text>
                   </Pressable>
                   <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/Comments/Comment-2-Text-Line--Streamline-Majesticons.png')} style={{width:18,height:18}}/>
                            <Text> {item.comment}</Text>
                   </Pressable>
                   <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/Comments/Refresh-Cw--Streamline-Lucide.png')} style={{width:16,height:16}}/>
                            <Text> {item.share}</Text>
                   </Pressable>
                   
                   
                </View>
                <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/Comments/Three-Dots--Streamline-Bootstrap.png')} style={{width:20,height:20}}/>
                   </Pressable>
            </View>

        </View>
    );
}
function FeedAudio() {
    // const [feed, setFeed] = useState([]);
    return (
        <View style={styles.container}>
           <FlatList data={data}  renderItem={renderFeed} keyExtractor={item=>item.id}
           />
        </View>
    );
}
export default FeedAudio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    feedContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    feedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feedHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#ccc',
    },
    feedHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    number: {
        fontSize: 14,
        color: '#ccc',
    },
    feedBody: {
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    duration: {
        fontSize: 14,
        color: '#fff',
    },
    author: {
        fontSize: 16,
        color: '#fff',
    },

});