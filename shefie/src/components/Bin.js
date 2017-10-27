import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Bin extends Component {
    constructor(props){
        super(props);

        this.state = {
            empty: true,
            name: "",
            price: 0
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    


    componentWillMount(){
       
        axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`).then((response) => response.data.lenght > 1 ? this.setState({empty: false, name: response.data[0].name, price: response.data[0].price}): "")
    
    }
    

    handleNameChange(event) {
        console.log(this.state);
        this.setState({ name: event.target.value });
    
    }

    handlePriceChange(event) {
        console.log(this.state);
        this.setState({ price: parseInt(event.target.value, 10) });

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('i entered')
        axios.post(`http://localhost:3001/api/bin/${this.props.match.params.id}`, {name: this.state.name, price: this.state.price});
        this.setState({empty: false});
        
        console.log("I submitted!!")
    }

    edit(){
        axios.put(`http://localhost:3001/api/bin/${this.props.match.params.id}`,{name: this.state.name, price: this.state.price})
    }

    delete(){
        axios.delete(`http://localhost:3001/api/bin/${this.props.match.params.id}`).then((response) => this.setState({empty: true},() => console.log(response)))
    }

    render(){
        
        return(
            <div>
                {this.state.empty ? <div><form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" value={this.state.value} onChange={this.handleNameChange} />
                        Price:
          <input type="text" value={this.state.value} onChange={this.handlePriceChange} />              
                    </label>
                    <input type="submit" value="Submit" />
                </form></div>
                
                
                        :


                <div>{this.state.name}
              {this.state.price}
              <button onClick={this.delete}>Delete</button>
              
              <button>Edit</button>
              </div>
                }
                
            </div>  
            
        )

    }
}

export default Bin;