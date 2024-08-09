// import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";


export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
    ],
    publicDir: "public",
    base: "./",
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/variable.scss" as *;`,
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 1666,
      open: false,
      strictPort: false,
  
    },
    build: {
    },
  };
});
