const { getCodeItem } = require('../common')

/**
 * @des 获取表格的列
 * @param {Array} tableDomArr 要遍历的表格数据
 */
const getTargetcolumns = tableDomArr => {
  return tableDomArr.reduce((tol, cur, index) => {
    let curColumn
    const currentProp = cur.field || `todo${index + 1}`
    const labelWidth = cur.width ? `width="${cur.width}px"` : ''

    const columnProp = `
      show-overflow-tooltip
      prop="${currentProp}"
      label="${cur.label}"
      ${labelWidth}`

    if (cur.type && cur.type === 'datePicker') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <cd-text-money>
            {{ scope.row.${currentProp} }}
            </cd-text-money>
          </template>
        </el-table-column>`
    } else if (cur.type && cur.type === 'dateText') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <cd-text-date type="text">${cur.label} </cd-text-date>
          </template>
        </el-table-column>`
    } else if (cur.type && cur.type === 'moneyText') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <cd-text-money>{{ scope.row.${currentProp} }}</cd-text-money>
          </template>
        </el-table-column>`
    } else if (cur.type && cur.type === 'moneyInput') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <cd-input-money>{{ scope.row.${currentProp} }}</cd-input-money>
          </template>
        </el-table-column>`
    } else if (cur.type && cur.type === 'select') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <el-select
              clearable
              filterable
              v-model.trim="scope.row.${currentProp}"
              placeholder="请选择${cur.label}"
            >
            <el-option
              v-for="item in []"
              :value="item.id"
              :label="item.name"
              :key="item.id"
            />
            </el-select>
          </template>
        </el-table-column>`
    } else if (cur.type && cur.type === 'button') {
      curColumn = `
        <el-table-column
          ${columnProp}
        >
          <template slot-scope="scope">
            <el-button type="text">${cur.label} </el-button>
          </template>
        </el-table-column>`
    } else {
      curColumn = `
          <el-table-column
            ${columnProp}
          />`
    }
    return (tol += curColumn)
  }, '')
}

module.exports = getTargetcolumns
