import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import axios from 'axios';

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
		//this.getForcastedWheather();
	}


	async getForcastedWheather(){
		const request_url = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + this.state.latitude +','+ this.state.longitude+ ".json";
		await  axios.get(request_url).then( (response) =>{
			this.setState({
				city: response.data.location.city,
				state: response.data.location.state
			});
		}
	);
	}


}
