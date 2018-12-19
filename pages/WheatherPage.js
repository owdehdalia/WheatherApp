import React, {Component} from 'react';
import { StyleSheet, View, Text   } from 'react-native';
import Location from '../components/Location.js';
import Forecast from '../components/Forecast.js';


export default class WheatherPage extends React.Component {
render() {
  return (
		<View style={styles.container}>
      <Location/>
      <Forecast/>
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
