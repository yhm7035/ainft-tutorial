import ainJs from '@ainblockchain/ain-js'
import fs from 'fs'

// import env variables
import { env } from './env.js'

// create default class of AINetwork and object of the class
const Ain = ainJs.default
const ain = new Ain(env.AIN_API_SERVER, 1)

// load existing account
import ainetworkAccount from './account.json' assert { type: 'json' }
const address = ain.wallet.addAndSetDefaultAccount(ainetworkAccount.private_key)

// read data from 'prompt.txt'
const data = await fs.readFileSync('./prompt.txt', { encoding:'utf8', flag:'r' })

// write prompt text to AINetwork
const promptPath = `${env.APP_PATH}/${address}/prompt`
ain.db.ref(`${promptPath}/text`).setValue({
  value: data,
  nonce: -1,
}).then((response) => {
  console.log(response);
})
