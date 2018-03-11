import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form  from "./components/Form";
import Weather from "./components/Weather"
import News from "./components/News"
import axios from "axios"


 class App extends Component{

  state={
    temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error:""



  }



 
    
  



    getInfo= async (e)=> {
      e.preventDefault()
      console.log (e.target.elements)
    const city= e.target.city.value

const  API_KEY = "dee84fb58b4bd91a81ff801a553a9e0c"

const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)

  const data = await api_call.json();
  console.log(data)

  axios.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=4dc6306b9abc455aa66413c4ff6054d2`)
  // arrow function to resolve the promise, handle the response from the API
  .then(response =>{console.log(response.data)

    



  if (city){
    this.setState({
       temperature: data.main.temp,
        city: data.name,
        humidity:data.main.humidity,
        description:data.weather[0].description,
       // articles:response.data.articles,
        // author:articles.author,
        // description2:articles.description,
        // publishedAt:articles.publishedAt,
        // source:articles.source,
        // title:articles.title,
        // url:articles.url,
        // urlToImage:articles.urlToImage,
        // error: ""
        






    })
  
  } else {
    this.setState({
    temperature:undefined,
    city: undefined,
    humidity:undefined,
    description:undefined,
    articles: undefined,
    error : "please enter the value"
    
    })
  };

}

)

  .catch(err => console.log(err));


const  API_NKEY = "4dc6306b9abc455aa66413c4ff6054d2"

// const api_Ncall = await fetch (`https://newsapi.org/v2/everything?q=houston&apiKey=4dc6306b9abc455aa66413c4ff6054d2`)

// const Ndata = await api_Ncall.json();
// console.log(Ndata)



//   getNews= async (e)=> {
//     e.preventDefault()
//     console.log (e.target.elements)
//   const city= e.target.city.value

// const  API_NKEY = "4dc6306b9abc455aa66413c4ff6054d2"

// const api_call = await fetch (`https://newsapi.org/v2/everything?q=${city}&appid=${API_NKEY}`)

// const data = await api_call.json();
// console.log(data)






};

  
  render () {

    return (
      <div>
        {/* <div className = "wrapper">
         <div className= "container">
         <div className= "row">
         <div className=  "col-md-12">
         <Navbar brand='logo' right>
  <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
</Navbar>
       </div>
       </div>
       </div>
       </div> */}



       
   
         <div className ="wrapper">
          <div className ="main">
            <div className= "container">
             <div className = "row">
              <div className = "col-xs-5  title-container">        
                      

                </div>
                <div className = "col-xs-7  form-container">   
         
                                           
                        <Form
                         getInfo={this.getInfo}/>
                          <Weather
                          temperature= {this.state.temperature}
                          city= {this.state.city}
                          humidity= {this.state.humidity}
                          description= {this.state.description}
                           error={this.state.error}
                           /> 

                            {/* <News
                           author = {this.state.author}
                           description2={this.state.description}
                           publishedAt={this.state.publishedAt}
                           source= {this.state.source}
                           title= {this.state.title}
                           url={this.state.url}
                           urlToImage={this.state.urlToImage}
                          /> */}

                  

                           

                        </div>
                      </div>
                    </div>
                  </div>           
   </div>
      </div>
      

    



               );
               }
             };

     
     
    

export default App;


