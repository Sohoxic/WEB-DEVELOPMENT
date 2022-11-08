import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import pic1 from "./Img1.jpg";
import pic2 from "./Img2.jpg";
import pic3 from "./Img3.jpg";

class Food extends React.Component{
    constructor(props){
        super(props);
        var today = new Date(),
        time = today.getHours() + ':0' + today.getMinutes() ;
        var del=today.getHours()+1 +':0' + today.getMinutes() ;;
        this.state={value1:"0",value2:"0",value3:"0",total:"",currentTime:time,newTime:del};    
    }

    handleChange1(event){
        this.setState({value1:event.target.value})
    }
    handleChange2(event){
        this.setState({value2:event.target.value})
    }
    handleChange3(event){
        this.setState({value3:event.target.value})
    }

    sum(event){
        this.setState({total:parseInt(this.state.value1)*269+parseInt(this.state.value2)*169+parseInt(this.state.value3)*69})
    }
    render(){
        return(
            <div>
                 
                <div className="row">
                <div className="column">
                    <img src={pic2} />
                    <h3>Pizza</h3>
                    <h4>Price : INR 269/-</h4>
                    <input type="text" onChange={this.handleChange1.bind(this)} value={this.state.value1}></input>
                 </div>
                <div className="column">
                <img src={pic3} />
                    <h3>French Fries</h3>
                    <h4>Price : INR 169/-</h4> 
                    <input type="text" onChange={this.handleChange2.bind(this)} value={this.state.value2}></input>
                   
                </div>
                <div className="column">
                <img src={pic1} />
                    <h3>Mojito</h3>
                    <h4>Price : INR 69/-</h4>  
                    <input type="text" onChange={this.handleChange3.bind(this)} value={this.state.value3}></input>
                  
                </div>
                </div>               
                <div>
                <button onClick={this.sum.bind(this)} value={this.state.total}>Calculate the total</button>
                    <h3>
                        Your Order Summary is: INR 
                        {" "+this.state.total}<br></br><br></br>
                        The current time is { this.state.currentTime }<br></br><br></br>
                        The estimated time of delivery is { this.state.newTime}
                    </h3>
                </div>
            </div>
        )
    }
    
}

ReactDOM.render(<Food/>,document.getElementById("root"))