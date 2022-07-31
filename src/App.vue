<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 12:59:21
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-07-31 11:45:34
 * @FilePath: \vue3-next-admin\src\App.vue
-->


<template>
<router-view />
</template>

<script lang="ts">
import { defineComponent }from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped> 
.el-menu-item:hover{
  outline: 0 !important;
  color: #409EFF !important;
}

.el-submenu__title:focus, .el-submenu__title:hover{
  outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
.el-menu-item:hover{
   outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
</style>
