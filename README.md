# INFO

1. 使用语言: Node.js + [ejs](https://ejs.bootcss.com/)
2. 适用语言: Vue+elementUI


# 初衷

1. 项目较多table和form, 而 elementUI 不同于C7N，在对象里配置即可快速实现table和form以及内嵌组件，需要手写columns, 工作大量重复且效率低;于是参考 C7N 的开发思想，通过对象属性，脚本生成所需代码;
2. 懒;


项目示例代码如下:

```js
/* 不同类型的字段常常要内嵌不同类型的组件展示 */
<el-table
:data="tableData"
v-loading="isLoading"
@selection-change="handleSelectionChange"
>
   <el-table-column label="模板" align="center">
     <template slot-scope="scope">
       <el-button type="text" @click="downLoad(scope.row.templateUrl)" size="small">
         <cd-icon type="xiazai1" size="13"></cd-icon>
       </el-button>
     </template>
   </el-table-column>

   <el-table-column
     min-width="150"
     show-overflow-tooltip
     prop="deductType"
     label="收取方式"
   >
     <template slot-scope="scope">
       <el-select
         clearable
         filterable
         :disabled="moduelDisabled"
         v-model.trim="scope.row.deductType"
         placeholder="请选择收取方式"
       >
         <el-option
           v-for="item in deductTypeList"
           :value="item.lookupCode"
           :label="item.lookupValue"
           :key="item.lookupCode"
         />
       </el-select>
     </template>
   </el-table-column>

   <el-table-column prop="approved" label="结论" min-width="150px">
     <template slot-scope="scope">
       <el-radio-group v-model="scope.row.approved">
         <el-radio :label="true">通过</el-radio>
         <el-radio :label="false">不通过</el-radio>
       </el-radio-group>
       <span>{{ scope.row.comment }}</span>
     </template>
   </el-table-column>
</el-table>

/* form */
<el-form>
   <el-form-item label="客户名称:" prop="requestOrgName">
      <cd-text class="bold" :data="tableData.requestOrgName" />
   </el-form-item>


   <el-form-item label="集团总额度:" prop="groupTotalQuota">
      <cd-input-money v-model="tableData.groupTotalQuota" />
   </el-form-item>
</el-form>
```


## 使用方法


根据需要修改文件

1. table => ./table/tableDomArr.js
2. form  => ./table/formDomArr.js


修改后执行

```bash
yarn table
# OR 
yarn form

```



解释

- field: 字段
- label: table中是列名/form中是label;
- value: 接口暂无时的测试值;
- type: 选项;
  - select: 下拉选;
  - dateText: 日期的展示组件;
  - datePicker:  日期选择器组件;
  - moneyText: 货币的展示组件;
  - moneyInput: 货币的输入组件;
  - button: 操作列按钮;
  - input: 普通文本输入框;
  - inputTextArea: textArea输入框;
- width: 宽度，不常用

```js
/* table模版 */
const moduleTitle = '对外担保情况' 
const tableDomArr = [
  { field:'', label: '', value: '', type: '', width: '' },
  { field:'', label: '', value: '', type: '', width: '' },
  { field:'', label: '', value: '', type: '', width: '' }
]

/* form模版 */
const moduleTitle = '对外公开信息查询'
const formDomArr = [
  { field: '', label: '', value: '', type: 'text' },
  { field: '', label: '', value: '', type: 'text' }
]
```


## 目录介绍

```js
.
├── common
│   ├── demo.js               // 开发时用于语法测试
│   ├── getCodeItem.js        // 获取不同的item组件
│   ├── pageTemplete.md       // 页面模版文件
│   └── index.js
│ 
├── form
│   ├── formDomArr.js         // 🍄修改该文件
│   └── index.js              // 执行入口
│ 
├── table
│   ├── generateTableData.js
│   ├── tableDomArr.js         // 🍄修改该文件
│   └── index.js              // 执行入口
│ 
├── index.vue                  // 目标文件
├── package.json
└── README.md
        
```




注: 该脚本仅提供参考思路，如使用请按照项目情况和需求进行修改;
