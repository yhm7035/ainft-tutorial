import ora from 'ora'

export const spinner = ora({
  color: 'cyan',
  discardStdin: false
})

export const env = {
  AIN_API_SERVER: 'https://testnet-api.ainetwork.ai',
  APP_NAME: 'ainft_tutorial_dev',
  APP_PATH: '/apps/ainft_tutorial_dev'
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const typewrite = async (str) => {
  const charArray = str.split('')

  for(let i = 0; i < charArray.length; i++) {
    process.stdout.write(charArray[i])

    await sleep(50)
  }
  process.stdout.write('\r\n')
}