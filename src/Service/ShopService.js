import config from '../config';
import TokenService from './TokenService';

const ShopService = {
    getShops() {
        return fetch(`${config.API_ENDPOINT}/shops`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(shops => {
            return shops;
        })
        .catch(err => {
            console.log(err);
        })
    },

    getShop(id) {
        return fetch(`${config.API_ENDPOINT}/shops/${id}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(shop => {
                return shop;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getShopProducts(shopId){
        return fetch(`${config.API_ENDPOINT}/shops/${shopId}/products`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(products => {
                return products;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getShopsForCategory(serviceType){
        return fetch(`${config.API_ENDPOINT}/shops/service-type/${serviceType}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(items => {
                return items;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getShopsForSearchBox(term){
        return fetch(`${config.API_ENDPOINT}/shops/search/${term}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(items => {
                return items;
            })
            .catch(err => {
                console.log(err);
            })
    },
    updateShop(newShopData, id){
        return fetch(`${config.API_ENDPOINT}/shops/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                service_type: newShopData.service_type,
                shop_name: newShopData.shop_name,
                description: newShopData.description,
                address: newShopData.address,
                start_date: newShopData.start_date,
                end_date: newShopData.end_date,
                opening_time: newShopData.opening_time,
                closing_time: newShopData.closing_time, 
            })
        })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default ShopService;