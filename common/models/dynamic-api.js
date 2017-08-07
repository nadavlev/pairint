'use strict';

module.exports = function(Dynamicapi) {



    Dynamicapi.testing = function(msg, cb){
        cb(null, 'Hi ' + msg);
    }

    Dynamicapi.remoteMethod(
        'testing', {
            accepts: {
                arg: 'msg',
                type: 'string'
            },
            returns:{
                arg: 'greeting',
                type: 'string'
            }
        }
    );

    // // This is the endpoint for creating endpoints...
    // Dynamicapi.addEndpoint = function(name, method, cb) {
    //     // audit name and method...
    //
    //     Dynamicapi[name] = function(options, newCb) {
    //         // do whatever this endpoint should do...
    //         newCb(null, 'New endpoint success!');
    //     };
    //
    //     Dynamicapi.remoteMethod(
    //         name,
    //         {
    //             accepts: [{arg: 'options', type: 'object'}], // or whatever you need...
    //             returns: {arg: 'message', type: 'string'}, // whatever it returns...
    //             http: {verb: method}
    //         }
    //     );
    //
    //     cb(null, 'Success creating new endpoint!');
    // };
    //
    // Dynamicapi.remoteMethod(
    //     'addEndpoint',
    //     {
    //         accepts: [
    //             {arg: 'name', type: 'string', http: {source: 'body'}},
    //             {arg: 'method', type: 'string', http: {source: 'body'}}
    //         ],
    //         returns: {arg: 'message', type: 'string'},
    //         http: {verb: 'post'}
    //     }
    // );

};
