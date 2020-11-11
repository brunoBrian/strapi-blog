'use strict';

const axios = require('axios');

module.exports = {
  
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/5fac0ce6a25d9a1d55907939');
    },
    async afterUpdate(result, params, data) {
      axios.post('https://api.netlify.com/build_hooks/5fac0ce6a25d9a1d55907939');
    },
  }
};
