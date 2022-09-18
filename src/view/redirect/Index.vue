<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:40:30
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-18 12:11:32
 * @FilePath: \vue3-next-admin\src\view\redirect\Index.vue
-->

<template>
	<div>重定向</div>
  <el-dropdown :split-button="true" >
    中英文
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>