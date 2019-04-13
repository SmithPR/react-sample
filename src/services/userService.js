import { reject } from "q";


let cachedUser;

/**
 * getUser
 * Fetches a user from the nonexistent back-end
 * 
 * @returns Promise which will be resolved with the user, or rejected if none found
 */
const getUser = function(){
    if(cachedUser){
        //Simulate a successful user fetch
        return fetch('https://reqres.in/api/users/2').then(resp => {
            return cachedUser;
        });
    }else{
        //Simulate an unsuccessful user fetch
        return fetch('https://reqres.in/api/users/23').then(resp=>{
            return Promise.reject(new Error('User not found'));
        });
    }
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

    return saveUserInner(user);
};

/**
 * saveUserInner
 * Performs a POST or PUT request based on whether or not the user has already been saved
 */
const saveUserInner = function(user){
    const method = cachedUser ? 'POST': 'PUT';

    return fetch('https://reqres.in/api/users', { method }).then(()=>{
        cachedUser = user;
    });
}

export default {
    getUser,
    saveUser
};