import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

//暗色皮肤
import "element-plus/theme-chalk/dark/css-vars.css";
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/message-box.scss";
import "element-plus/theme-chalk/src/notification.scss";
import "element-plus/theme-chalk/src/button.scss";

import "./styles/index.scss";


const app = createApp(App);

app.use(router);


app.mount("#app");
