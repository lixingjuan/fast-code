<template>
  <el-row>
    <cd-border-title title="测试测试" :style="{ margin: '40px 0 30px 0' }" />
    
    <el-table :data="tableData" style="width: 100%">
      
          <el-table-column
            
      show-overflow-tooltip
      prop="test"
      label="增信类型"
      
          />
          <el-table-column
            
      show-overflow-tooltip
      prop="todo2"
      label="增信方"
      
          />
          <el-table-column
            
      show-overflow-tooltip
      prop="todo3"
      label="增信有效期"
      
          />
          <el-table-column
            
      show-overflow-tooltip
      prop="todo4"
      label="增信金额"
      
          />
          <el-table-column
            
      show-overflow-tooltip
      prop="todo5"
      label="备注"
      
          />
    </el-table>
    
     
       
     
       
     
       
     
       
     
       
    

  </el-row>
</template>

<script>
import { CdBorderTitle } from 'comp@'
import CdTextDate from '@candy/ui/component/cd-text-date'
import CdTextMoney from '@candy/ui/component/cd-text-money'
import CdInputMoney from '@candy/ui/component/cd-input-money'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableData : [{

        
            test : 测试数据,
        
            todo2 : 测试数据,
        
            todo3 : 测试数据,
        
            todo4 : 测试数据,
        
            todo5 : 测试数据,
        

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
