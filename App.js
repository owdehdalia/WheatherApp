import React, {Component} from 'react';
import { StyleSheet, View, Text   } from 'react-native';
import WheatherPage from './pages/WheatherPage.js';
import StartPage from './pages/StartPage.js';
import Routes from './routes/Routes.js';

export default class App extends React.Component {
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

	},
});
