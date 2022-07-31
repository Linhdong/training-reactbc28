import React, { Component } from 'react'
import ProductCard from './ProductCard'

const data = [
    {id: 1, name: 'Linh', age:18},
    {id: 2, name: 'Sang', age:25},
    {id: 3, name: 'Nam', age:23}
]

export default class DemoProps extends Component {
    renderPerson = () => {
        return data.map((person, index) => {
            return <div className='col-3' key={index}>
                    <ProductCard item={person}/>
            </div>
        })
    }
  render() {
    // let person = {
    //     id: 1,
    //     name: 'Quân',
    //     age: 18
    // }

    // let person2 = {
    //     id: 2,
    //     name: 'Linh',
    //     age: 24
    // }

    return (
      <div className='container'>
        {/* <div className='w-25'>
            <ProductCard item={person}/>
        </div>
        <div className='w-25'>
            <ProductCard item={person2}/>
        </div> */}
        <div className='row'>
            {this.renderPerson()}
        </div>
      </div>
    )
  }
}
