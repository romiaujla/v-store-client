import config from '../config';

const ShopService = {
    getShops(){
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
    }
}

export default ShopService;