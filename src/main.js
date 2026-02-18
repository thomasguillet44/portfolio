import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'
import App from './App.vue'
import './style/global.css'

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { fr, en }
})

createApp(App).use(i18n).mount('#app')
