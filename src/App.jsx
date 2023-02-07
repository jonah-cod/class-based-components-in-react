import React from 'react'
import './App.css';
import Clock from './clock';


class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {date: new Date(), day:"sat"}
    console.log("Constructor ran")
  }

  tick(){
    setInterval(()=>this.setState({date: new Date()}),
    1000)
    
  }

  changeDay=()=>{
    this.setState({day: "sund"})
}

  componentDidMount(){
    this.tick()
    console.log("Did mount ran")
  }

  render(){
    console.log("Render ran")
    return (
      <div className="App">
        <h4>Class based Components</h4>
        <button onClick={this.changeDay}>change day</button>
        <Clock time={this.state.date}/>
        <p>Today is: {this.state.day}</p>
      </div>
    )
  }
  
}

export default App;
