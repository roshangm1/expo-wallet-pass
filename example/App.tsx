import { StyleSheet, Text, View } from 'react-native';

import * as ExpoWalletPass from 'expo-wallet-pass';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoWalletPass.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
