
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscontainer from './components/Newscontainer';

import LoadingBar from 'react-top-loading-bar'
import {
 

  HashRouter,

  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  state ={
    progress : 0
  }
   setprogress =(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div>
         
           <HashRouter> 
           <Navbar/>
         
           <Routes>
           <Route exact path="/" element={<Newscontainer  setprogress={this.setprogress} key="general" category ="general" />} />
           <Route exact path="/sports" element={<Newscontainer setprogress={this.setprogress}  key="sports" category ="sports" />} />
           <Route exact path="/entertainment" element={<Newscontainer setprogress={this.setprogress}   key="entertainment" category ="entertainment" />} />
           <Route exact path="/technology" element={<Newscontainer  setprogress={this.setprogress}  key ="technology" category ="technology" />} />
           <Route exact path="/About" element={<About />} />
           </Routes>
          
            </HashRouter>
            <LoadingBar
        color='#f11946'
        height ={3}
        shadow ={true}
        progress={this.state.progress}
      
      />
        
      </div>
      
    )
  }
}



