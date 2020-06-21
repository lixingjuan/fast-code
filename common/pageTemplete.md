<template>
  <el-row>
    <cd-border-title title="<%=Title%>" :style="{ margin: '40px 0 30px 0' }" />
    <%- codeType==='table' ? `<el-table data='${DataName}'>` : `<el-form-item :model='DataName'>` %>
    
    <% domArr.forEach((item, index) =>  { %> 
        
        
        <% if( !item.type || item.type==='text' && codeType==='table' ) { %>
              <%- `<el-table-column`  %>
                <%-   `show-overflow-tooltip` %>
                <%-   item.field ? `prop=${ item.field }` : `prop=todo${ index+1 }`  %>
                <%-   `label="${item.label}"`  %>
                <%-   item.width ? `width="${item.width}px"` : ''  %>
              <%-  `/>` %>
        <% } else if( item.type && codeType==='table' ) {  %>
              <%- `<el-table-column`  %>
                <%-   `show-overflow-tooltip` %>
                <%-   item.field ? `prop=${ item.field }` : `prop=todo${ index+1 }`  %>
                <%-   `label="${item.label}"`  %>
                <%-   item.width ? `width="${item.width}px"` : ''  %>
              <%-  `>` %>
              <%- `<template slot-scope='scope'>` %>
        <% } else { %>
            <%- `<el-form-item label="${item.label}:" prop="${item.field}">`  %>
        <% }  %>


              <%- getCodeItem({...item, index, DataName,codeType }) %> 
        

        <% if( item.type && codeType==='table' ) { %>
            <%- `</template>` %>
            <%- `</el-table-column>` %>
        <% }  else if(  item.type && codeType !== 'table' ){  %>
            <%- `</el-form-item>` %>
        <% }  %>

        
    <% }) %>

    <%- codeType==='table' ? `</el-table>` : `</el-form>` %>
  </el-row>
</template>

<script>
<%#import { CdBorderTitle } from 'comp@'
import CdTextDate from '@candy/ui/component/cd-text-date'
import CdTextMoney from '@candy/ui/component/cd-text-money'
import CdInputMoney from '@candy/ui/component/cd-input-money'%>

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      <%= DataName %> : [{

        <% domArr.forEach((item, index) => { %>
            <%- item.field ? item.field : `todo${index+1}` %> : <%- item.value ? `${ item.value }`: "'测试数据'" %>,
        <% }); %>

      }]

    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
