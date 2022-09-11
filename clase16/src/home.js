import React from 'react';
import NavBar from './NavBar';
import{Outlet} from 'react-router-dom'




function home(){
   
    return(
        <div className='App'>
            
        <h1 >🏠Home🏠</h1>
        <p>💛Tenemos Animales💛</p>
        <NavBar/>
        <Outlet/>
        </div>

          
          
    )
}

export default home;