import React from 'react';
import Bin from './Bin';
import {Link} from 'react-router-dom';
import './Shelf.css';

export default class Shelf extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params)
    }

    render(){
    return(
    <div>
        <Link to={`/bin/${this.props.match.params.id}1`}><div className="shelf"> Bin 1</div></Link>
        <Link to={`/bin/${this.props.match.params.id}2`}><div className="shelf"> Bin 2</div></Link>
        <Link to={`/bin/${this.props.match.params.id}3`}><div className="shelf"> Bin 3</div></Link>
        <Link to={`/bin/${this.props.match.params.id}4`}><div className="shelf"> Bin 4</div></Link>
        <Link to={`/bin/${this.props.match.params.id}5`}><div className="shelf"> Bin 5</div></Link>       
    </div>    
)
}
}