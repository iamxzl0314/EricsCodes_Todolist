import React, { Component } from 'react'
import './index.css'

export default class Btton extends Component {

  state = { done: 0, all: 0 }

  clear = () => {
    localStorage.clear()
    localStorage.setItem("data",JSON.stringify ([]))
    this.props.fun()

  }

  changeAll=(e) => {
    const status= e.target.checked
    const newdata= this.props.data.map((e) => {
        e.done=status
        return e
     })
    localStorage.setItem("data",JSON.stringify( newdata))
    this.props.fun()
  }

  render() {
    let count=0
    const data = this.props.data
    const done=data.map((e) => { if(e.done===false){
      return count++
    } }) 

    return (
      <div>
        <input type='checkbox' onChange={this.changeAll}></input><span>已完成{data.length-count}/全部{data.length}</span><button className='button2' onClick={this.clear}>Clear ALL</button>
      </div>
    )
  }
}
