import React, {Component} from 'react';
import { StyleSheet, View, Text   } from 'react-native';
import Location from './components/Location.js';
export default class App extends React.Component {


render() {
  return (
		<View style={styles.container}>
    <Location/>
		</View>
	);
}
 }

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
});
