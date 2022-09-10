import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click me" 
        onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}/>
    </SafeAreaView>
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
