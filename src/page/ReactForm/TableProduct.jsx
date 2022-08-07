import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        
      </div>
    )
  }
}
