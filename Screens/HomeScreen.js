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

const renderSuggestionItem = ({ item }) => (
    <View style={styles.suggestionItem}>
        <Image
            source={{ uri: item.imageSource }}
            style={styles.suggestionImage}
            resizeMode="contain"
            accessibilityLabel={item.label}
        />
    </View>
);

const renderChartItem = ({ item }) => (
    <TouchableOpacity style={styles.chartItem} activeOpacity={0.7}>
        <Image
            resizeMode="contain"
            source={{ uri: item.imageSource }}
            style={styles.chartImage}
            accessible={true}
            accessibilityLabel="Chart topper image"
        />
        <Text style={styles.chartText}>Daily chart-touppers{"\n"}updates</Text>
    </TouchableOpacity>
);

const renderAlbumItem = ({ item }) => (
    <View style={styles.albumItem}>
        <Image
            source={{ uri: item.imageSource }}
            style={styles.albumImage}
            resizeMode="contain"
            accessibilityLabel={`${item.title} by ${item.artist}`}
        />
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Text style={styles.albumArtist}>{item.artist}</Text>
    </View>
);

const renderArtistItem = ({ item }) => (
    <View style={styles.artistItem}>
        <Image
            source={{ uri: item.imageSource }}
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

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [inputFocus, setInputFocus] = useState(false);

    const handleSearch = () => {
        // Implement search functionality
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c359ab28b15fa6e5b78382dfd484b95257eb1fe1af9901c4b947198dd762cec6?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                    }}
                    style={styles.headerImage}
                    resizeMode="contain"
                    accessibilityLabel="Music App Header"
                />
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.greetingContainer}>
                        <Image
                            source={{
                                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f39021c400f63792135f309f4a35376cd78481dd24df7bbe059d8bee33d3dc93?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                            }}
                            style={styles.greetingImage}
                            resizeMode="contain"
                            accessibilityLabel="Good Morning"
                        />
                        <Image
                            source={{
                                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a4c8b530bbd3b9b2831de4804230d97022021d1d8d2586208891fda490749d?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                            }}
                            style={styles.nameImage}
                            resizeMode="contain"
                            accessibilityLabel="Ashley Scott"
                        />
                    </View>
                    <KeyboardAvoidingView style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            placeholderTextColor="#888"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            accessibilityLabel="Search input"
                            onFocus={() => setInputFocus(true)}
                            onBlur={() => setInputFocus(false)}
                        />
                        <TouchableOpacity
                            style={styles.searchIconContainer}
                            onPress={handleSearch}
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
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/788632f590a57c79eb2f05f904f72605dc632e8e7fd9fe379d1058bd60084e11?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    text: "Suggestion 1",
                                    label: "Suggestion 1",
                                },
                                {
                                    id: 2,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/e8a052657fbfc59c214bae676e806eb58ce2f98e72d42033fd7d015f81ada475?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    text: "Suggestion 2",
                                    label: "Suggestion 2",
                                },
                            ]}
                            renderItem={renderSuggestionItem}
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
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/591f27d2318d11d8e749216425222dba18973cb63324aecb9fccce364dd652b0?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                },
                                {
                                    id: 2,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/485e003db08b001a065dd6b419d949f1eac660cf2cd27e495758c3b01164157d?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                },
                                {
                                    id: 3,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/485e003db08b001a065dd6b419d949f1eac660cf2cd27e495758c3b01164157d?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                },
                            ]}
                            renderItem={renderChartItem}
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
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/a56ea0874e84ff0acb7f987a8b37574f7337a28a9fe7a843f855c7aa129886df?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    title: "ME",
                                    artist: "Jessica Gonzalez",
                                },
                                {
                                    id: 2,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/7787dc91edc8211900a8e4a717d34469e2e6a05603f32e64438aac094dc0b71b?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    title: "Magna nost",
                                    artist: "Brian Thomas",
                                },
                                {
                                    id: 3,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/7787dc91edc8211900a8e4a717d34469e2e6a05603f32e64438aac094dc0b71b?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    title: "Magna nost",
                                    artist: "Christopb",
                                },
                            ]}
                            renderItem={renderAlbumItem}
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
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/e8e823b46881639013b4c8eebee4db86c222791acd1d5f3ef42307a6112462c7?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    name: "Jenifer Wilson",
                                },
                                {
                                    id: 2,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/533be8a3fe368cdad79a22f20c6b46aa5c63237fb30657030ff26aedc360efb9?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    name: "Elizabeth Hall",
                                },
                                {
                                    id: 3,
                                    imageSource:
                                        "https://cdn.builder.io/api/v1/image/assets/TEMP/533be8a3fe368cdad79a22f20c6b46aa5c63237fb30657030ff26aedc360efb9?placeholderIfAbsent=true&apiKey=7f9f1700bcf0498e9f8119abfa6364fa",
                                    name: "Anthony",
                                },
                            ]}
                            renderItem={renderArtistItem}
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
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    headerImage: {
        width: "100%",
        height: "100%",
    },
    content: {
        padding: 16,
    },
    greetingContainer: {
        marginBottom: 12,
    },
    greetingImage: {
        width: 113,
        height: 26,
        marginBottom: 8,
    },
    nameImage: {
        width: 156,
        height: 36,
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
