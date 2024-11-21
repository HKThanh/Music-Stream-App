import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView,TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import playerSlice from '../redux-toolkit/playerSlice';
import PlayMusicItem from '../components/MinimizedPlayMusicItem';

const ProfileHeader = () => {
    return (
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/122e3b852695630d71c19913205bc5015c4996f921c924d361c45fb493ed4edd?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <Text style={styles.artistName}>Ryan Young</Text>
        <Text style={styles.followerCount}>65.1K Followers</Text>
      </View>
    );
  };

  const ActionButtons = () => {
    return (
      <View style={styles.actionButtons}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          <Image
            source={require('../assets/Artist_Profile/Shuffle--Streamline-Font-Awesome.png')}
            style={styles.moreIcon}
            resizeMode="contain"
          />
            </TouchableOpacity>
        </View>
        <View style={styles.iconGroup}>
            <TouchableOpacity style={{}}>
          <Image
            source={require('../assets/Artist_Profile/Three-Dots--Streamline-Bootstrap.png')}
            style={styles.shuffleIcon}
            resizeMode="contain"
          />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          <Image
            source={require('../assets/Artist_Profile/Icon_Button_4.png')}
            style={styles.playIcon}
            resizeMode="contain"
          />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const PopularTrack = () => {
    const track = [
        {
            id: '1',
            title: 'Me',
            artist: 'Ryan Young',
            playCount: '68M',
            duration: '03:36',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fee5d29de9b1d8bdca1df866a730d4bb89dc3b242016c0d9030659ee4891df15?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27',
        },
        {
            id: '2',
            title: 'Me',
            artist: 'Ryan Young',
            playCount: '68M',
            duration: '03:36',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fee5d29de9b1d8bdca1df866a730d4bb89dc3b242016c0d9030659ee4891df15?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27',
        },
        {
            id: '3',
            title: 'Me',
            artist: 'Ryan Young',
            playCount: '68M',
            duration: '03:36',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fee5d29de9b1d8bdca1df866a730d4bb89dc3b242016c0d9030659ee4891df15?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27',
        },
    ];
    const renderTrack = ({ item }) => {
        return (
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={{ uri: item.image }} style={styles.trackImage} resizeMode="contain" />
                <View style={styles.trackDetails}>
                    <Text style={styles.trackTitle}>{item.title}</Text>
                    <Text style={styles.artistTrackName}>{item.artist}</Text>
                    <View style={styles.trackStats}>
                        <Image source={require ('../assets/Artist_Profile/Player-Play--Streamline-Tabler.png')} style={styles.playIcon} resizeMode="contain" />
                        <Text style={styles.playCount}>{item.playCount}</Text>
                        <Image source={require ('../assets/Artist_Profile/Vector.png')} style={styles.durationIcon} resizeMode="contain" />
                        <Text style={styles.duration}>{item.duration}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{}}>
                <Image source={require ('../assets/Artist_Profile/Three-Dots--Streamline-Bootstrap.png')} style={{width:20,height:20,}} resizeMode="contain" />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };
    return (
      <View style={styles.popularTrack}>
        <View style={styles.trackInfo}>
          <Text style={styles.sectionTitle}>Popolar</Text>
          {/* <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fee5d29de9b1d8bdca1df866a730d4bb89dc3b242016c0d9030659ee4891df15?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
            style={styles.trackImage}
            resizeMode="contain"
          /> */}
          {/* <View style={styles.trackDetails}>
            <Text style={styles.trackTitle}>Me</Text>
            <Text style={styles.artistName}>Ryan Young</Text>
            <View style={styles.trackStats}>
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5fad4bdb5c4be6d8b04c8a33c6e32ab257625a4c2c0f4bdf52d8f9ed29b1227?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
                style={styles.playIcon}
                resizeMode="contain"
              />
              <Text style={styles.playCount}>68M</Text>
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/be5af87dd22e53f824b0681f9f0fa71c636431ee411382585020cd0f98eef306?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
                style={styles.durationIcon}
                resizeMode="contain"
              />
              <Text style={styles.duration}>03:36</Text>
            </View>
          </View> */}
          <FlatList data={track} renderItem={renderTrack} keyExtractor={item=>item.id}/>
        </View>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/18e69840fe81ce9d9a82989bae550dd8fd3a83d4faab7a753c03e6260ae709d5?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
          style={styles.moreIcon}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  const AlbumSection = () => {
    const album = [
        {
            id: '1',
            title: 'Me',
            artist: 'Jessica Gonzales',
            img: require('../assets/Artist_Profile/Image_71.png'),
        },
        {
            id: '2',
            title: 'Make me crazy',
            artist: 'Jessica Gonzales',
            img: require('../assets/Artist_Profile/Image_72.png'),
        },
        {
            id: '3',
            title: 'Me',
            artist: 'John Doe',
            img: require('../assets/Artist_Profile/Image_72.png'),
        },
    ]
    const renderAlbum = ({ item }) => {
        return (
            <View style={{marginRight: 20}}>
                <TouchableOpacity style={{}}>
                <Image source={item.img} style={{width: 100, aspectRatio: 1}} />
                <Text style={{ fontFamily: 'Roboto', fontSize: 16, color: '#000000', fontWeight: '700',marginTop:5}}>{item.title}</Text>
                <Text style={{ fontFamily: 'Roboto', fontSize: 14, color: '#B3B6BD', fontWeight: '600',marginBottom:5}}>{item.artist}</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
    return (
      <View style={styles.albumSection}>
            <Text style={styles.albumsTitle}>Albums</Text>
            <FlatList data={album} renderItem={renderAlbum} keyExtractor={item=>item.id} horizontal showsHorizontalScrollIndicator={false}/>
      </View>
    );
  };
  const AboutSection = () => {
    return (
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitleAbout}>About</Text>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3930f16bc70371a2d52fc743482d0d80d2a53edf0680dfede1d935d16f034e31?placeholderIfAbsent=true&apiKey=a7d7da211ad44a5aab803d9d255fbf27" }}
          style={styles.aboutImage}
          resizeMode="contain"
        />
        <Text style={styles.shortDescription}>
          Aenean nec lorem. In porttitor. Donec laoreet
        </Text>
        <Text style={styles.fullDescription}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna
        </Text>
        <TouchableOpacity style={{}}>
        <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const FansAlsoLike = () => {
    const fansalsolike = [
        {
            id: '1',
            title: 'Me',
            artist: 'Jessica Gonzales',
            img: require('../assets/Artist_Profile/Image_71.png'),
        },
        {
            id: '2',
            title: 'Make me crazy',
            artist: 'Jessica Gonzales',
            img: require('../assets/Artist_Profile/Image_72.png'),
        },
        {
            id: '3',
            title: 'Me',
            artist: 'John Doe',
            img: require('../assets/Artist_Profile/Image_72.png'),
        },
    ]
    const renderfansalsolike = ({ item }) => {
        return (
            <View style={{marginRight: 20}}>
                <TouchableOpacity style={{}}>
                <Image source={item.img} style={{width: 100, aspectRatio: 1}} />
                <Text style={{ fontFamily: 'Roboto', fontSize: 16, color: '#000000', fontWeight: '700',marginTop:5}}>{item.title}</Text>
                <Text style={{ fontFamily: 'Roboto', fontSize: 14, color: '#B3B6BD', fontWeight: '600',marginBottom:5}}>{item.artist}</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
    return (
      <View style={styles.albumSection}>
            <Text style={styles.albumsTitle}>Fans Also Like</Text>
            <FlatList data={fansalsolike} renderItem={renderfansalsolike} keyExtractor={item=>item.id} horizontal showsHorizontalScrollIndicator={false}/>
      </View>
    );
  };
const ArtistProfile = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player);

    return (
      <ScrollView style={styles.container}>
        <ProfileHeader/>
        <ActionButtons/>
        <PopularTrack />
        <AlbumSection />
        <AboutSection />
        <FansAlsoLike />
        <View style={{height: 80}} />
        {player.currentSong && <PlayMusicItem item={player.currentSong} screen={'ArtistProfile'} />}
        </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      },
    profileHeader: {
        alignItems: 'center',
        paddingTop: 14,
      },
    profileImage: {
        width: 240,
        aspectRatio: 1,

      },
    artistName: {
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        textAlign: "center",
        color: "black",

      },
    followerCount: {
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "600",
        textAlign: "center",
        color: "#858A8D",
        marginTop: 19,

      },
    actionButtons: {
        paddingHorizontal: 10,
        marginTop: 39,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
      },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '45%',
        alignItems: 'center',
      },
    followButton: {
        borderRadius: 20,
        borderColor: "#B3B6BD",
        borderWidth: 1,
        paddingHorizontal: 34,
        paddingVertical: 15,
      },
    followButtonText: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#B3B6BD",
        fontWeight: "500",
      },
    moreIcon: {
        width: 20,
        aspectRatio: 1,
        marginLeft: 33,
      },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '30%',
      },
    shuffleIcon: {
        width: 20,
        aspectRatio: 1,
        marginRight: 24,
      },
    playIcon: {
        width: 52,
        aspectRatio: 1,
      },
    popularTrack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
        paddingHorizontal: 10,
      },
    trackInfo: {
        flex: 1,
      },
    sectionTitle: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
      },
    trackImage: {
        width: 60,
        aspectRatio: 1,
        marginTop: 14,
      },
    trackDetails: {
        marginTop: 15,
        width: '70%',
        marginLeft: 15,
      },
    trackTitle: {
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
      },
      artistTrackName: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: "500",
        color: "#B3B6BD",
      },
      trackStats: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
      },
      playIcon: {
        width: 12,
        aspectRatio: 1,
      },
      playCount: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: "500",
        color: "#B3B6BD",
        marginLeft: 6,
      },
      durationIcon: {
        width: 6,
        aspectRatio: 1,
        marginLeft: 6,
      },
      duration: {
        fontFamily: "Roboto",
        fontSize: 11,
        fontWeight: "500",
        color: "#B3B6BD",
        marginLeft: 6,
      },
      moreIcon: {
        width: 20,
        aspectRatio: 1,
      },
      albumsTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 10,
  },
   albumSection: {
    paddingHorizontal: 10,
  },
  aboutSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitleAbout: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
  },
  aboutImage: {
    width: '100%',
    maxWidth: 350,
    aspectRatio: 2.29,
    marginTop: 24,
  },
  shortDescription: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    color: "#A0A5AF",
    marginTop: 15,
    marginRight: 20,
  },
  fullDescription: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    color: "#B3B6BD",
    marginTop: 11,
    marginRight: 26,
  },
  viewMore: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "600",
    color: "#61C0CD",
    textAlign: "center",
    marginTop: 20,
  },
  });
  
  export default ArtistProfile;