import React, { Component } from "react";
import "react-dates/initialize";
// import { DateRangePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
import "./SellerForm.css";
import { formatDate } from "../../HelperFunctions/HelperFunctions";

//only renders Seller Edit Form in the ShopPage component when logged in as Seller

class SellerForm extends Component {
  
  state = {
    shop: {},
  };

  static defautProps = {
    shop: {},
  }

  componentDidMount = () => {
    let {start_date, end_date} = this.props.shop;
    start_date = formatDate(start_date);
    end_date = formatDate(end_date);
    this.setState({
      shop: {
        ...this.props.shop,
        start_date,
        end_date
      }
    })
  }

  render() {

    const {shop} = this.state;

    return (
      <form className="SellerForm">
        <fieldset>
          <div className="flex">
            <label htmlFor="service-type">
              <span className="input-title">* Service Type:</span>
              <select
                onChange={e => {
                  this.setState({ 
                    shop: {
                      ...shop,
                      service_type: e.target.value
                    }
                   });
                }}
                value={shop.service_type}
              >
                <option value="food and drink">Food & Drink</option>
                <option value="body healing">Body Healing</option>
                <option value="toy and leisure">Toy & Leisure</option>
                <option value="bath and body">Bath & Body</option>
                <option value="clothing and accessories">
                  Clothing & Accessories
                </option>
                <option value="home and party decor">Home & Party Decor</option>
                <option value="education">Education</option>
                <option value="others">Others</option>
              </select>
            </label>
            <label htmlFor="shop-name">
              <span className="input-title">* Shop Name:</span>
              <input
                type="text"
                id="shop-name"
                name="shop-name"
                required
                defaultValue={shop.shop_name}
                onChange={e => {
                  this.setState({
                    shop: {
                      ...shop,
                      shop_name: e.target.value
                    }
                  });
                }}
              />
            </label>
            <label htmlFor="description">
              <span className="input-title">* Description:</span>
              <textarea
                type="textarea"
                id="desc"
                name="description"
                required
                value={shop.description}
                onChange={e => {
                  this.setState({
                    shop: {
                      ...shop,
                      description: e.target.value
                    }
                  });
                }}
              ></textarea>
            </label>
            <label htmlFor="address">
              <span className="input-title">* address:</span>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={shop.address}
                onChange={e => {
                  this.setState({
                    shop: {
                      ...shop,
                      address: e.target.value
                    }
                  });
                }}
              />
            </label>
            <label htmlFor="open-close-date">
              <span className="input-title">* Opening Date:</span>
              <input
                type="text"
                value={shop.start_date}
                onChange={e => {
                  this.setState({
                    ...shop,
                    start_date: e.target.value
                  });
                }}
              />

              <span className="input-title">* Closing Date:</span>
              <input
                type="text"
                value={shop.end_date}
                onChange={e => {
                  this.setState({
                    ...shop,
                    end_date: e.target.value
                  });
                }}
              />
            </label>
            <label htmlFor="open-close-time">
              <span>*Opening Time:</span>
              <input
                type="time"
                placeholder="Enter your opening time"
                value={shop.opening_time}
                onChange={e => {
                  this.setState({
                    ...shop,
                    opening_time: e.target.value
                  });
                }}
              />{" "}
              <span>*Closing Time:</span>
              <input
                type="time"
                placeholder="Enter your closing time"
                value={shop.closing_time}
                onChange={e => {
                  this.setState({
                    ...shop,
                    closing_time: e.target.value
                  });
                }}
              />
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default SellerForm;
