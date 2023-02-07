import React from 'react';



class Clock extends React.Component{
      constructor(props){
            super(props)
      }

      render(){
            return(
                  <p>It's {this.props.time.toLocaleTimeString()} o'clock</p>
            )
      }
}

export default Clock