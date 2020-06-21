/**
 * @des :
 * @param {Array} formDomArr 用于生成form-item的字段及其参数
 * @param {Number} columnsNumber form的列数
 * @param {String} formDataName form绑定的model的名称
 * @return:
 */
const getFormItems = ({ formDomArr, columnsNumber, formDataName }) => {
  return formDomArr.reduce((tol, cur, index) => {
    let formItemCurrent
    // const currentField = `todo${index + 1}`
    const currentField = cur.prop || `todo${index + 1}`
    const span = (24 / columnsNumber).toFixed()

    if (cur.type && cur.type === 'select') {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
              <el-select
                clearable
                filterable
                v-model.trim="${formDataName}.${currentField}"
                placeholder="请选择${cur.label}"
              >
                <el-option
                  v-for="item in []"
                  :value="item.id"
                  :label="item.name"
                  :key="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          ${getEnd({ index, columnsNumber })}
        `
    } else if (cur.type && cur.type === 'input') {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
              <el-input v-model='${formDataName}.${currentField}' />
            </el-form-item>
          </el-col>
        ${getEnd({ index, columnsNumber })}`
    } else if (cur.type && cur.type === 'textMoney') {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
              <cd-text-money>{{ ${formDataName}.${currentField} || 0 }}</cd-text-money>
            </el-form-item>
          </el-col>
        ${getEnd({ index, columnsNumber })}`
    } else if (cur.type && cur.type === 'inputMoney') {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
              <cd-input-money>{{ ${formDataName}.${currentField} || 0 }}</cd-input-money>
            </el-form-item>
          </el-col>
        ${getEnd({ index, columnsNumber })}`
    } else if (cur.type && cur.type === 'datePicker') {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
                <el-date-picker 
                    placeholder="请选择${cur.label}"
                    v-model="${formDataName}.${currentField}" />
            </el-form-item>
          </el-col>
        ${getEnd({ index, columnsNumber })}`
    } else {
      formItemCurrent = `
        ${getStart({ index, columnsNumber })}
          <el-col :span="${span}">
            <el-form-item label="${cur.label}:" prop="${currentField}">
              <cd-text class="bold" :data="${formDataName}.${currentField}" />
            </el-form-item>
          </el-col>
        ${getEnd({ index, columnsNumber })}`
    }

    return (tol += formItemCurrent)
  }, '')
}

const getStart = ({ index, columnsNumber }) => {
  if (index % columnsNumber === 0) {
    return `\n<el-row>`
  } else {
    return ``
  }
}

const getEnd = ({ index, columnsNumber }) => {
  console.log({ index, columnsNumber })
  if (index !== 0 && index !== 1 && (index + 1) % columnsNumber === 0) {
    return `</el-row>\n`
  } else {
    return ``
  }
}

module.exports = getFormItems
