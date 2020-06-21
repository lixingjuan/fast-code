/**
 * @des 判断类型
 * @param {Array} tableDomArr 要遍历的表格数据
 */
const getComponent = ({ field, label, type }) => {
  let codeItem
  console.log('getComponent被执行')
  if (type === 'datePicker') {
    codeItem = `<cd-text-money>{{ scope.row.${field} }}</cd-text-money>`
  } else if (type === 'dateText') {
    codeItem = `<cd-text-date type="text">${label} </cd-text-date>`
  } else if (type === 'moneyInput') {
    codeItem = `<cd-input-money>{{ scope.row.${field} }}</cd-input-money>`
  } else if (type === 'moneyText') {
    codeItem = `<cd-text-money>{{ scope.row.${field} }}</cd-text-money>`
  } else if (type === 'select') {
    codeItem = `
    <el-select
        clearable
        filterable
        v-model.trim="scope.row.${field}"
        placeholder="请选择${label}"
        >
        <el-option
            v-for="item in []"
           :value="item.lookupCode"
           :label="item.lookupValue"
           :key="item.lookupCode"
        />
    </el-select>
            `
  } else if (type === 'button') {
    codeItem = `<el-button type="text"> ${label} </el-button>`
  }
  console.log(codeItem)
  return codeItem
}

const getTableItem = () => {}

/**
 * @des :
 * @param {Array} formDomArr 用于生成form-item的字段及其参数
 * @param {Number} columnsNumber form的列数
 * @param {String} DataName form绑定的model的名称
 * @return:
 */
const getFormItem = itemParam => {
  const { field, label, type, DataName } = itemParam

  let formItem = ''

  if (!type) {
    formItem = `
        <el-form-item label="${label}:" prop="${field}">
          <cd-text class="bold" :data="${DataName}.${field}" />
        </el-form-item>
      `
  } else {
    formItem = `
        <el-form-item label="${label}:" prop="${field}">
          ${getComponent(itemParam)}
        </el-form-item>
      `
  }
  return formItem
}

const getCodeItem = itemParam => {
  const { codeType } = itemParam
  if (codeType === 'table') {
    getTableItem(itemParam)
  } else {
    getFormItem(itemParam)
  }
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
