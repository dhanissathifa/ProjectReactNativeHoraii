import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama  : Dhanissa Nafiul Lathifa</Text>
        <Text>Kelas : XI RPL 1</Text>
        <Text>No. Absen : 12</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc56ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
