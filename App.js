import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import FeedAudio from './screens/FeedAudio';
import SubscriptionPlans from './screens/SubscriptionPlans';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LaunchScreen/> */}
      {/* <FeedAudio/> */}
      <SubscriptionPlans/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
