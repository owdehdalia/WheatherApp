import React, { Component } from 'react';
import {Router , Stack , Scene} from 'react-native-router-flux';
import StartPage from '../pages/StartPage';
import WheatherPage from '../pages/WheatherPage';




export default class Routes extends Component<{}>
{
  render(){
    return(
      <Router>
       <Stack key="root" hideNavBar>
        <Scene key="StartPage" component={StartPage} title="StartPage" initial={true}  />
        <Scene key="WheatherPage" component={WheatherPage} title="WheatherPage" />
		   </Stack>
			</Router>
			);
		}

}
