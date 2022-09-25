<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 11:34:20
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 13:49:12
-->

<template>
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <div v-else @click="push">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isExternal } from "@/utils/validate";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const push = () => {
      console.log(props.to);
      router.push(props.to).catch((err) => {
        console.log(err);
      });
    };
    return {
      push,
      isExternal,
    };
  },
});
</script>
