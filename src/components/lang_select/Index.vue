<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-04 20:47:10
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-04 21:07:29
 * @FilePath: \vue3-next-admin\src\components\lang_select\Index.vue
-->
<template>
  <div>
    <el-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="45px"
        :class="{ 'svg-color': isWhite }"
      >
        <use xlink:href="#iconzhongyingwen" />
      </svg>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in languages"
            :key="item.value"
            :disabled="language === item.value"
          >
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent, reactive, toRefs } from "vue";
import { AppActionTypes } from "@/store/modules/app/action-types";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";

type Language = {
  name: string;
  value: string;
};

export default defineComponent({
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
  
  setup() {
    const store = useStore();
    const { locale } = useI18n();
    const state = reactive({
      languages: [
        { name: "en", value: "en" },
        { name: "中文", value: "zh-cn" },
      ] as Array<Language>,
      handleSetLanguage: (lang: string) => {
        locale.value = lang;
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang);
        ElMessage({
          message: "Switch Language Success",
          type: "success",
        });
      },
    });

    const language = computed(() => {
      return store.state.app.language;
    });
    
    return {
      ...toRefs(state),
      language,
    };
  },
});
</script>

<style lang="scss" scoped>
.svg-color {
  fill: white;
}
</style>