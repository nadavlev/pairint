
module.exports = function(Message) {

/**
 * greet
 * @param {string} msg undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Message.greet = function(msg, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Message.remoteMethod('greet',
  { isStatic: true,
  accepts: 
   [ { arg: 'msg',
       type: 'string',
       description: undefined,
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/Messages/greet' },
  description: undefined }
);

}
