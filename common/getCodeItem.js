/**
 * @des 判断类型
 * @param {Array} tableDomArr 要遍历的表格数据
 */
const getCodeItem = ({ field, label, type, codeType, DataName }) => {
  let codeItem
  console.log('getCodeItem被执行')
  const realField =
    codeType === 'table'
      ? `scope.row.${field}`
      : ['input', 'select'].includes(type)
      ? `${DataName}.${field}`
      : field

  if (type === 'datePicker') {
    codeItem = `<cd-text-money>{{ ${realField} }}</cd-text-money>`
  } else if (type === 'dateText') {
    codeItem = `<cd-text-date>${label} </cd-text-date>`
  } else if (type === 'moneyInput') {
    codeItem = `<cd-input-money>{{ ${realField} }}</cd-input-money>`
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
  } else if (type === 'textArea') {
    codeItem = `<el-input type="textArea" :rows='3' v-model='${realField}'/>`
  } else if (type === 'text') {
    codeItem = `<el-input type="textArea" :rows='3' v-model='${realField}'/>`
  } else {
    return `type为${type}， 无该判断，请添加`
  }
  console.log(codeItem)
  return codeItem
}

// const getTableItem = itemParam => {
//   const { field, label, type, DataName } = itemParam

//   let columnItem = ''

//   if (!type || type === 'text') {
//     columnItem = `
//         <el-form-item label="${label}:" prop="${field}">
//           <cd-text class="bold" :data="${DataName}.${field}" />
//         </el-form-item>`
//   } else {
//     columnItem = `
//         <el-form-item label="${label}:" prop="${field}">
//           ${getComponent(itemParam)}
//         </el-form-item>`
//   }
//   return columnItem
// }

/**
 * @des :
 * @param {Array} formDomArr 用于生成form-item的字段及其参数
 * @param {Number} columnsNumber form的列数
 * @param {String} DataName form绑定的model的名称
 * @return:
 */
// const getFormItem = itemParam => {
//   const { field, label, type, DataName } = itemParam

//   let formItem = ''

//   if (!type || type === 'text') {
//     formItem = `
//         <el-form-item label="${label}:" prop="${field}">
//           <cd-text class="bold" :data="${DataName}.${field}" />
//         </el-form-item>`
//   } else {
//     formItem = `
//         <el-form-item label="${label}:" prop="${field}">
//           ${getComponent(itemParam)}
//         </el-form-item>`
//   }
//   return formItem
// }

// const getCodeItem = itemParam => {
//   let codeItem = getComponent(itemParam)
//   return codeItem
// }

module.exports = getCodeItem

// getCodeItem({
//   field: 'todo',
//   label: '综合说明',
//   value: '',
//   type: 'moneyInput',
//   DataName: 'formData',
//   codeType: 'form'
// })
