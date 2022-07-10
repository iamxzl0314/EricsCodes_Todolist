import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

    constructor(prop) {
        super(prop)
        this.state = ({ data: this.props.data })
    }

    show = (e) => {
        e.target.children[1].style.display = "block"
        e.target.style.backgroundColor = "#cccccc"
    }

    disappear = (e) => {
        e.target.children[1].style.display = "none"
        e.target.style.backgroundColor = ""
    }

    change = (event) => {
        console.log(this.props.data)
        const {data}=this.props
        // console.log(event.target.id)
        let newdata = data.map((e) => {
            if (e.time===event.target.id){
                const old_Status=e.done
                e.done=!old_Status
                return e
            }else{
                return e
            }
        })
        localStorage.setItem("data",JSON.stringify(newdata)) 
        this.props.fun()
    }

    delete=(event) => {
        let newdata=[]
        for(let i of this.props.data){
            if(i.time===event.target.id){
                continue
            }
            newdata.push(i)
        }
        console.log(newdata)
        localStorage.setItem("data",JSON.stringify (newdata))
        this.props.fun()
    }
    render() {
        this.state = ({ data: this.props.data })
        return (
            <div className='ListBox'>
                <ul>
                    {
                        this.state.data.map((e) => {
                            if (e.done === false) {
                                return (<li onMouseEnter={this.show} onMouseLeave={this.disappear} key={e.time}><input type='checkbox' id={e.time} onChange={this.change}></input>{e.todolist}<button onClick={this.delete} id={e.time}>delete</button></li>)
                            } else {
                                return (<li onMouseEnter={this.show} onMouseLeave={this.disappear} key={e.time}><input type='checkbox' id={e.time} checked onChange={this.change}></input>{e.todolist}<button onClick={this.delete} id={e.time}>delete</button></li>)
                            }

                        })
                    }

                </ul>
            </div>
        )
    }
}
