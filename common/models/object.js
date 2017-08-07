
module.exports = function(object) {

/**
 * Create a new instance of the model and persist it into the data source.
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.create = function(data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Patch an existing model instance or insert a new one into the data source.
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.patchOrCreate = function(data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Replace an existing model instance or insert a new one into the data source.
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.replaceOrCreatePutObjects = function(data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Find all instances of the model matched by filter from the data source.
 * @param {string} filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.find = function(filter, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Replace an existing model instance or insert a new one into the data source.
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.replaceOrCreatePostObjectsReplaceOrCreate = function(data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Update an existing model instance or insert a new one into the data source based on the where criteria.
 * @param {string} where Criteria to match model instances
 * @param {object} data An object of model property name/value pairs
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.upsertWithWhere = function(where, data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Check whether a model instance exists in the data source.
 * @param {string} id Model id
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.existsGetObjectsIdExists = function(id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Check whether a model instance exists in the data source.
 * @param {string} id Model id
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.existsHeadObjectsId = function(id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Find a model instance by {{id}} from the data source.
 * @param {string} id Model id
 * @param {string} filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.findById = function(id, filter, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Replace attributes for a model instance and persist it into the data source.
 * @param {string} id Model id
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.replaceByIdPutObjectsId = function(id, data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Delete a model instance by {{id}} from the data source.
 * @param {string} id Model id
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.deleteById = function(id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Patch attributes for a model instance and persist it into the data source.
 * @param {string} id object id
 * @param {object} data An object of model property name/value pairs
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.prototypePatchAttributes = function(id, data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Replace attributes for a model instance and persist it into the data source.
 * @param {string} id Model id
 * @param {object} data Model instance data
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.replaceByIdPostObjectsIdReplace = function(id, data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Find first instance of the model matched by filter from the data source.
 * @param {string} filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.findOne = function(filter, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Update instances of the model matched by {{where}} from the data source.
 * @param {string} where Criteria to match model instances
 * @param {object} data An object of model property name/value pairs
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.updateAll = function(where, data, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Count instances of the model matched by where from the data source.
 * @param {string} where Criteria to match model instances
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.count = function(where, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Create a change stream.
 * @param {string} options undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.createChangeStreamPostObjectsChangeStream = function(options, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * Create a change stream.
 * @param {string} options undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
object.createChangeStreamGetObjectsChangeStream = function(options, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




object.remoteMethod('create',
  { isStatic: true,
  accepts: 
   [ { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects' },
  description: undefined }
);

object.remoteMethod('patchOrCreate',
  { isStatic: true,
  accepts: 
   [ { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'patch', path: '/objects' },
  description: undefined }
);

object.remoteMethod('replaceOrCreatePutObjects',
  { isStatic: true,
  accepts: 
   [ { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'put', path: '/objects' },
  description: undefined }
);

object.remoteMethod('find',
  { isStatic: true,
  accepts: 
   [ { arg: 'filter',
       type: 'string',
       description: 'Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects' },
  description: undefined }
);

object.remoteMethod('replaceOrCreatePostObjectsReplaceOrCreate',
  { isStatic: true,
  accepts: 
   [ { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects/replaceOrCreate' },
  description: undefined }
);

object.remoteMethod('upsertWithWhere',
  { isStatic: true,
  accepts: 
   [ { arg: 'where',
       type: 'string',
       description: 'Criteria to match model instances',
       required: false,
       http: { source: 'query' } },
     { arg: 'data',
       type: 'object',
       description: 'An object of model property name/value pairs',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects/upsertWithWhere' },
  description: undefined }
);

object.remoteMethod('existsGetObjectsIdExists',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects/:id/exists' },
  description: undefined }
);

object.remoteMethod('existsHeadObjectsId',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'head', path: '/objects/:id' },
  description: undefined }
);

object.remoteMethod('findById',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } },
     { arg: 'filter',
       type: 'string',
       description: 'Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects/:id' },
  description: undefined }
);

object.remoteMethod('replaceByIdPutObjectsId',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } },
     { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'put', path: '/objects/:id' },
  description: undefined }
);

object.remoteMethod('deleteById',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/objects/:id' },
  description: undefined }
);

object.remoteMethod('prototypePatchAttributes',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'object id',
       required: true,
       http: { source: 'path' } },
     { arg: 'data',
       type: 'object',
       description: 'An object of model property name/value pairs',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'patch', path: '/objects/:id' },
  description: undefined }
);

object.remoteMethod('replaceByIdPostObjectsIdReplace',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'string',
       description: 'Model id',
       required: true,
       http: { source: 'path' } },
     { arg: 'data',
       type: 'object',
       description: 'Model instance data',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects/:id/replace' },
  description: undefined }
);

object.remoteMethod('findOne',
  { isStatic: true,
  accepts: 
   [ { arg: 'filter',
       type: 'string',
       description: 'Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects/findOne' },
  description: undefined }
);

object.remoteMethod('updateAll',
  { isStatic: true,
  accepts: 
   [ { arg: 'where',
       type: 'string',
       description: 'Criteria to match model instances',
       required: false,
       http: { source: 'query' } },
     { arg: 'data',
       type: 'object',
       description: 'An object of model property name/value pairs',
       required: false,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects/update' },
  description: undefined }
);

object.remoteMethod('count',
  { isStatic: true,
  accepts: 
   [ { arg: 'where',
       type: 'string',
       description: 'Criteria to match model instances',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects/count' },
  description: undefined }
);

object.remoteMethod('createChangeStreamPostObjectsChangeStream',
  { isStatic: true,
  accepts: 
   [ { arg: 'options',
       type: 'string',
       description: undefined,
       required: false,
       http: { source: 'formData' } } ],
  returns: [],
  http: { verb: 'post', path: '/objects/change-stream' },
  description: undefined }
);

object.remoteMethod('createChangeStreamGetObjectsChangeStream',
  { isStatic: true,
  accepts: 
   [ { arg: 'options',
       type: 'string',
       description: undefined,
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/objects/change-stream' },
  description: undefined }
);

}
