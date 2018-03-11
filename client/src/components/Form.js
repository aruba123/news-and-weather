import React, { Component } from 'react';

class Form extends  React.Component {

render() {

    return(

        <div>

      <form onSubmit= {this.props.getInfo}>
          <input type= "text"  name= "city"   placeholder= "city"/>
          <button> getInfo </button>  

       </form>

       </div>


        




    )



}



}

export default Form;