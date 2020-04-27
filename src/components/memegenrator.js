import React, { useState , useContext } from 'react';
import { MemeContext } from '../contexts/memeContext';

const NewMeme = () => {
    const {addMeme} = useContext(MemeContext);

    const [title , setTitle] = useState('');
    const handleSubmit = (event)=> {
        event.preventDefault();
        addMeme(title);
        setTitle('')
        
    }
    return ( 
       <form onSubmit = {handleSubmit}>
           <label>add meme: </label>
           <input type ='text' required value={title} onChange = {(event)=> setTitle(event.target.value)}/>
           <input type = 'submit' value = 'add meme'/>
       </form> 
     );
}
 
export default NewMeme;
