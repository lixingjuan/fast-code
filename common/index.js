const path = require('path')

const getCodeItem = require('./getCodeItem')

const targetPosition = path.join(path.dirname(__dirname), 'index.vue')
const templetePostion = path.join(
  path.dirname(__dirname),
  '/common/pageTemplete.md'
)

module.exports = {
  getCodeItem,
  targetPosition,
  templetePostion
}

const a = 'money'
switch (a) {
  case a.includes('money'):
    console.log('11')
    break

  default:
    console.log('2')
    break
}
