import React, { Component } from 'react'
import HienThiSinhVien from './HienThiSinhVien'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class FormSinhVien extends Component {
  render() {
    return (
      <div className='container'>
        <ThongTinSinhVien/>
        <HienThiSinhVien/>
      </div>
    )
  }
}
