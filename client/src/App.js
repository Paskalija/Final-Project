import React from "react";
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage';
import {Login} from './components/Login';
import {Breakfast} from "./components/Breakfast";
import {Brunch} from "./components/Brunch";
import {Lunch} from "./components/Lunch";
import {Dinner} from "./components/Dinner";
import {CreateAccount} from "./components/CreateAccount";
import {MyProfile} from "./components/MyProfile";
import {MyRecipes} from "./components/MyRecipes";
import {CreateRecipe} from "./components/CreateRecipe";
import {Header} from "./components/Header";
import {MyRecipe} from "./components/Recipe";



export function App () {
  
    return (
        <div className="App">
         <BrowserRouter>
         <Header />
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/breakfast' element = {<Breakfast/>} />
            <Route path = '/brunch' element = {<Brunch/>} />
            <Route path = '/lunch' element = {<Lunch/>} />
            <Route path = '/dinner' element = {<Dinner/>} />
            <Route path = '/register' element = {<CreateAccount/>} />
            <Route path = '/myprofile' element = {<MyProfile/>} />
            <Route path = '/myrecipes' element = {<MyRecipes/>} />
            <Route path = '/createrecipe' element = {<CreateRecipe/>} />
            <Route path = '/recipe/:id' element = {<MyRecipe/>} />
          </Routes>
          <Footer />
          </BrowserRouter>
        </div>
      

    );
  }
 

