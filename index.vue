<template>
  <el-row>
    <cd-border-title title="测试测试" :style="{ margin: '40px 0 30px 0' }" />
    <el-form-item :model='DataName'>
    
     
        
        
        
            <el-form-item label="历史授信时间:" prop="historyCreditTime">
        


              <cd-text-date>历史授信时间 </cd-text-date> 
        

        
            </el-form-item>
        

        
     
        
        
        
            <el-form-item label="历史授信峰值:" prop="">
        


              <el-input type="textArea" :rows='3' v-model=''/> 
        

        
            </el-form-item>
        

        
     
        
        
        
            <el-form-item label="授信峰值分析:" prop="">
        


              <el-input type="textArea" :rows='3' v-model=''/> 
        

        
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
      formData : [{

        
            historyCreditTime : '测试数据',
        
            todo2 : '测试数据',
        
            todo3 : '测试数据',
        

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
