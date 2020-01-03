import React, { Component } from 'react'
import './CommentForm.css'
import ShopService from '../../Service/ShopService'

export default class CommentForm extends Component {
  

  handleSubmitComment = ev => {
    ev.preventDefault()
    
    const { text } = ev.target

    ShopService.postComment(product.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmitComment}
      >
        <div className='text'>
          <textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </textarea>
        </div>

        <div className='select'>
          <label htmlFor='rating'>Rate this product!</label>
          <select
            required
            aria-label='Rate this thing!'
            name='rating'
            id='rating'
          >
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>

        <button type='submit'>
          Post Comment
        </button>
      </form>
    )
  }
}
