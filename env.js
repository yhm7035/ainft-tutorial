import ora from 'ora'

export const spinner = ora({
  color: 'blue',
  discardStdin: false
})

export const env = {
  AIN_API_SERVER: 'https://mainnet-api.ainetwork.ai',
  APP_NAME: 'ainft_a_day',
  APP_PATH: '/apps/ainft_a_day'
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const typewrite = async (str) => {
  const charArray = str.split('')

  for(let i = 0; i < charArray.length; i++) {
    process.stdout.write(charArray[i])

    await sleep(40)
  }
  process.stdout.write('\r\n')
}
