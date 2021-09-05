import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [counter, setCounter] = React.useState(0);

  const handleAdd = ()=>{
    setCounter(prev => prev + 1);
  }

  const handleReduce = ()=>{
    setCounter(prev => prev - 1);
  }

  console.log(counter)
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.btnCont}>
        <Button onPress={handleAdd} title='Add' />
        <Button onPress={handleReduce} title='Reduce' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  text: {
    color: '#fff'
  },
  btnCont: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: 'red'
  }
});
