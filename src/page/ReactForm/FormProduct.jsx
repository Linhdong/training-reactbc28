import React, { Component } from 'react'

export default class FormProduct extends Component {
    state = {
        productInfo : {
            id: '',
            name: '',
            price: '',
            productType: 'mobile',
            description: '',
            img: ''
        },
        error : {
            id: '',
            name: '',
            price: '',
            description: '',
            img: ''
        }

    }

    handleChange = (event) => {
        let { value, id } = event.target;
        let dataType = event.target.getAttribute('data-type');
        //Xử lý productInfo
        let newValue = this.state.productInfo;
        newValue[id] = value;

        //Xử lý Erro
        let newError = this.state.error;
        let messError = '';
        if(value.trim() === ''){
            messError = id + 'không được bỏ trống !!';
        }else{
                if(dataType == 'number'){
                    let regexNumber = /^\d+$/;
                    if(!regexNumber.test(value)){
                        messError = id + ' phải là số !!';
                    }
                }
        }
        newError[id] = messError;

        //setState
        this.setState({
            productInfo: newValue,
            error: newError
        }, ()=>{
            console.log(this.state);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-warning'>
                    Create Product
                </div>
                <div className='card-body row'>
                    <div className="col-6">
                        <div className="form-group">
                            <p>ID</p>
                            <input data-type="number" className='form-control' id='id' name='id' onInput={this.handleChange} />
                            <p className='text-danger'>{this.state.error.id}</p>
                        </div>
                        <div className="form-group">
                            <p>Name</p>
                            <input className='form-control' id='name' name='name' onInput={this.handleChange}/>
                            <p className='text-danger'>{this.state.error.name}</p>
                        </div>
                        <div className="form-group">
                            <p>Price</p>
                            <input className='form-control' id='price' name='price' onInput={this.handleChange}/>
                            <p className='text-danger'>{this.state.error.price}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <p>Image</p>
                            <input className='form-control' id='img' name='img' onInput={this.handleChange}/>
                            <p className='text-danger'>{this.state.error.img}</p>
                        </div>
                        <div className='form-group'>
                            <p>Product Type</p>
                            <select name="productType" id="productType" className='form-control' onInput={this.handleChange}>
                                <option value="mobile">Mobile</option>
                                <option value="tablet">Tablet</option>
                                <option value="laptop">Laptop</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <p>Description</p>
                            <textarea className='form-control' id="description" name="description" onInput={this.handleChange}/>
                            <p className='text-danger'>{this.state.error.description}</p>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success mx-2'>Create</button>
                    <button type='button' className='btn btn-primary'>Update</button>
                </div>

            </form>
        )
    }
}
