import React, {useContext} from 'react';
import { MemeContext } from '../contexts/memeContext';
import MemeDetails from './memeDetails';

const MemeList = () => {
    const {memes} = useContext(MemeContext);
    return memes.length?(
        <div className=''>
            <ul>
                {memes.map(meme=>{
                    return(<MemeDetails meme = {meme} key={meme.id}/>);
                })}
            </ul>
        </div>
    ):(
        <div className= 'empty'>No memes here:)</div>
    );
}
 
export default MemeList;