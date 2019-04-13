import { reject } from "q";

const getUser = function(){
    return new Promise( (resolve, reject) => {

    });
};

/**
 * saveUser
 * Performs a web service call to save a user
 * 
 * The user parameter has the following required properties:
 *  firstName       string
 *  lastName        string
 *  phone           string
 *  address         string
 *  dateOfBirth     Date
 * 
 * User may also contain the following optional props:
 *  age             number
 *  height          number (inches)
 *  degree          object { type, field }
 *  degreeCompleted boolean
 * 
 * @param {*} user  object
 * 
 * @returns Promise that will be resolved with
 *  the result of the web service call
 * @returns False if entry checks fail
 */
const saveUser = function(user){
    //Entry checks

    if(!user ||
        !user.firstName || typeof user.firstName !== 'string' || !user.firstName.length ||
        !user.lastName || typeof user.lastName !== 'string' || !user.lastName.length ||
        !user.phone || typeof user.phone !== 'string' || user.phone.length !== 10 ||
        !user.address || typeof user.address !== 'string' || !user.address.length ||
        !user.dateOfBirth || !(user.dateOfBirth instanceof Date)
    ){
        console.error('userService.saveUser called with an invalid user object');
        return false;
    }

    return new Promise( (resolve, reject) => {

    });

};

export default {
    getUser,
    saveUser
};