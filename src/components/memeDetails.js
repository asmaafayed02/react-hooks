import React ,{useContext} from 'react';
import { MemeContext } from '../contexts/memeContext';

const MemeDetails = ({meme}) => {
    const {removeMeme , images} = useContext(MemeContext);
    return ( 
        <li onClick = {() => removeMeme(meme.id)}>
            <div className='text'>{meme.text}</div>
    <div>{images.map(image=>{
        return<img style={{width: 100}} key={image.id} src={image.url} alt={image.name}/>
    })}</div>
        </li>
     );
}
 
export default MemeDetails;