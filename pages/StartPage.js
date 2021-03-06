import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ImageBackground  } from 'react-native';
import { Button } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import RNExitApp from 'react-native-exit-app';


const backgroundImg = require('../images/LaunchBackground.jpg');
export default class StartPage extends React.Component {



handleStartClick(){ //to handle the start button and go to the wheather page
  alert('hhh');
  Actions.WheatherPage();
}
handleExitClick(){ //to handle the exit button and exit from the app
  RNExitApp.exitApp();
}
render() {
  return (
		<View style={styles.container}>
     <ImageBackground source = {backgroundImg} style = {styles.imageStyle}>
      <View style={styles.buttonsViewStyle}>
       <Button title='Start' color='blue' buttonStyle = {styles.buttonStyle} onPress={this.handleStartClick}/>
       <Button title='Exit' color='blue' buttonStyle = {styles.buttonStyle} onPress={this.handleExitClick}/>
      </View>
     </ImageBackground>
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
  imageStyle:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  },
  buttonsViewStyle:{
    flexDirection:'row',
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonStyle:{
  backgroundColor: "white",
   width: 100,
   height: 45,
   borderColor: "transparent",
   borderWidth: 0,
   borderRadius: 5,
   marginTop:350,
  }
});
