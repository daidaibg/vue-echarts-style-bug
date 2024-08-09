<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import dayjs from "dayjs"
import "dayjs/locale/zh-cn";

dayjs.locale(dayjs.Ls['zh-cn']);
// :popperOptions="{
//       modifiers: [{ name: 'computeStyles', options: { adaptive: false } }],
//     }"
</script>

<template>
  <el-config-provider
    :locale="zhCn"
    :message="{ max: 2 }"
   >
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
