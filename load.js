const Seneca = require('seneca')


const seneca = Seneca({legacy:false})
      // .test('print')
      .test()

      .use('promisify')
      .use('entity')
      .use('entity-util')
      .use('entity-history')
      .use('mem-store')
      // .use('gateway')
      // .use('gateway-auth')
      // .use('gateway-express')
      // .use('gateway-lambda')
      .use('flow')
      .use('cache')
      .use('provider')
      // .use('user')
      .use('ledger')
      .use('allow')
      // .use('env')
      .use('registry')
      .use('request')
      .use('mail')
      .use('refer')
      .use('member')
      .use('group')

      // .use('vote')
      // .use('owner')


      .use('kv')
      .use('reload')
      // .use('repl')
      .use('doc')

      .ready(function() {
        console.log('READY')

        // TODO: does repl close?
        this.close()
      })
