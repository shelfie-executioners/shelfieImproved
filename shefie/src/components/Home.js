import React from 'react';
import {Link} from 'react-router-dom';

export default function Home () {
return(
    <div>
        <Link to={'/shelf/a'}>shelf a</Link> 
        <Link to={'/shelf/b'}>shelf b</Link> 
        <Link to={'/shelf/c'}>shelf c</Link> 
        <Link to={'/shelf/d'}>shelf d</Link> 
    </div>
)
}