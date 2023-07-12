import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../App.css'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,img,info,price,title,inCart,treatment_notes} = value.detailProduct;
                    return (
                        <div className="container py-5">
                        {/* title */}
                        <div className="row">
                        <div className="col-12 max-auto text-center text-slanted text-black my-5">
                        <h1><center>{title}</center></h1>
                        </div>
                        </div> 
                        {/* end-title */}
                        {/* product info */}
                        <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="product"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h4 className="text-black">
                        <strong>
                            Price:<span> $</span>
                            {price}
                        </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product:
                        </p>
                        <p className="text-muted lead">{info}</p>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        treatment notes:
                        </p>
                        <p className="text-muted lead">{treatment_notes}</p>

                        {/* buttons */}
                        <div>
                            <Link to="/">
                            <ButtonContainer>back to products</ButtonContainer>
                            </Link>
                            <ButtonContainer
                            cart
                            disabled={inCart ? true:false}
                            onClick={()=> {
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                            >
                            {inCart? "in cart":"add to cart"}
                            </ButtonContainer>
                        </div>
                        </div>
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
