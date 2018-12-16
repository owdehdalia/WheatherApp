import React, {Component} from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, StatusBar, AsyncStorage } from 'react-native';
import Forecast from '../components/Forecast.js';
const API_KEY = "4520bd98111d19b7";

export default class Location extends React.Component {

 constructor(props){
		super(props);
		this.state = {
		 latitude:'',
		 longitude:'',
		 error:'',
		 city:'',
		 state:''

		};
	}


	componentDidMount() {
		this.getGeoposition(); // get the latitude and longitude of the current position.

	}

	 async getGeoposition() { //a method that returns the latitude and longitude of the current position.
		try{
			await navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					});

					this.getCityState(); // get the city and the state of the current position.
				},
				(error) => this.setState({ error: "Loading ..." }),
				{ enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 },
			);
		}
		catch (error) {
			alert(' error: ' + error.message);
      this.setState({ error : 'something wrong' });
		}
	}

   async getCityState(){ //a method that returns the state name and the city name of the current position
		const request_url = "http://api.wunderground.com/api/" + API_KEY + "/geolookup/q/" + this.state.latitude +','+ this.state.longitude+ ".json";
		await  axios.get(request_url).then( (response) =>{
			this.setState({
				city: response.data.location.city,
				state: response.data.location.state
			});
      alert('loc'+this.state.city);
      this.saveItem('city', this.state.city);
      this.saveItem('state', this.state.state);

    }
	);
	}

  async saveItem(item, selectedValue) { //a method that saves the city and state name in a storage.
    try {
      await AsyncStorage.setItem(item, selectedValue);
    }
    catch (error) {
      alert('AsyncStorage error: ' + error.message);
      his.setState({ error: error.message })
    }
  }

  render() {
    return(null);
  }


}
