import React, { useContext } from 'react';
import { MemeContext } from '../contexts/memeContext';

const Navbar = () => {
    const { memes } = useContext(MemeContext)
    return (  
         <div className='navbar'>
             <h1>Meme Generator</h1>
             <p> Currently we have { memes.length } Memes to get through...</p>
         </div>
    );
}
 
export default Navbar;
