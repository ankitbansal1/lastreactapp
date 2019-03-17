import React,{Component} from 'react';

const ShowFormData = props =>{
   return (
         <div className="card">
            <div className="card-header">
               <p>User Information</p>
            </div>
            <p>Name : {props.name}</p>
            <p>Birthday : {props.birthday}</p>
            <p>About Me : {props.aboutMe}</p>
         </div>
   )
}

export default ShowFormData;
