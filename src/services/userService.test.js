import userService from './userService';

const validUserArg = {
    firstName: 'Sally',
    lastName: 'Smith',
    phoneNumber: '1234567890',
    address: '123 First St',
    dateOfBirth: 'June 1, 1970'
};

const invalidUserArgs = [
    null,
    undefined,
    {},
    { fistName: 'Sue' },
    { ...validUserArg, firstName: null },
    { ...validUserArg, lastName: '' },
    { ...validUserArg, phoneNumber: '123' },
    { ...validUserArg, phoneNumber: 1234567890 },
    { ...validUserArg, address: 5 },
    { ...validUserArg, address: '' }
];

it('exposes the correct functions', ()=>{
    expect(typeof userService.getUser).toEqual('function');
    expect(typeof userService.saveUser).toEqual('function');
});

it('getUser returns a promise', ()=>{
    expect(userService.getUser() instanceof Promise).toEqual(true);
});

it.each(invalidUserArgs)('saveUser detects invalid args (): %#\n%p', user=>{
    expect(userService.saveUser(user)).toEqual(false);
});

it('saveUser returns a promise when called with valid args', ()=>{
    expect(userService.saveUser(validUserArg) instanceof Promise).toEqual(true);
});

it('saveUser accepts date of birth as a Date', ()=>{
    expect(userService.saveUser({ ...validUserArg, dateOfBirth: new Date() }) instanceof Promise).toEqual(true);
});
