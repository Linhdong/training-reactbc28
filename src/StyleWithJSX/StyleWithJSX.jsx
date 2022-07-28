import React, { Component } from 'react'
import style from './StyleWithJSX.module.css'

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Style With JSX</h3>
        <p className={`${style['text-blue']}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, non modi cum ab dolorem distinctio sint sed blanditiis. Unde dolor alias odit magnam voluptas modi officia voluptates deleniti quo esse!
        </p>
        <hr/>
        <h3 className={`p-2 bg-dark ${style['text-blue']}`}>Hello Frontend 28</h3>
        <hr/>
        <p style={{color:'red', background:`url(https://picsum.photos/200/200)`, backgroundRepeat: 'no-repeat',height:500}}>Hello CyberSoft</p>

      </div>
    )
  }
}
