import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

const Form = props =>(
    <form onSubmit = {props.getWeather}>
      <input type="text" name="city" placeholder="city..." class="inputText"/>
      <input type="text" name="country" placeholder="Country..." class="inputText"/>
      <button type="submit" class="weatherButton">Get Weather</button>
      <a href="/form"><button type="button" class="weatherButton">Get Form</button></a>
   </form>
)
export default Form;
