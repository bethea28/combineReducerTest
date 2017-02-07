import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router'

const singleShow = React.createClass({
  getInitialState(){
    return {
     id: this.props.params.id
    }
  },
  componentDidMount(){
    var key = "f6f31e7c2df38cc4cfe6116e8d8a0aef0012d342"

    $.ajax({
      url:'http://demo.guidebox.com/#!movie/57006-'
    })
    .done((data)=>{
    })
  },

  render(){
    if(this.state){
      return (
        <div>
         <button> singleShow</button>
         {this.state.id}
        </div>

      )
      
    }else{
      return(
        <div>
          <h1> Loading </h1>
        </div>
      )
    }
  }
})

export default singleShow