import React, {Component} from 'react';
import { StyleSheet, View, Text   } from 'react-native';
import WheatherPage from './pages/WheatherPage.js';


export default class App extends React.Component {
render() {
  return (
  	<View style={styles.container}>
     <WheatherPage/>
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
