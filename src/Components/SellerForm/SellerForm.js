import React, { Component } from 'react';
import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './SellerForm.css';

//only renders Seller Edit Form in the ShopPage component when logged in as Seller

class SellerForm extends Component {
    state = {
        
        // isLoggedIn: TokenService.hasAuthToken()
    }


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
            <div className="backdrop" style={{ backdropStyle }}>
                <div className="dialog" style={{ modalStyle }}>
                    <form>
                        <fieldset>
                            <legend>
                                <h3>Edit Your Shop</h3>
                            </legend>
                            <div className="flex">
                                <label htmlFor="service-type">
                                    <span className="input-title">* Service Type:</span>
                                    <input //make it dropdown menu...
                                        type="text"
                                        id="service-type"
                                        name="service-type"
                                        required
                                        defaultValue={this.props.serviceType}
                                        onChange={(e) => { this.setState({ serviceType: e.target.value }) }}
                                    />
                                </label>
                                <label htmlFor="shop-name">
                                    <span className="input-title">* Shop Name:</span>
                                    <input
                                        type="text"
                                        id="shop-name"
                                        name="shop-name"
                                        required
                                        defaultValue={this.props.curShopName}
                                        onChange={(e) => { this.setState({ shopName: e.target.value }) }}
                                    />
                                </label>
                                <label htmlFor="description">
                                    <span className="input-title">* Description:</span>
                                    <textarea
                                        type="textarea"
                                        id="desc"
                                        name="description"
                                        required
                                        defaultValue={this.props.curDesc}
                                        onChange={(e) => { this.setState({ description: e.target.value }) }}
                                    ></textarea>
                                    {/* {
                            error.password &&
                            <span className='error'>{error.passwordError}</span>
                        } */}
                                </label>
                                <label htmlFor="location">
                                    <span className="input-title">* Location:</span>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        required
                                        defaultValue={this.props.currAddress}
                                        onChange={(e) => { this.setState({ location: e.target.value }) }}
                                    />
                                </label>
                                <label htmlFor="open-close-date">
                                    <span className="input-title">* Opening Date:</span>
                                    <input
                                        type='text'
                                        defaultValue={this.props.curStartDate}
                                        onChange={(e) => { this.setState({ startDate: e.target.value }) }} />

                                    <span className="input-title">* Closing Date:</span>
                                    <input
                                        type='text'
                                        defaultValue={this.props.curEndDate}
                                        onChange={(e) => { this.setState({ endDate: e.target.value }) }} />

                                    {/* <DateRangePicker
                                        startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                        endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    /> */}
                                </label>
                                <label htmlFor="open-close-time">
                                    <span>*Opening Time:</span>
                                    <input type="text" placeholder="Enter your opening time"
                                        defaultValue={this.props.curStartTime}
                                        onChange={(e) => { this.setState({ startTime: e.target.value }) }}
                                    />
                                    {' '}
                                    <span>*Closing Time:</span>
                                    <input type="text" placeholder="Enter your closing time"
                                        defaultValue={this.props.curEndTime}
                                        onChange={(e) => { this.setState({ endTime: e.target.value }) }}
                                    />
                                </label>
                                <div className="form-buttons">
                                    <button className="btn btn-light" type="submit">
                                        Save
                                    </button>
                                    {'  '}
                                    <button className="btn" onClick={this.props.handleCloseDialog} >
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
