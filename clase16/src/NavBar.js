import React from 'react';
import{useNavigate, Link} from 'react-router-dom'


const NavBar=()=>{
    const navigate=useNavigate();
    return(
        <div className='App'>
            <Link to='/'><p>Home</p></Link>
            <Link to='Perritos'><p>Perritos</p></Link>
            <Link to='Gaticos'><p>Gaticos</p></Link>

            <p onClick={()=> navigate('/')}>Home</p>
            <p onClick={()=> navigate('Perritos')}>Perritos</p>
            <p onClick={()=> navigate('Gaticos')}>Gaticos</p> 

        </div>
    )
}

export default NavBar;