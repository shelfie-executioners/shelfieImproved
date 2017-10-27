import React from 'react';
import Bin from './Bin';
import {Link} from 'react-router-dom';

export default class Shelf extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params)
    }

    render(){
    return(
    <div>
        <Link to={`/bin/${this.props.match.params.id}1`}><div className="bin"> Bin 1</div></Link>
        <Link to={`/bin/${this.props.match.params.id}2`}><div className="bin"> Bin 2</div></Link>
        <Link to={`/bin/${this.props.match.params.id}3`}><div className="bin"> Bin 3</div></Link>
        <Link to={`/bin/${this.props.match.params.id}4`}><div className="bin"> Bin 4</div></Link>
        <Link to={`/bin/${this.props.match.params.id}5`}><div className="bin"> Bin 5</div></Link>       
    </div>    
)
}
}