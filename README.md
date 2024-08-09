# yh-oa-pc

This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```



## 表格列表

### 列表

普通搜索列表表格

[表格例子](./docs/demo/list.vue)

### 详情



## 文字相关

### 提示

包含表格头提示，信息提示，文字前面或后面加载图标

有时会有提示信息，需要展示出来，如下图：

<img src="./docs/imgs/image-20240229143223442.png" alt="image-20240229143223442" style="zoom:150%;float: left; margin-right: 10px;"  />

组件方式,正常组件形式

```vue
<script  setup lang="ts">
	import TextTips from "@/components/text/tooltip/text-tips.vue";
</script>

<template>
	<text-tips content="提示问题">你的名称</text-tips>
</template>
```

是用element-plus 的tooltip组件 https://element-plus.org/zh-CN/component/tooltip.html 参数均可使用

| 名称     | 说明                                                  | 类型    | 默认值 |
| :------- | :---------------------------------------------------- | :------ | :----- |
| isBefore | 图标是否在前面,默认false,true的话在后面               | Boolean | false  |
| 其余参数 | https://element-plus.org/zh-CN/component/tooltip.html |         |        |

### 文字链接

鼠标移动上去后滑入效果，如如下图：



![tutieshi_152x94_3s](./docs/imgs/tutieshi_152x94_3s.gif)

```vue
<script  setup lang="ts">
	import TextLink from "@/components/text/text-link/text-link.vue";
</script>
<template>
  	 <!-- 点击事件自己写 -->
	 <text-link text="你的文字" ></text-link>
</template>
```



