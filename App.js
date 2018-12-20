import React, {Component} from 'react';
import { StyleSheet, View, Text   } from 'react-native';
import Routes from './routes/Routes.js';

export default class App extends React.Component { //initial start is from this class, it calls routes
render() {
  return (
     <View style={styles.container}>
      <Routes/>
     </View>
	);
}
 }

const styles = StyleSheet.create({
	container:{
		flex:1,
	}
});
