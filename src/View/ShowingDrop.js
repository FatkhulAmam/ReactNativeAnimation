import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {height} = Dimensions.get('window');

const ShowingDrop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f18c8e" />
      <Animatable.View
        animation="slideInDown"
        duration={2500}
        style={styles.headerWrap}>
        <Text>Header</Text>
      </Animatable.View>
      <View style={styles.bodyWrap}>
        <Animatable.Text animation="fadeIn" duration={5000} style={styles.emot}>
          😄
        </Animatable.Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={2500}
        style={styles.footerWrap}>
        <Text style={styles.text}>Footer</Text>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ShowingDrop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff1e3',
  },
  headerWrap: {
    backgroundColor: '#f18c8e',
    height: height / 5,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emot: {
    fontSize: 50,
  },
  footerWrap: {
    backgroundColor: '#305f72',
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
  },
  text: {
    color: '#ffffff',
  },
});
