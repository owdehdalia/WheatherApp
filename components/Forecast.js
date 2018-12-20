import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, StatusBar, AsyncStorage, Dimensions } from 'react-native';
import axios from 'axios';
import Location from '../components/Location.js';

const API_KEY = "4520bd98111d19b7";

export default class Forecast extends React.Component {

 constructor(props){
		super(props);
		this.state = {
		 days: [],
		 error:'',
		 city:'',
		 state:''

		};
	}


	componentDidMount() {
    AsyncStorage.getItem('city').then((value) => { //get the city name saved from the storage
      this.setState({'city': value});
    });
    AsyncStorage.getItem('state').then((value) => {//get the state name saved from the storage
      this.setState({'state': value});
      this.ForcastWheather();

    });

	}



	async ForcastWheather(){
		const request_url = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + 'WB' +'/'+ 'Ramallah'+ ".json";
    await  axios.get(request_url).then( (response) =>{
      if(response.status == 200){ // if the response is OK
        var predictedWheather = response.data.forecast.simpleforecast.forecastday;
        var predictedWheatherArr =[];
        predictedWheather.forEach((element,index) => {
          predictedWheatherArr = predictedWheatherArr.concat([
            {
              icon_url :element.icon_url,
              conditions: element.conditions, //condition (partly-cloudy, clear, etc...)
              temprature:{
                low:{
                  fahrenheit: element.low.fahrenheit,
                  celsius: element.low.celsius
                },
                high:{
                  fahrenheit: element.high.fahrenheit,
                  celsius: element.high.celsius
                }
              },
              wind:{
                mph: element.avewind.mph,//miles per hour
                dir:element.avewind.dir
              },
              average_humidity: element.avehumidity,
              date: element.date.weekday //day of the week
            }
          ]);
        });
        this.setState({days:predictedWheatherArr}); // copy all data in forecast array into days array
      }
		}).catch((error) => {
      alert(error);
      his.setState({ error: error.message })

    });
	}

  render() {
    return (
  		<View style={styles.container}>
      {
        this.state.days.map( (element,index) => {
          return(
            <View style={styles.dayViewStyle} key= {index} >
             <Image style = {styles.imageStyle} source = {{uri: element.icon_url}} />
             <Text style = {styles.textStyle}>{element.conditions}</Text>
             <Text style = {styles.textStyle}>Low Temp: {element.temprature.low.celsius}C | {element.temprature.low.fahrenheit}F</Text>
             <Text style ={styles.textStyle}>High Temp: {element.temprature.high.celsius}C } {element.temprature.high.fahrenheit}F </Text>
             <Text style={styles.textStyle}>Wind Direction: {element.wind.dir} - {element.wind.mph} MPH </Text>
             <Text style = {styles.textStyle}>Average Humidity:{element.average_humidity}</Text>
             <Text style = {styles.textStyle}>{element.date}</Text>
            </View>
          );
        })
      }
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
    dayViewStyle:{
      marginTop:20,
      width:Dimensions.get('window').width / 1.2,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:2,
      backgroundColor:'#ADD8E6',
      borderRadius:20
    },
    imageStyle:{
      width:50,
      height:50
    },
    textStyle:{
      fontWeight:'700'
    }

  });
