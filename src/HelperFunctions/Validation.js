const validUsername = (username) => {
    const usernameErrors = {
        emptyString: 'Username is required, must be between 6 and 20 cahracters',
        tooLong: 'Username cannot be longer than 20 characters',
        spaces: 'Username cannot contain spaces',
    }
    if(!username.trim()){
        return usernameErrors.emptyString
    }
    
    const splitUsername = username.split(" ");
    if(splitUsername.length > 1){
        return usernameErrors.spaces
    }

    
}