<!--
 * @Description: 登录页面
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:50:39
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-07-31 12:16:53
 * @FilePath: \vue3-next-admin\src\view\login\Index.vue
-->
<template>
	<div class="login-container">
    <video
      poster="../../../assets/images/login/video-cover.jpeg"
      loop
      autoplay
      muted
    >
      <source src="../../../assets/images/login/night.mp4">
    </video>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
	setup() {
		const userNameRef = ref(null)
	}
})

</script>

<style lang="scss" scoped>

</style>