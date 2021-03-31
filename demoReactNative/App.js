import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import api from './src/api/userData';

export default function App() {
  const [term, setTerm] = useState('')
  //api calls
  const searchApi = async () => {
    const response = await api.post('/transaction', 
    {
      userId: term,
      symbol: "MSFT",
      qty: -1,
      price: 240.00,
      createdOn: new Date(Date.now()).toISOString()
  });
    console.log(response.data);
}
  return (
    <View style={styles.container}>
      <SearchBar 
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)} 
          onTermSubmit={() => searchApi()}/>
      <StatusBar style="auto" />
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
