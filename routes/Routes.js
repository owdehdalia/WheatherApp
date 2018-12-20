import React, { Component } from 'react';
import {Router , Stack , Scene} from 'react-native-router-flux';
import StartPage from '../pages/StartPage.js';
import WheatherPage from '../pages/WheatherPage.js';




export default class Routes extends  React.Component{
  render(){
    return(
      <Router>
       <Stack key="root">
        <Scene key="StartPage" component={StartPage} title="" initial={true}  />
        <Scene key="WheatherPage" component={WheatherPage} title="" initial = {false} />
		   </Stack>
			</Router>
			);
		}

}
