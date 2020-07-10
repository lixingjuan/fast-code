const fs = require('fs')
const ejs = require('ejs')

const { tableDomArr, moduleTitle } = require('./tableDomArr')
const { targetPosition, templetePostion, getCodeItem } = require('../common')

/**
 * @des 渲染最终code
 * @param {title} String 模块标题
 * @param {rowNumber} Number 模块标题
 * @return:
 */
const renderCode = ({ tableDataName = 'tableData' } = {}) => {
  // 获取所有的对象
  const params = {
    codeType: 'table',
    getCodeItem,
    Title: moduleTitle,
    // Code: codeString,
    DataName: tableDataName,
    domArr: tableDomArr
  }

  // 获取最终代码，并且使用fs写入
  ejs.renderFile(templetePostion, params, 'utf-8', function(error, str) {
    console.log(str)
    if (error) {
      console.error('ejs模版处理出错', error)
      return
    }
    fs.writeFileSync(targetPosition, str)
  })
}

renderCode({
  tableDataName: 'tableData'
})
