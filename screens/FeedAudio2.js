import React, { useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
    TextInput,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Pressable
} from "react-native";


const date = new Date();
const { height } = Dimensions.get("window");
const data = [
    {
        id: 1,
        text: "Đọc dễ thương quá ❤️",
        author: "Sally Rooney",
        time: '2024-11-17T00:0:0.511Z',
        avarta: require('../assets/Feed_Comment_on_an_Audio/Avatar_8.png'),
        like: 2,
        reply: [
            {
                idReply: 1,
                textReply: 'Hello may friend',
                authorReply: 'MinhThat',
                time: '2012-04-23T18:25:43.515Z',
                avartaReply: require('../assets/Feed_Comment_on_an_Audio/Avatar_11.png'),
                like: 1
            },
            {
                idReply: 2,
                textReply: 'Hello may friend',
                authorReply: 'That',
                time: '2012-04-23T18:25:43.518Z',
                avartaReply: require('../assets/Feed_Comment_on_an_Audio/Avatar_9.png'),
                like: 1
            }
        ],
        isLike: 0
    },
    {
        id: 2,
        text: "Đọc dễ thương quá ❤️agfsdhgfjhgjhkhjkgjhkfkghjdfghndfhgfhbsdfakhdslgiyhfsdnligviiiireaughifdhgljkdfgkjfdhgkfdhglshfdgljdfhgkljfdhglktrdhlblg",
        author: "Cheo Rooney",
        time: '2012-04-23T18:25:43.549Z',
        avarta: require('../assets/Feed_Comment_on_an_Audio/Avatar_9.png'),
        like: 2,
        reply: [
            {
                idReply: 1,
                textReply: 'Hello may friend dskhafkladsshfdkgjbfkjgbfd kjvkjfdds hgkfdhgkfsdhgkjsdhfkgljhfdkgjhfdkjghildfshglfdhgkjfdhgksfdjghifsdhgkfdjhgkdkglgjhgkhgjhvjhjgvbyxdthfbctgbctyfdshgosiudfhgosjhpgoijjgfoijdfgoapsfohdsgihfdiuhgdfngofdkmgcbrt',
                authorReply: 'MinhThat',
                time: '2012-04-23T18:25:43.550Z',
                avartaReply: require('../assets/Feed_Comment_on_an_Audio/Avatar_8.png'),
                like: 1
            },
            {
                idReply: 2,
                textReply: 'Hello may friend',
                time: '2012-04-23T18:25:43.559Z',
                authorReply: 'That',
                avartaReply: require('../assets/Feed_Comment_on_an_Audio/Avatar_13.png'),
                like: 1
            }
        ],
        isLike: 0
    }
];
const App = () => {
    const [expandedReplies, setExpandedReplies] = useState({});
    const [expandedTexts, setExpandedTexts] = useState({});
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const [comments, setComments] = useState(data); // Danh sách bình luận
    const [newComment, setNewComment] = useState(""); // Nội dung bình luận mới
    const slideAnim = useRef(new Animated.Value(height)).current; // Giá trị bắt đầu (dưới màn hình)
    const [expandedComments, setExpandedComments] = useState({});


    const data12 = [
        {
            id: '1',
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
            img: '../assets/Feed_Audio_Listing/Image_93.png',
        },
        {
            id: '2',
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
            img: '../assets/Feed_Audio_Listing/Image_94.png',
        },
    ];

    const renderFeed = ({ item }) => {
        return (
            <View style={styles1.feedContainer}>
                <View style={styles1.feedHeader}>
                    <View style={styles1.feedHeaderLeft}>
                        <Image source={require('../assets/Feed_Audio_Listing/Avatar_4.png')} style={styles1.avatar} />
                        <View>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={styles1.name}>{item.name}</Text>
                                {item.bluetick === 'true' && <Image source={require('../assets/Check-Circle--Streamline-Outlined----Material-Symbols.png')} style={{ width: 16, height: 16, marginTop: 5, marginLeft: 2 }} />}
                                {/* <Image source={require('../assets/Check-Circle--Streamline-Outlined----Material-Symbols.png')} style={{width:16,height:16,marginTop:5,marginLeft:2}}/> */}
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles1.date}>Posted a track </Text>
                                <Image source={require('../assets/Headspace--Streamline-Simple-Icons.png')} style={{ width: 6, height: 6, marginTop: 8 }} />
                                <Text style={styles1.date}> {item.date}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles1.feedBody}>
                    <ImageBackground source={require('../assets/Feed_Audio_Listing/Image_93.png')} style={{
                        width: '100%', height: 300, justifyContent: 'end', alignItems: 'end', flexDirection:
                            'column', borderRadius: 10, overflow: 'hidden'
                    }} imageStyle={{ borderRadius: 10 }}>
                        <View style={{
                            width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'start', height: '40%', position: 'absolute', bottom: 0,
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{}}>
                                    <Text style={styles1.title}>{item.title}</Text>
                                    <Text style={styles1.author}>{item.author}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", width: 120, marginTop: 25
                                }}>
                                    <Image source={require('../assets/Player-Play--Streamline-Tabler.png')} style={{ width: 14, height: 14 }} />
                                    <Text style={styles1.duration}>{item.numberoflisteners}</Text>
                                    <Image source={require('../assets/Vector.png')} style={{ width: 8, height: 8 }} />
                                    <Text style={styles1.duration}>{item.duration}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, width: 180 }}>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Comments/Favorite--Streamline-Carbon.png')} style={{ width: 20, height: 20 }} />
                            <Text> {item.like}</Text>
                        </Pressable>
                        <Pressable onPress={showCommentSection} style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image source={require('../assets/Comments/Comment-2-Text-Line--Streamline-Majesticons.png')} style={{ width: 18, height: 18 }} />
                            <Text> {item.comment}</Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Comments/Refresh-Cw--Streamline-Lucide.png')} style={{ width: 16, height: 16 }} />
                            <Text> {item.share}</Text>
                        </Pressable>


                    </View>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Comments/Three-Dots--Streamline-Bootstrap.png')} style={{ width: 20, height: 20 }} />
                    </Pressable>
                </View>

            </View>
        );
    };
    // Hàm xử lý mở phần bình luận
    const showCommentSection = () => {
        setIsCommentVisible(true); // Đánh dấu phần bình luận đang hiển thị
        Animated.timing(slideAnim, {
            toValue: 0, // Trượt lên vị trí 0 (hiển thị)
            duration: 1000, // Thời gian chuyển động (1 giây)
            useNativeDriver: true,
        }).start();
    };

    // Hàm xử lý đóng phần bình luận
    const hideCommentSection = () => {
        Animated.timing(slideAnim, {
            toValue: height, // Trượt xuống lại vị trí ban đầu
            duration: 1000,
            useNativeDriver: true,
        }).start(() => setIsCommentVisible(false)); // Ẩn hoàn toàn sau khi animation kết thúc
    };

    // Hàm xử lý gửi bình luận
    const handleSendComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { id: comments.length + 1, text: newComment, author: "You" }]); // Thêm bình luận mới
            setNewComment(""); // Reset ô nhập
        }
    };
    const toggleReplyExpansion = (replyId) => {
        setExpandedReplies((prev) => ({
            ...prev,
            [replyId]: !prev[replyId],
        }));
    };

    const handleCreateCommentTime = (item) => {
        const commentTime = new Date(item.time);
        const currentTime = new Date();
        const timeDifference = Math.abs(currentTime - commentTime);
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

        if (hoursDifference >= 24) {
            const daysDifference = Math.floor(hoursDifference / 24);
            if (daysDifference > 30) {
                const day = commentTime.getDate().toString().padStart(2, '0');
                const month = (commentTime.getMonth() + 1).toString().padStart(2, '0');
                const year = commentTime.getFullYear();
                return ` ${day}/${month}/${year}`;
            } else {
                return `${daysDifference}days ago`;
            }
        } else {
            return `${hoursDifference}h ago`;
        }
    };
    const toggleTextExpansion = (itemId) => {
        setExpandedTexts((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    };
    const viewMoreComment = (itemId) => {
        setExpandedComments((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (isCommentVisible) hideCommentSection(); // Đóng phần bình luận khi nhấn ra ngoài
                Keyboard.dismiss(); // Ẩn bàn phím nếu đang mở
            }}
        >
            <View style={styles.container}>
                {/* Nội dung bài đăng */}
                {/* <View style={styles.feed}>
                    <Text style={styles.title}>Flower</Text>
                    <Text style={styles.author}>by Jessica Gonzalez</Text>
                    <TouchableOpacity onPress={showCommentSection} style={styles.commentButton}>
                        <Text style={styles.commentButtonText}>Comment</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles1.container}>
                    <FlatList data={data12} renderItem={renderFeed} keyExtractor={item => item.id}
                    />
                </View>

                {/* Phần bình luận */}
                {isCommentVisible && (
                    <View style={styles.overlay}>
                        <Animated.View
                            style={[
                                styles.commentSection,
                                { transform: [{ translateY: slideAnim }] },
                            ]}
                        >
                            {/* Khu vực bình luận */}
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    // Không làm gì khi chạm vào phần bình luận
                                }}
                            >
                                <View style={styles.commentContent}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <Text style={styles.commentTitle}>Comments</Text>
                                        {/* Nút đóng */}
                                        <TouchableOpacity onPress={hideCommentSection} style={{}}>
                                            <Image source={require('../assets/Feed_Comment_on_an_Audio/Chevron-Down--Streamline-Carbon.png')
                                            } style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* Danh sách bình luận */}
                                    <FlatList
                                        data={comments}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={({ item }) => (
                                            <View style={{ justifyContent: 'center' }}>
                                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                                    <Image source={item.avarta} style={{ width: 36, height: 36, borderRadius: 36 }} />
                                                    <Text style={styles.comment}>
                                                        <Text style={styles.commentAuthor}>{item.author}:</Text> {expandedTexts[item.id] ? item.text : `${item.text.substring(0, 50)}...`}
                                                        {item.text.length > 30 && (
                                                            <TouchableOpacity onPress={() => toggleTextExpansion(item.id)}>
                                                                <Text style={styles.viewMoreText}>
                                                                    {expandedTexts[item.id] ? 'Less' : 'More'}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        )}
                                                    </Text>

                                                </View>
                                                <View style={{ marginLeft: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                    {/* Giờ hiện tại trừ thời gian item.time */}

                                                    <Text style={{ fontSize: 12, color: "#827272" }} >{handleCreateCommentTime(item)}</Text>
                                                    <TouchableOpacity>
                                                        <Text style={{ fontSize: 12, color: "#827272" }}> Like</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Text style={{ fontSize: 12, color: "#827272" }} >Reply</Text>
                                                    </TouchableOpacity>
                                                    {item.reply.length > 0 && (
                                                        <TouchableOpacity onPress={() => viewMoreComment(item.id)}>
                                                            <Text style={styles.viewMoreText}>
                                                                {expandedComments[item.id] ? 'Hide Replies' : 'View More...'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )}

                                                </View>
                                                {expandedComments[item.id] && (item.reply || []).map((reply) => (
                                                    <View key={reply.idReply} style={{ marginLeft: 20, marginTop: 5 }}>
                                                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                                                            <Image source={reply.avartaReply} style={{ width: 36, height: 36, borderRadius: 36 }} />
                                                            <Text style={styles.comment}>
                                                                <Text style={styles.commentAuthor}>{reply.authorReply}:</Text>  {expandedReplies[reply.replyId] ? reply.textReply : `${reply.textReply.substring(0, 50)}...`}

                                                                {reply.textReply.length > 30 && (
                                                                    <TouchableOpacity onPress={() => toggleReplyExpansion(reply.id)}>
                                                                        <Text style={styles.viewMoreText}>
                                                                            {expandedReplies[reply.replyId] ? 'Less' : 'More'}
                                                                        </Text>
                                                                    </TouchableOpacity>
                                                                )}
                                                            </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                            {/* Giờ hiện tại trừ thời gian item.time */}
                                                            <Text style={{ fontSize: 12, color: "#827272" }} >{handleCreateCommentTime(reply)}</Text>
                                                            <TouchableOpacity>
                                                                <Text style={{ fontSize: 12, color: "#827272" }} >Like</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity>
                                                                <Text style={{ fontSize: 12, color: "#827272" }} >Reply</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                ))}
                                            </View>


                                        )}
                                        style={styles.commentList}
                                    />

                                    {/* Khung nhập bình luận mới với nút Gửi */}
                                    <View style={styles.inputContainer}>
                                        <Image source={require('../assets/Feed_Comment_on_an_Audio/Avatar_13.png')} style={{ width: 36, height: 36, borderRadius: 36 }} />
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            borderWidth: 1,
                                            borderColor: "#ddd",
                                            borderRadius: 30,
                                            paddingHorizontal: 8,
                                            backgroundColor: "#fff",
                                            height: 50,
                                            width: '85%',
                                            marginLeft: 10
                                        }}>

                                            <TextInput
                                                placeholder="Write a comment..."
                                                style={styles.input}
                                                value={newComment}
                                                onChangeText={setNewComment}
                                            />
                                            <TouchableOpacity onPress={handleSendComment} >
                                                <Image source={require('../assets/Feed_Comment_on_an_Audio/Smile--Streamline-Lucide.png')} style={{ width: 32, height: 32 }} />
                                            </TouchableOpacity>
                                        </View>


                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    </View>
                )}

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
        justifyContent: "flex-end", // Canh phần comment bên dưới
    },
    feed: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    author: {
        fontSize: 14,
        color: "#555",
        marginBottom: 8,
    },
    commentButton: {
        backgroundColor: "#007BFF",
        padding: 8,
        borderRadius: 5,
    },
    commentButtonText: {
        color: "#fff",
        textAlign: "center",
    },
    commentSection: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: height * 0.8,
        backgroundColor: "#f9f9f9",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    commentContent: {
        flex: 1,
    },
    commentTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    commentList: {
        flex: 1,
        marginBottom: 12,
    },
    comment: {
        fontSize: 14,
        marginBottom: 8,
        flexShrink: 1,
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    commentAuthor: {
        fontWeight: "bold",
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 50
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
    sendButton: {
        backgroundColor: "#007BFF",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
        marginLeft: 8,
    },
    sendButtonText: {
        color: "#fff",
        fontSize: 14,
    },
    closeButton: {
        backgroundColor: "#FF4D4D",
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
    },
    closeButtonText: {
        color: "#fff",
        textAlign: "center",
    },
    viewMoreText: {
        color: '#827272',
        fontWeight: 'bold',
        fontSize: 12,
    },
});
const styles1 = StyleSheet.create({
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

export default App;
