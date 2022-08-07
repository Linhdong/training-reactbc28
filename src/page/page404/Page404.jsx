import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
            <p>
                Không tìm thấy nội dung ! Quay về <NavLink to={''}> Trang Chủ</NavLink>
            </p>
      </div>
    )
  }
}
