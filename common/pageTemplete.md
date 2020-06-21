<template>
  <el-row>
    <cd-border-title title="<%=Title%>" :style="{ margin: '40px 0 30px 0' }" />
    <% domArr.forEach((item, index)=>{ %> 
      <%- getCodeItem({...item, index, DataName,codeType }) %> 
    <%})%>

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
      <%= DataName %> : [{

        <% domArr.forEach((item, index) => { %>
            <%- item.field ? item.field : `todo${index+1}` %> : <%- item.value ? `${ item.value }`: '测试数据' %>,
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
