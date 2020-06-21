/**
 * @des 生成只读列表的测试数据
 * @param {Number} lineNumber  列数，默认3列
 * @param {Number} rowNumber  行数，默认1行
 */
const generateTableData = ({ lineNumber = 3, rowNumber = 2 }) => {
  const lineArr = Array(lineNumber).fill('')
  const rowArr = Array(rowNumber).fill('')

  const tableData = rowArr.reduce(tol => {
    let curItem = lineArr.reduce((lineCol, lineCur, lineIndex) => {
      return (lineCol += `
        todo${lineIndex + 1}:'第${lineIndex + 1}行测试数据',`)
    }, '')

    return (tol += `{
        ${curItem}
      },`)
  }, '')

  return tableData
}

module.exports = generateTableData
