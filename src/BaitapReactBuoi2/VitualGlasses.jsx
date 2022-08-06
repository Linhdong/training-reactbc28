import React, { Component } from 'react'
import Header from './Header'
import "./scss/style.scss"

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/glasses/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/glasses/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/glasses/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/glasses/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/glasses/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/glasses/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/glasses/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/glasses/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/glasses/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class VitualGlasses extends Component {

    state = {
        productDetail: {
            "id": 0,
            "price": 0,
            "name": "",
            "url": "./img/glasses/v1.png",
            "desc": ""
        }
    }

    renderGlasses = () => {
        return data.map((glases, index) => {
            return <div className="col-2 m-2 border-primary" key={glases.id}>
                      <img src={glases.url} alt='' className='w-100' onClick={() => {
                        this.xemChiTiet(glases);
                      }}/>      
                    </div>
        })
    }

    xemChiTiet = (glasesClick) => {
        this.setState({
            productDetail: glasesClick
        })
    }

    render() {
        let {id, price, name, url, desc} = this.state.productDetail;
        return (
            <div className='bg-glasses'>
                <Header />
                <div className='my-4 model-view'>
                    <div className="row">
                        <div className="col-6  glass-left">
                            <div className='vglasses_card'>
                                <div className='model-left'>
                                    <img src={url}/>
                                </div>
                                <div className="glasses-info">
                                    <h3>{name}</h3>
                                    <p>{desc.length > 100 ? desc.slice(0,100) + '...' : desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  glass-right">
                            <div className='model-right'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4 p-3 glasses-catalog'>
                    <div className="row justify-content-around">
                        {this.renderGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}
