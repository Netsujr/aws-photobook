import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import '@aws-amplify/ui-vue'
import { Amplify } from "aws-amplify";
import aws_exports from './aws-exports'

Amplify.configure(aws_exports);

createApp(App).use(store).use(router).use(Amplify).mount('#app')
