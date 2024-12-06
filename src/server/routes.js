const {postPredictHandler, predictHistories} = require('../server/handler');
     
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000 * 1000
        
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: predictHistories
    
  }
]
 
module.exports = routes;