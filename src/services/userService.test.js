import userService from './userService';

it('exposes the correct functions', ()=>{
    expect(typeof userService.getUser).toEqual('function');
    expect(typeof userService.saveUser).toEqual('function');
});