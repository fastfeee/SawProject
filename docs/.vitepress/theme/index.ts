import Theme from 'vitepress/theme'
import './style/var.css'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import { h } from 'vue'



export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout,null,{
      'home-features-after':() =>h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
    })
  },
  
}
