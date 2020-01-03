import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import './Product.css'
import CommentForm from '../CommentForm/CommentForm';

class Product extends Component {
    render() {
        const { product } = this.props;
        console.log(product)
        return (
            <>
            <article key={product.id} >
                <button  className='save-button' onClick={() => this.props.handleSaveProduct(product)}>
                   Save
                </button>

                <img
                    src={require(`../../../public/images/products/${product.image_url}`)}
                    alt='product'
                />
                <div className='text'>
                    <h3>{product.item}</h3>
                    <p>Description: {product.description}</p>
                    <p>Price: $ {product.price}</p>
                    {
                        this.props.showDeleteButton &&
                        <button
                            onClick={() => {
                                this.props.handleDeleteProduct(product.id);
                            }}
                            className='btn-delete'
                        >
                            Delete
                        </button>
                    }
                </div>
            </article>
          
            </>
        )
    }
}
export default Product