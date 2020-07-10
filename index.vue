
<template>
  <el-row>
    <cd-border-title title="对外公开信息查询" :style="{ margin: '40px 0 30px 0' }" />
    <el-form :model='formData' label-width="150px">
    
     
        
        
            <el-form-item label="中登网:" prop="todo1" >         
              <el-input type="textarea" :rows="3" v-model='formData.todo1'/> 
        
            </el-form-item>        

        
     
        
        
            <el-form-item label="法律诉讼:" prop="todo2" >         
              <el-input type="textarea" :rows="3" v-model='formData.todo2'/> 
        
            </el-form-item>        

        
     
        
        
            <el-form-item label="第三方征信:" prop="todo3" >         
              <el-input type="textarea" :rows="3" v-model='formData.todo3'/> 
        
            </el-form-item>        

        
     
        
        
            <el-form-item label="集团黑名单:" prop="todo4" >         
              <el-input type="textarea" :rows="3" v-model='formData.todo4'/> 
        
            </el-form-item>        

        
    

    </el-form>
  </el-row>
</template>

<script>


export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      formData : {
          
            todo1 : '测试数据',
          
            todo2 : '测试数据',
          
            todo3 : '测试数据',
          
            todo4 : '测试数据',
          
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
