import config from '../config';

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
    }
}

export default ShopService;