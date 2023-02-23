import figlet from 'figlet'
import chalk from 'chalk'
import boxen from 'boxen'

figlet('AINFT', function(err, data) {
  if (err) {
    console.log('AINFT')
    return
  }
  console.log(chalk.blue(data))
  console.log(boxen('You can build your own AINFT!\nCheck \'README.md\' and follow the steps :)'))
})