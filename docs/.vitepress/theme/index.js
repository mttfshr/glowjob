import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { createApp } from 'vue'
import GJEvent from '../components/GJEvent.vue' 
import GJSchedule from '../components/GJSchedule.vue' 
import GJNotionPage from '../components/GJNotionPage.vue' 

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('GJEvent', GJEvent)
    app.component('GJSchedule', GJSchedule)
    app.component('GJNotionPage', GJNotionPage)
  }
}