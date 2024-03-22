import React from 'react';
import './App.css';
import axios from 'axios'
class App extends React.Component{
    state = {advice:''};

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice?t=' + Math.random())
        .then((response) => {
            const {advice} = response.data.slip;
            this.setState({advice});
            console.log(advice);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <div className='advice'>
                <div className='adviceCard'>
                    <h1 className='adviceHeading'>{this.state.advice}</h1>
                    <button className='giveAdvice' onClick={this.fetchAdvice} >
                        <span>
                            I NEED ADVICE 
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;