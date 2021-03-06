const fs = require('fs')
const ejs = require('ejs')
const { targetPosition, templetePostion, getCodeItem } = require('../common')
const { formDomArr, moduleTitle } = require('./formDomArr')
const getFormItems = require('./getFormItems')

/**
 * @des 生成form
 * @param {String} formDataName form绑定的model的名称
 * @param {Number} columnsNumber form的列数
 * @param {Boolean} ifLabel form是否有label
 * @return:
 */
const generateForm = ({
  formDataName = 'formData',
  columnsNumber = 3,
  ifLabel
}) => {
  const formItems = getFormItems({ formDomArr, columnsNumber, formDataName })
  const targetCode = `
    <el-form :model="${formDataName}" :rules="rules" ${
    ifLabel ? "label-width='100px'" : ''
  }>
      ${formItems}
    </el-form>
  `
  return targetCode
}

/**
 * @des 生成form component
 * @param {String} formDataName form的data
 * @param {Number} columnsNumber form的列数
 */
const renderCode = ({ formDataName = 'formData', columnsNumber = 2 } = {}) => {
  // form code String
  const codeString = generateForm({
    formDataName,
    columnsNumber
  })

  // 获取所有的参数
  const params = {
    getCodeItem,
    codeType: 'form',
    Title: moduleTitle,
    Code: codeString,
    DataName: formDataName,
    domArr: formDomArr
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
  formDataName: 'formData'
})
