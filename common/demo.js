const ejs = require('ejs')
const path = require('path')

const domArr = [
  { field: 'ceshi', label: '增信类型', value: '副', type: '', width: '' },
  { field: '', label: '增信方', value: '', type: '', width: '' },
  { field: '', label: '增信有效期', value: '', type: 'date', width: '' },
  { field: '', label: '增信金额', value: '', type: 'amount-text', width: '' },
  { field: '', label: '备注', value: '', type: '', width: '' }
]

// console.log(
//   ejs.render('<%= domArr.map(item=> ({item.prop})) %>', {
//     people: people,
//     domArr
//   })
// )

const params = {
  Title: '1',
  Data: '2',
  Code: '3',
  DataName: '数据名称',
  domArr
}

ejs.renderFile(
  path.join(path.dirname(__dirname), '/common/pageTemplete.md'),
  params,
  'utf-8',
  function(error, str) {
    console.log(str)
    if (error) {
      console.error('ejs模版处理出错', error)
      return
    }
    // fs.writeFileSync(targetPosition, str)
  }
)
