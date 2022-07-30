import React, { Component } from 'react'
import style  from './StyleLayout.module.css'
import CarouselCom from './CarouselCom'
import ContentCom from './ContentCom'
import FooterCom from './FooterCom'
import HeaderCom from './HeaderCom'


export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderCom />
                <div className='carousel'>
                    <CarouselCom/>
                </div>  
                <div className='content'>
                    <ContentCom/>
                </div>
                <FooterCom/>
            </div>
        )
    }
}
