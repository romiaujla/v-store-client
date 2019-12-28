import config from '../config';

const ShopService = {
    getShops() {
        console.log(`Get request entered`);
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
                // console.log(shop);
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
                // console.log('products', products);
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
                console.log('search items', items)
                return items;
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default ShopService;