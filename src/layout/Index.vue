<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:35:04
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 11:37:35
 * @FilePath: \vue3-next-admin\src\layout\Index.vue
-->
<template>
  <div :class="classObj" class="app-wrapper"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onBeforeMount,
  onBeforeUnmount,
  toRefs,
  onMounted,
  reactive,
} from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "@/store";
import { AppActionTypes } from "@/store/modules/app/action-types";
// book
export default defineComponent({
  name: "Layout",
  setup() {
    const { t } = useI18n();
    const state = reactive({
      handleClickOutside: () => {},
    });
    const classObj = computed(() => {
      return {};
    });

    return {
      t,
      classObj,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #ffffff !important;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px);
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform 0.28s;
    width: $sideBarWidth !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-$sideBarWidth, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>