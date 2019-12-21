import config from '../config';

const ShopService = {
    getShops(){
        console.log(`Get request entered`);
        return fetch(`${config.API_ENDPOINT}/shops`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(shops => {
            console.log(shops);
            return shops;
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default ShopService;