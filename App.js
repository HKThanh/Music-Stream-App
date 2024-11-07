import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <LaunchScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
