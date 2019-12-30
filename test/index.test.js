const index = require('../index');
const commandProcessor = require('../commandProcessor');

describe('Tests to support refectoring', () => {
    test('index function exists', () =>{
        expect(typeof index).toEqual('function');
    });
    
    test('commandProcessor function exists', () =>{
        expect(typeof commandProcessor).toEqual('function');
    });
    
});
