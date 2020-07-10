/**
 * @des 判断类型
 * @param {Array} tableDomArr 要遍历的表格数据
 */
const getCodeItem = ({ field, label, type, codeType, DataName, index }) => {
  let codeItem
  console.log('getCodeItem被执行')

  let realField

  if (codeType === 'table' && (!type || type === 'text')) {
    realField = field || `todo${index + 1}`
  } else if (codeType === 'table' && type) {
    realField = field ? `scope.row.${field}` : `scope.row.todo${index + 1}`
  } else if (codeType === 'form') {
    realField = field ? `${DataName}.${field}` : `${DataName}.todo${index + 1}`
  } else {
    realField = ''
  }

  if (type === 'datePicker') {
    codeItem = `<el-date-picker v-model.trim="${realField}" format="yyyy-MM-dd" value-format="yyyy-MM-dd" />`
  } else if (type === 'dateText') {
    codeItem = `<cd-text-date>{{ ${realField} }} </cd-text-date>`
  } else if (type === 'moneyInput') {
    codeItem = `<cd-input-money v-model="${realField}" />`
  } else if (type === 'moneyText') {
    codeItem = `<cd-text-money>{{ ${realField} }}</cd-text-money>`
  } else if (type === 'select') {
    codeItem = `
    <el-select
        clearable
        filterable
        v-model.trim="${realField}"
        placeholder="请选择${label}"
        >
        <el-option
            v-for="item in ${realField}List"
           :value="item.lookupCode"
           :label="item.lookupValue"
           :key="item.lookupCode"
        />
    </el-select>`
  } else if (type === 'input') {
    codeItem = `<el-input type="text" v-model='${realField}'/>`
  } else if (type === 'button') {
    codeItem = `<el-button type="text"> ${label} </el-button>`
  } else if (type === 'radio') {
    codeItem = `
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>`
  } else if (type === 'inputTextArea') {
    codeItem = `<el-input type="textarea" :rows="3" v-model='${realField}'/>`
  } else if (type === 'text' && codeType === 'form') {
    codeItem = `${realField}`
  } else if (!type && codeType === 'table') {
    codeItem = ``
  } else {
    return `type为${type}， 无该判断，请添加`
  }
  console.log(codeItem)
  return codeItem
}

module.exports = getCodeItem

// getCodeItem({
//   field: 'todo',
//   label: '综合说明',
//   value: '',
//   type: 'moneyInput',
//   DataName: 'formData',
//   codeType: 'form'
// })
