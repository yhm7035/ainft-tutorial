import ainJs from '@ainblockchain/ain-js'
import readline from 'readline-sync'

// import env variables
import { env, spinner } from './env.js'

// create default class of AINetwork and object of the class
const Ain = ainJs.default
const ain = new Ain(env.AIN_API_SERVER, 0)

// load existing account
import ainetworkAccount from './account.json' assert { type: 'json' }
const address = ain.wallet.addAndSetDefaultAccount(ainetworkAccount.private_key)

console.log('Chat with your AINFT\nEnter \'quit()\' to stop chat\n')
console.log('Welcome!')

// sleep function to wait response from AI chatbot
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const run_chatbot = async () => {
  while(true) {
    // get message from console
    const request = await readline.question('> ')
    const requestTime = Date.now()
  
    // stop this chat when 'quit()' is typed
    if (request === 'quit()') {
      break
    }

    // write message from human to AINetwork
    // AINetwork will trigger AI chatbot to get response
    const chatPath = `${env.APP_PATH}/${address}/chat`
    await ain.db.ref(`${chatPath}/${requestTime}/Human`).setValue({
      value: request,
      nonce: -1,
    })

    // start spinner
    await spinner.start()
    // get response from AINetwork by polling
    let getResponseNotYet = true
    let requestCount = 1
    while(getResponseNotYet) {
      // wait 2 seconds to get response
      await sleep(2000)

      // maximum number of attempts is 5
      if (requestCount > 5) {
        // stop spinner
        await spinner.stop()
        console.log('Internal server error')
        console.log('Sorry, please try again or quit')
        break
      }

      // get AI's response
      const response = await ain.db.ref(`${chatPath}/${requestTime}/AI`).getValue()
      if (response) {
        // stop spinner
        await spinner.stop()
        console.log(response)
        break
      }

      requestCount = requestCount + 1
    }
  }
}

run_chatbot()
