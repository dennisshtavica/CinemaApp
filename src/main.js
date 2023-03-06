import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store  from "./store";
import "./scss/base/_reset.scss";

const app = createApp(App);
app.use(
    router,
    store
);
app.mount("#app");
