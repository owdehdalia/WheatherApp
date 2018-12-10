import React, {Component} from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

const API_KEY = "4520bd98111d19b7";

export default class Location extends React.Component {

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
		this.getGeoposition();
	}

	async getGeoposition() { //a method that returns the latitude and longitude of the current position
      try{
				await navigator.geolocation.getCurrentPosition(
					(position) => {
						this.setState({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude
						});
						this.getForcast();
						},
						(error) => this.setState({ error: "Loading ..." }),
						{ enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 },
          );
      }
			catch (error) {
	      alert(' error: ' + error.message);
	    }

	}
	async getCityState(){
		const request_url = "http://api.wunderground.com/api/" + API_KEY + "/geolookup/q/" + this.state.latitude +','+ this.state.longitude+ ".json";
		await  axios.get(request_url).then( (response) =>{
			this.setState({
				city: response.data.location.city,
				state: response.data.location.state
			});
		}
	);
	}


}
