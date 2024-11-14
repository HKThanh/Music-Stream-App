import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import FeedAudio from './screens/FeedAudio';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LaunchScreen/> */}
      <FeedAudio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
