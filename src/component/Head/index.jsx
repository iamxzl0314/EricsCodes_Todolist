import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {


  storage = (e) => {
    if (e.keyCode === 13) {
      const newdata = { todolist: e.target.value, done: false, time: new Date() }
      const data = JSON.parse( localStorage.getItem("data"))
      data.push(newdata)
      localStorage.setItem("data",JSON.stringify(data))
      e.target.value = ""
      this.setState({data:JSON.parse( localStorage.getItem("data"))})
      this.props.fun()
    }
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder='please input your to do list,and click Enter' className='header' onKeyDownCapture={this.storage}></input>
        </div>
      </div>
    )
  }


}
