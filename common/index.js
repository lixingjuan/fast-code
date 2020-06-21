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
