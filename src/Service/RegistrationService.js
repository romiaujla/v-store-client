import config from '../config';

const RegistrationService = {
    checkUserExistance(username){
        return fetch(`${config.API_ENDPOINT}/register/${username}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => {console.log(err)});
    }
}

export default RegistrationService;