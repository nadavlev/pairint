## Client

module.exports = function(MyModel){

  //https://stackoverflow.com/questions/28932828/loopback-how-to-dynamically-create-custom-rest-endpoints-in-code-on-the-fly
  // This is the endpoint for creating endpoints...
  MyModel.addEndpoint = function(name, method, cb) {
    // audit name and method...

    MyModel[name] = function(options, newCb) {
      // do whatever this endpoint should do...
      newCb(null, 'New endpoint success!');
    };

    MyModel.remoteMethod(
      name, 
      {
        accepts: [{arg: 'options', type: 'object'}], // or whatever you need...
        returns: {arg: 'message', type: 'string'}, // whatever it returns...
        http: {verb: method}
      }
    );

    cb(null, 'Success creating new endpoint!');
  };

  MyModel.remoteMethod(
    'addEndpoint', 
    {
      accepts: [
        {arg: 'name', type: 'string', http: {source: 'body'}},
        {arg: 'method', type: 'string', http: {source: 'body'}}
      ],
      returns: {arg: 'message', type: 'string'},
      http: {verb: 'post'}
    }
  );
};
