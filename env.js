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
