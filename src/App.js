import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import GetForm from './components/GetForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const API_KEY = "946a6a8025ae73c07fd475135a81432a";

class App extends Component{
   state = {
      temperature: undefined,
      city: undefined,
      state: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
   }
   getWeather = async(e) => {
      e.preventDefault()
      const city = e.target.elements.city.value
      const country = e.target.elements.country.value
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      const data = await api_call.json()
      if(city && country){
         this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error:""
         })
      }
      else{
         this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error:"Please enter the value"
         })
      }
   }
   render(){
      return (
         <BrowserRouter>
         <Switch>
         <Route exact path = '/form' component={GetForm}  />
         <Route path = '/home' component = {App} />
         <div>
            <div className="wrapper">
               <div className="main">
                  <div className="container">
                     <div className="row">
                        <div className="col-xs-5 title-container">
                           <Titles />
                        </div>
                        <div className="col-xs-7 form-container">
                           <Form getWeather={this.getWeather} />
                           <Weather
                              temperature={this.state.temperature}
                              humidity={this.state.humidity}
                              city={this.state.city}
                              country={this.state.country}
                              description={this.state.description}
                              error={this.state.error}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </Switch>
         </BrowserRouter>
      );
   }
}
export default App;