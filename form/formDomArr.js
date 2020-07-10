// type:money
// remark: 除了显示字段外的字
// const formDomArr = [
//   { field: '', label: '保理商', value: '海汇保理有限公司', type: '', width: '' },
//   {
//     field: '',
//     label: '融资企业',
//     value: '我是融资企业融资客户A',
//     type: '',
//     width: ''
//   },
//   { field: '', label: '融资产品', value: '小杨产 品02', type: '', width: '' },
//   { field: '', label: '融资周期', value: ' 256天', type: '', width: '' },
//   { field: '', label: '目标XIRR', value: ' 13%', type: '', width: '' },
//   { field: '', label: '还款模式', value: '到期还本', type: '', width: '' },
//   { field: '', label: '申请人', value: '小杨', type: '', width: '' },
//   { field: '', label: '实际XIRR', value: ' 14.5%', type: '', width: '' },
//   { field: '', label: '收息方式', value: '按期预收利息', type: '', width: '' }
// ]

// const formDomArr = [
//     { field: '', label: '申请人', value: '张三', type: 'text' },
//     { field: '', label: '部门', value: '物流部门', type: 'text' },
//     { field: '', label: '联系电话', value: '137283728372', type: 'text' },
//     { field: '', label: '流程', value: '内部转移客户申请', type: 'text' },
//     { field: '', label: '当前审批节点', value: '上级领导', type: 'text' },
//     { field: '', label: '申请时间', value: '2018-', type: 'text' },
//   ]

// 风险审查报告
// 周阳： 项目信息
// const formDomArr = [
//   //   { field: 'requestOrgName', label: '客户名称', value: '', type: 'text' },
//   { field: 'applAmount', label: '申请金额', value: '', type: 'input' },
//   { field: 'factorPeriod', label: '融资期数', value: '', type: 'input' },
//   { field: 'todo', label: '还款方式', value: '', type: 'input' },repaymentMethodDesc
//   { field: 'groupTotalQuota', label: '集团总额度', value: '', type: 'input' },
//   { field: 'actualXirr', label: 'XIRR', value: '', type: 'input' },
//   { field: 'todo', label: '正常期利率/年(360天)', value: '', type: 'input' },baseYearRate
//   { field: 'todo', label: '保理宽限期(天) ', value: '', type: 'input' },factorPeriod
//   { field: 'todo', label: '宽限期利率/年 ', value: '', type: 'input' },graceYearRate
//   { field: 'todo', label: '批复有效期 ', value: '', type: 'input' }, replyPeriod
//   { field: 'todo', label: '逾期利率/年(360天)', value: '', type: 'input' },dueYearRate
//   { field: 'factorMode', label: '追索权 ', value: '', type: 'input' },
//   { field: 'factorType', label: '明/暗保理 ', value: '', type: 'select' },
//   { field: 'fundMode', label: '额度性质 ', value: '', type: 'select' },
//   { field: 'factorSubject', label: '保理标的 ', value: '', type: 'select' },
//   { field: 'todo', label: '业务区域 ', value: '', type: 'input' },businessArea
//   { field: 'todo', label: '业务类型', value: '', type: 'input' }businessType
//   { field: 'todo', label: '综合说明', value: '', type: 'input' }
// ]

// 历史授信峰值
// const formDomArr = [
//   {
//     field: 'historyCreditTime',
//     label: '历史授信时间',
//     value: '',
//     type: 'datePicker'
//   },
//   {
//     field: '',
//     label: '历史授信峰值',
//     value: '',
//     type: 'input'
//   },
//   { field: '', label: '授信峰值分析', value: '', type: 'inputTextArea' }
// ]

/* 债务双方 */
// const formDomArr = [
//   { field: '债权人', label: '', value: '', type: 'input' },
//   { field: '债务人', label: '', value: '', type: 'input' }
// ]

/* 债权人，债务人公司介绍 */
// const formDomArr = [
//   { field: '', label: '债权人', value: '', type: 'text', width: '' },
//   {
//     field: 'registeredAddress',
//     label: '企业注册地',
//     value: '',
//     type: 'text',
//     width: ''
//   },
//   {
//     field: 'orgEquity',
//     label: '公司股权信息',
//     value: 'text',
//     type: 'text',
//     width: ''
//   },
//   {
//     field: 'orgProduct',
//     label: '公司产品及范围',
//     value: '',
//     type: 'inputTextArea',
//     width: ''
//   }
// ]

/* 模版 */
// const formDomArr = [
//   {
//     field: '',
//     label: '风险提示及综合评估',
//     value: '',
//     type: 'inputTextArea',
//     width: ''
//   },
//   { field: '', label: '结论', value: '', type: 'radio', width: '' },
//   { field: '', label: '综合说明', value: '', type: 'inputTextArea', width: '' },
//   {
//     field: '',
//     label: '资产巡视要点',
//     value: '',
//     type: 'inputTextArea',
//     width: ''
//   }
// ]

/* 核心指标检视 */
// const moduleTitle = '核心指标检视'
// const formDomArr = [
//   { field: '', label: '行业分析数据表', value: '', type: 'button' },
//   { field: '', label: '行业分析', value: '', type: 'inputTextArea' },
//   { field: '', label: '评分模型结果', value: '', type: 'text' },
//   { field: '', label: '财务报表分析', value: '', type: 'button' },
//   { field: '', label: '损益表', value: '', type: 'text' },
//   { field: '', label: '损益表分析', value: '', type: 'inputTextArea' },
//   { field: '', label: '资产负债表', value: '', type: 'text' },
//   { field: '', label: '资产负债表分析', value: '', type: 'inputTextArea' },
//   { field: '', label: '现金流量表', value: '', type: 'text' },
//   { field: '', label: '现金流量分析', value: '', type: 'inputTextArea' },
//   { field: '', label: '财务分析表', value: '', type: 'text' },
//   { field: '', label: '财务表分析', value: '', type: 'inputTextArea' }
// ]

/* 对外公开信息查询 */
const moduleTitle = '对外公开信息查询'
const formDomArr = [
  { field: '', label: '中登网', value: '', type: 'inputTextArea' },
  { field: '', label: '法律诉讼', value: '', type: 'inputTextArea' },
  { field: '', label: '第三方征信', value: '', type: 'inputTextArea' },
  { field: '', label: '集团黑名单', value: '', type: 'inputTextArea' }
]

/* 模版 */
// const moduleTitle = ''
// const formDomArr = [
//   { field: '', label: '', value: '', type: 'text' },
//   { field: '', label: '', value: '', type: 'text' }
// ]

module.exports = { formDomArr, moduleTitle }
