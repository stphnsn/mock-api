/* eslint-disable import/no-extraneous-dependencies */

const os = require('os')
const path = require('path')
const exec = require('child_process').execSync

const { EOL } = os
const chalk = require('chalk')

exports.have_changed = () => {
  const GIT_DIR =
    process.env.GIT_DIR || path.resolve(__dirname, '..', '..', '.git')
  const output = exec(
    `git diff HEAD@{1} --stat -- ${GIT_DIR}/../yarn.lock`
  ).toString()

  return output.indexOf('yarn.lock') > -1
}

exports.show_warning_banner = () => {
  const c = chalk.bgYellow.black
  const b = c.bold

  const cmd = chalk.blue.bold('yarn install')
  process.stdout.write(
    `${b(' Project dependencies have changed             ')}${EOL}`
  )
  process.stdout.write(
    `${c(` You should run ${cmd} before continuing `)}${EOL}`
  )
  process.stdout.write(EOL)
}
