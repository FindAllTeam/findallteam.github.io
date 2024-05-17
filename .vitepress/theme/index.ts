import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NavVisitor from './components/NavVisitor.vue'

import './style/var.css'
export default   {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout,null,{
      'nav-bar-title-after': () => h(NavVisitor),
    })
  }
}