const Seneca = require('seneca')


const seneca = Seneca({legacy:false})
      .test()
      .use('promisify')
      .use('entity')
      .use('gateway')
      .use('flow')
      .ready(function() {
        console.log('READY')
      })
