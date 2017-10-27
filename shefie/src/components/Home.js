import React from 'react';
import {Link} from 'react-router-dom';
import './Shelf.css';

export default function Home () {
return(
    <div>
        <header>

            <div class='heading'>
                <img src="http://lettersofthealphabet.com/classroom-display-letters/red/circles-letters/print-letter-v.jpg"/>
                    <span id="title">SHELFIE </span>
            </div>
        </header>
        <Link to={'/shelf/a'} >
            <div className="shelf">shelf a</div>
        </Link> 
        <Link to={'/shelf/b'} ><div className="shelf">shelf b</div></Link> 
        <Link to={'/shelf/c'} ><div className="shelf">shelf c</div></Link> 
        <Link to={'/shelf/d'} ><div className="shelf">shelf d</div></Link> 
    </div>
)
}