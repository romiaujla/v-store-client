import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './SellerForm.css';

class SellerForm extends Component {
  state = {
    editedForm: {
      shopName: '',
      description: '',
      status: true, //true is open
      location: '',
      openDateTime: Date(),
      closingDateTime: Date()
    }
  };

  render() {
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
    if (!this.props.isDialogShowing) {
      return null;
    }
    return (
      <div className='backdrop' style={{ backdropStyle }}>
        <div className='dialog' style={{ modalStyle }}>
          <form>
            <fieldset>
              <legend>
                <h3>Edit Your Shop Info</h3>
              </legend>
              <div className='flex'>
                <label htmlFor='shop-name'>
                  <span className='input-title'>* Shop Name:</span>
                  <input
                    type='text'
                    id='shop-name'
                    name='shop-name'
                    required
                    value={this.state.shopName}
                    onChange={e => {
                      this.setState({ shopName: e.target.value });
                    }}
                  />
                </label>
                <label htmlFor='description'>
                  <span className='input-title'>* Description:</span>
                  <input
                    type='textarea'
                    id='desc'
                    name='description'
                    required
                    value={this.state.description}
                    onChange={e => {
                      this.setState({ description: e.target.value });
                    }}
                  />
                  {/* {
                            error.password &&
                            <span className='error'>{error.passwordError}</span>
                        } */}
                </label>
                <label htmlFor='location'>
                  <span className='input-title'>* Location:</span>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    required
                    value={this.state.location}
                    onChange={e => {
                      this.setState({ location: e.target.value });
                    }}
                  />
                </label>
                <label htmlFor='open-close-date'>
                  <span className='input-title'>* Opening Date:</span>
                  <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })
                    } // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput =>
                      this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                  />
                </label>
                <label htmlFor='open-close-time'>
                  <span>*Opening Time:</span>
                  <input
                    type='time'
                    placeholder='Enter your opening time'
                  />{' '}
                  <span>*Closing Time:</span>
                  <input type='time' placeholder='Enter your closing time' />
                </label>
                <label htmlFor='status'>
                  <span className='input-title'>* Status</span>
                  <select className='select-css'>
                    <option value='-1'>Open</option>
                    <option value='1'>Closed</option>
                  </select>
                </label>
                <div className='form-buttons'>
                  <button className='btn btn-light' type='submit'>
                    Save
                  </button>
                  {'  '}
                  <button
                    data-form-save
                    className='btn'
                    onClick={this.props.handleCloseDialog}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
export default SellerForm;
