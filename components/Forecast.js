import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, StatusBar, AsyncStorage } from 'react-native';
import axios from 'axios';
import Location from '../components/Location.js';

const API_KEY = "4520bd98111d19b7";

export default class Forecast extends React.Component {

 constructor(props){
		super(props);
		this.state = {
		 days: [],
		 latitude:'',
		 longitude:'',
		 error:'',
		 city:'',
		 state:''

		};
	}


	componentDidMount() {
    AsyncStorage.getItem('city').then((value) => { //get the city name saved from the storage
      this.setState({'city': value});
      alert('fore'+this.state.city);
    });
    AsyncStorage.getItem('state').then((value) => {//get the state name saved from the storage
      this.setState({'state': value});
      this.ForcastWheather();

    });

	}



	async ForcastWheather(){
		const request_url = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + this.state.state +'/'+ this.state.city+ ".json";
    alert(request_url);
    await  axios.get(request_url).then( (response) =>{

		}
	);
	}
  render() {
    return(null);
    }


}
