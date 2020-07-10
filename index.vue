<template>
  <el-row>
    <cd-border-title
      title="主力银行账号"
      :style="{ margin: '40px 0 30px 0' }"
    />
    <el-table :data="tableData">
      <el-table-column show-overflow-tooltip prop="todo1" label="户名信息" />

      <el-table-column show-overflow-tooltip prop="todo2" label="银行名称" />

      <el-table-column show-overflow-tooltip prop="todo3" label="开户行信息" />

      <el-table-column show-overflow-tooltip prop="todo4" label="账号" />

      <el-table-column show-overflow-tooltip prop="todo5" label="操作">
        <template slot-scope="scope">
          <el-button type="text"> 操作 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          todo1: '测试数据',

          todo2: '测试数据',

          todo3: '测试数据',

          todo4: '测试数据',

          todo5: '测试数据'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
