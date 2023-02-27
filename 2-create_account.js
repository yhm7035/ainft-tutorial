import ainJs from '@ainblockchain/ain-js'
import fs from 'fs'

// import env variables
import { env } from './env.js'

// create default class of AINetwork and object of the class
const Ain = ainJs.default
const ain = new Ain(env.AIN_API_SERVER, 1)

// create account
const account = ain.wallet.create(1)
const address = account[0]

// set created account to default 
ain.wallet.setDefaultAccount(address)

// show the account and save it to account.json file
console.log(ain.wallet.defaultAccount)
fs.writeFileSync('account.json', JSON.stringify(ain.wallet.defaultAccount, null, 2))
