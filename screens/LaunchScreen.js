
import { StyleSheet, Text, View, Pressable, ImageBackground, Image,} from "react-native";

function LaunchScreen({ }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/Launch_Screen/Image_30.png")} style={styles.image}>
                <Image source={require("../assets/Launch_Screen/Image_33.png")} style={styles.logo} />
                <View style={{width:'100%'}}>
                <Text style={styles.text}>Your music</Text>
                <Text style={styles.text}>Your artists</Text>
                </View>
                <View style={{width:'100%'}}>
                <Pressable style={styles.createAccountButton}>
                    <Text style={styles.createAccountText}>Create an account</Text>
                </Pressable>
                <Pressable style={styles.alreadyHaveAccountButton}>
                    <Text style={styles.alreadyHaveAccountText}>I already have an account</Text>
                </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    logo: {
        width: 80,
        height: 80,
    },
    button: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 30,
        color: "rgba(255, 255, 255, 1)",
        fontWeight: "700",
        textAlign: "center",
    },
    createAccountButton: {
        backgroundColor: '#1C1C1E', 
        borderRadius: 25,
        marginBottom: 20,
        width: "100%",
        height: 50,
        justifyContent: 'center',
      },
      createAccountText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      alreadyHaveAccountButton: {
        backgroundColor: '#E3F8FF', 
        borderRadius: 25,
        width: "100%",
        height: 50,
        justifyContent: 'center',
      },
      alreadyHaveAccountText: {
        color: '#00A9F4', 
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});
export default LaunchScreen;
