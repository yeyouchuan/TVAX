const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const { execSync } = require('node:child_process')

// 检查 git 状态
const gitStatus = execSync('git status --porcelain').toString().trim()
if (gitStatus) {
  // eslint-disable-next-line no-console
  console.log('Git working directory is not clean. Please commit or stash your changes first.')
  process.exit(1)
}

// 获取 app.json 文件路径
const appJsonPath = path.join(__dirname, 'app.json')

// 读取 app.json 文件
const appJson = require(appJsonPath)

// 获取当前的 buildNumber
const currentBuildNumber = Number.parseInt(appJson.expo.ios.buildNumber, 10)

// 增加 buildNumber
const newBuildNumber = currentBuildNumber + 1

// 更新 app.json 文件中的 buildNumber
appJson.expo.ios.buildNumber = newBuildNumber.toString()

// 将更新后的内容写回 app.json 文件
fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2))

// eslint-disable-next-line no-console
console.log(`Updated build number to ${newBuildNumber}`)

// 提交更改
execSync('git add app.json')
execSync(`git commit -m "bump build number to ${newBuildNumber}"`)

// eslint-disable-next-line no-console
console.log('Changes have been committed.')
