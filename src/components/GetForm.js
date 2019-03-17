import React,{ Component } from 'react';

import ShowFormData from './showFormData';
import '../GetForm.css';
class GetForm extends Component{
   state = {
      name : undefined,
      birthday : undefined,
      aboutMe : undefined,
      isData: false
   }
   getFormData = (e) =>{
      e.preventDefault()
      this.setState({
         name: e.target.elements.username.value,
         birthday: e.target.elements.bday.value,
         aboutMe : e.target.elements.aboutMe.value,
         isData: true
      })
   }
   render(){
      const isData = this.state.isData
      return(
         <div class="containers">
            <h1>Registration Form</h1>
            <form name="myForm" action="#" onSubmit={this.getFormData}>
               <div class="form-containers">
                  <label>Name</label>
                  <input type="text" placeholder="Enter Name" name="username"/>
                  <label>Birthday</label>
                  <input type="date" name="bday"/>
                  <label>About Me</label><br />
                  <textarea name="aboutMe"></textarea>
                  <a href="/home"><input type="button" class="button" value="Home" /></a>
                  <input type="submit" class="button" value="Submit"/>
               </div>
            </form>
            {isData ? (
                  <ShowFormData
                     name={this.state.name}
                     birthday={this.state.birthday}
                     aboutMe = {this.state.aboutMe}
                  />
               ) : ''
            }
         </div>
      )
   }
}

export default GetForm;
