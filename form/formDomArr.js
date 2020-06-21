/*
 * @type:
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-06-08 10:50:51
 * @copyright: Copyright (c) 2019, Hand
 */

/**
 * @des : type
 * 1. {select} 下拉选
 * 2. {input} el-input, 可编辑，icon为search
 * 3. {textMoney} cd-text-money
 * 4. {inputMoney} cd-input-money
 * 5. {datePicker} el-date-picker YYYY-MM-DD 格式
 * @return:
 */
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
const formDomArr = [
  { field: '', label: '历史授信时间', value: '', type: 'text' },
  {
    field: 'historyCreditTime',
    label: '历史授信峰值',
    value: '',
    type: 'date'
  },
  { field: '', label: '授信峰值分析', value: '', type: 'text' }
]

// 模版
// const formDomArr = [
//   { field: '', label: '', value: '', type: 'text' },
//   { field: '', label: '', value: '', type: 'text' }
// ]

module.exports = formDomArr
