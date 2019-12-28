// returns false is the date is not in a valid format
export function notValidDate(date){
    const date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(15|18|17|16|19|20|21|23|24|25)\d{2}$/ ;
    return date.length < 8 || !date_regex.test(date);
}