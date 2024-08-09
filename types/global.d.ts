

// 参考：
declare module "vue" {
  export interface GlobalComponents {
    YhButton: typeof import("../src/components/button/src/button.vue")["default"];
    YhContent: typeof import("../src/components/layout/yh-content/yh-content.vue")["default"];
  }
}

export {};
