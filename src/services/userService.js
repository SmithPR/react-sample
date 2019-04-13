
const getUser = function(){

};

/**
 * saveUser
 * Performs a web service call to save a user
 * 
 * The user parameter has the following required properties:
 *  firstName       string
 *  lastName        string
 *  phone           number
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


};

export default {
    getUser,
    saveUser
};