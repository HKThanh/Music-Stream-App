import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    FlatList,
    KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const renderSuggestionItem = ({ item }) => {
    return (
        <View style={styles.suggestionItem}>
            <Image
                source={item.imageSource}
                style={styles.suggestionImage}
                resizeMode="contain"
            />
        </View>
    )
};

const ChartItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={styles.chartItem} activeOpacity={0.7}
            onPress={() => navigation.navigate("PlayListDetail")}
        >
            <Image
                resizeMode="contain"
                source={item.imageSource}
                style={styles.chartImage}
            />
            <Text style={styles.chartText}>Daily chart-touppers{"\n"}updates</Text>
        </TouchableOpacity>
    );
}

const AlbumItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.albumItem}
            onPress={() => navigation.navigate("PlayListDetail")}
        >
            <Image
                source={item.imageSource}
                style={styles.albumImage}
                resizeMode="contain"
                accessibilityLabel={`${item.title} by ${item.artist}`}
            />
            <Text style={styles.albumTitle}>{item.title}</Text>
            <Text style={styles.albumArtist}>{item.artist}</Text>
        </TouchableOpacity>
    );
}

const ArtistItem = ({ item }) => {
    return (
        <View style={styles.artistItem}>
            <Image
                source={item.imageSource}
                style={styles.artistImage}
                resizeMode="contain"
                accessibilityLabel={item.name}
            />
            <Text style={styles.artistName}>{item.name}</Text>
            <TouchableOpacity
                style={styles.followButton}
                accessibilityLabel={`Follow ${item.name}`}
            >
                <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
        </View>
    );
};

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [inputFocus, setInputFocus] = useState(false);

    const handleSearch = (navigation) => {
        navigation.navigate("ToSearch");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/Home_Audio_Listing/Image_36.png")}
                    resizeMode="contain"
                    accessibilityLabel="Music App Header"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="notifications-outline" size={30} color="#000" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MyPlayList")}
                    >
                        <Image
                            source={require("../assets/Home_Audio_Listing/Avatar_3.png")}
                            style={{ marginLeft: 16 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.greetingContainer}>
                        <Text style={styles.morningText}>Good morning,</Text>
                        <Text style={styles.nameText}>Ashley Scott</Text>
                    </View>
                    <KeyboardAvoidingView style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            placeholderTextColor="#888"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            accessibilityLabel="Search input"
                            onPress={() => handleSearch(navigation)}
                        />
                        <TouchableOpacity
                            style={styles.searchIconContainer}
                            onPress={() => handleSearch(navigation)}
                            accessibilityLabel="Search"
                        >
                            <Ionicons name="search" size={24} color="#888" />
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                    <View style={styles.suggestionsSection}>
                        <Text style={styles.sectionTitle}>Suggestions for you</Text>
                        <FlatList
                            horizontal
                            data={[
                                {
                                    id: 1,
                                    imageSource: require("../assets/Home_Audio_Listing/Container_26.png"),
                                },
                                {
                                    id: 2,
                                    imageSource: require("../assets/Home_Audio_Listing/Container_27.png"),
                                },
                            ]}
                            renderItem={(item) => renderSuggestionItem(item)}
                            keyExtractor={(item) => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.chartSection}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.sectionTitle}>Charts</Text>
                            <TouchableOpacity
                                style={styles.seeAllButton}
                                accessibilityLabel="See All Charts"
                            >
                                <Text style={styles.seeAllText}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={[
                                {
                                    id: 1,
                                    imageSource: require("../assets/Home_Audio_Listing/Container_31.png"),
                                },
                                {
                                    id: 2,
                                    imageSource: require("../assets/Home_Audio_Listing/Container_32.png"),
                                },
                                {
                                    id: 3,
                                    imageSource: require("../assets/Home_Audio_Listing/Container_33.png"),
                                },
                            ]}
                            renderItem={({ item }) => <ChartItem item={item} navigation={navigation} />}
                            keyExtractor={(item) => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.trendingAlbums}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.sectionTitle}>Trending Albums</Text>
                            <TouchableOpacity
                                style={styles.seeAllButton}
                                accessibilityLabel="See All Trending Albums"
                            >
                                <Text style={styles.seeAllText}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={[
                                {
                                    id: 1,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_45.png"),
                                    title: "ME",
                                    artist: "Jessica Gonzalez",
                                },
                                {
                                    id: 2,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_46.png"),
                                    title: "Magna nost",
                                    artist: "Brian Thomas",
                                },
                                {
                                    id: 3,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_47.png"),
                                    title: "Magna nost",
                                    artist: "Christopb",
                                },
                            ]}
                            renderItem={({ item }) => <AlbumItem item={item} navigation={navigation} />}
                            keyExtractor={(item) => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.popularArtists}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.sectionTitle}>Popular Artists</Text>
                            <TouchableOpacity
                                style={styles.seeAllButton}
                                accessibilityLabel="See All Trending Albums"
                            >
                                <Text style={styles.seeAllText}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={[
                                {
                                    id: 1,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_39.png"),
                                    name: "Jenifer Wilson",
                                },
                                {
                                    id: 2,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_40.png"),
                                    name: "Elizabeth Hall",
                                },
                                {
                                    id: 3,
                                    imageSource: require("../assets/Home_Audio_Listing/Image_41.png"),
                                    name: "Anthony",
                                },
                            ]}
                            renderItem={({ item }) => <ArtistItem item={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        height: 80,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: 'row',
        padding: 10,
    },
    headerImage: {
        width: "100%",
        height: "100%",
        marginTop: 20,
    },
    content: {
        padding: 16,
    },
    greetingContainer: {
        marginBottom: 16,
    },
    morningText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
    },
    nameText: {
        fontSize: 26,
        fontWeight: "700",
        color: "#000",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 34,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: "#333",
    },
    searchIconContainer: {
        padding: 5,
    },
    suggestionsSection: {
        flex: 1,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        marginBottom: 10,
    },
    suggestionItem: {
        width: 240,
        alignItems: "center",
    },
    suggestionImage: {
        width: "100%",
        height: 300,
        marginBottom: 8,
    },
    chartSection: {
        marginBottom: 42,
    },
    chartItem: {
        alignItems: "center",
        marginRight: 20,
    },
    chartImage: {
        width: 140,
        height: 141,
        marginBottom: 9,
    },
    chartText: {
        fontSize: 13,
        color: "rgba(160, 165, 175, 1)",
        fontWeight: "700",
        textAlign: "center",
    },
    seeAllButton: {
        alignSelf: "center",
    },
    seeAllText: {
        fontSize: 14,
        color: "#60D6E6",
        fontWeight: "600",
    },
    trendingAlbums: {
        marginBottom: 42,
    },
    albumItem: {
        width: width * 0.33,
        marginRight: 20,
    },
    albumImage: {
        width: "100%",
        height: width * 0.3,
        marginBottom: 10,
    },
    albumTitle: {
        fontSize: 13,
        color: "rgba(0, 0, 0, 1)",
        fontWeight: "700",
    },
    albumArtist: {
        fontSize: 13,
        color: "rgba(160, 165, 175, 1)",
        marginTop: 4,
    },
    popularArtists: {
        marginBottom: 50,
    },
    artistItem: {
        alignItems: "center",
        width: width * 0.33,
        marginRight: 20,
    },
    artistImage: {
        width: "100%",
        height: width * 0.3,
        marginBottom: 10,
        borderRadius: (width * 0.3) / 2,
    },
    artistName: {
        fontSize: 13,
        color: "rgba(0, 0, 0, 1)",
        marginBottom: 5,
    },
    followButton: {
        backgroundColor: "#60D6E6",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },
    followButtonText: {
        fontSize: 12,
        color: "#FFFFFF",
        fontWeight: "600",
    },
});

export default HomeScreen;
