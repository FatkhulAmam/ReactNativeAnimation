import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShowingDrop = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Init</Text>
    </View>
  );
};

export default ShowingDrop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
