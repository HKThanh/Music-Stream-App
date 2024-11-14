import React from "react";
import { View, StyleSheet,Text, Image,ImageBackground, FlatList, Pressable } from "react-native";

const data = [
    {
        id: "1",
        img: require("../assets/Subscription_Plans/Container_110.png"),
    },
    {
        id: "2",
        img: require("../assets/Subscription_Plans/Container_112.png"),
    }

]
const renderData = ({ item }) => {
    return (
        <Pressable>
            <Image source={item.img} style={styles.imageContainerWrapper}/>
        </Pressable>
    )
}

function SubscriptionPlans() {
  return (
    <ImageBackground style={styles.subscriptionPlansContainer} source={require("../assets/Subscription_Plans/Image_116.png")}>
    <Image source={require("../assets/Subscription_Plans/Unlimitedmusic selections.png")} style={styles.unlimitedMusicSelections} />
     <FlatList data={data} style={{flex:2}} renderItem={renderData} horizontal  showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.id}
        />
    <Image source={require("../assets/Subscription_Plans/Three-Dots--Streamline-Bootstrap.png")} style={{width:20,height:20}} />
     <Pressable>
        <Image source={require("../assets/Subscription_Plans/Button_17.png")} style={styles.buttonImage} />
     </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  subscriptionPlansContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "relative",
    display: "flex",
    aspectRatio: 0.44,
    width: "100%",
    paddingLeft: 41,
    paddingTop: 69,
    paddingBottom: 69,
    flexDirection: "column",
    alignItems: "center",
  },
  unlimitedMusicSelections: {
    position: "relative",
    display: "flex",
    width: 278,
    maxWidth: 278,
    aspectRatio: 2.9,
    marginTop: 30
  },
  imageContainerWrapper: {
    position: "relative",
    display: "flex",
    marginTop: 20,
    alignItems: "stretch",
    marginRight:10,
    marginStart: 10,
  },
  leftImageContainer: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    aspectRatio: 0.78,
  },
  rightImageContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    width: 31,
    flexShrink: 0,
    aspectRatio: 0.09,
  },
  threeDotsIcon: {
    position: "relative",
    display: "flex",
    marginTop: 43,
    width: 30,

  },
  buttonImage: {
    marginTop: 10,
    width: 264,
  },
});

export default SubscriptionPlans;