import React,{Component} from "react";
import Header from "./component/Head";
import List from "./component/List";
import Btton from "./component/Button";

export default class App extends Component{
    constructor(prop){
        super(prop)
        if(localStorage.length==0){
            localStorage.setItem("data",JSON.stringify( []))
        }
    }

    startRender= () => {
        this.setState({data:JSON.parse(localStorage.getItem("data"))})  
    }

    render(){
        return(
            <div>
                <Header fun={this.startRender}/>
                <List data={JSON.parse(localStorage.getItem("data"))} fun={this.startRender}/>
                <Btton fun={this.startRender} data={JSON.parse(localStorage.getItem("data"))}/>
            </div>
        )
    }
}