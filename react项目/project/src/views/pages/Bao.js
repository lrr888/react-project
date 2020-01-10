import React, { Component } from 'react'
import { Wang } from '../../api/api' 
export default class Bao extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item,index)=>{
            return(
              <p key={index}>
                {item.applicationNumber}
              </p>
            )
          })
        }
      </div>
    ) 
  }
  componentDidMount(){
    Wang().then(res=>{
      console.log(res.data)
      this.setState(()=>({
        list:res.data
      }))
    })
  }
}
