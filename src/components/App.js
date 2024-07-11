import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handlekeyDown=this.handlekeyDown.bind(this);
    };
   

    buttonClickHandler() {
    this.setState({renderBall:true});
    console.log("inbtnclickhandle",this.state.renderBall);
    //this.renderBallOrButton();
   }

   

    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener('keydown', this.handlekeyDown);

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlekeyDown);
    }
    handlekeyDown(e) {
        if(e.keyCode === 39) {
            console.log("rightarrow pressed");
            this.setState(prevState => ({
                ballPosition: { left: `${parseInt(prevState.ballPosition.left) + 5}px` }
            }));
        }
    }

   // const [state,setState]=useState({renderball:false,pos:0});
    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
                
            </div>
        )
    }
}


export default App;
