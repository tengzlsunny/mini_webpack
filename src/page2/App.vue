<template>
    <div class="wrap">
       我是移动端
    </div>
</template>

<script>
import 'normalize.css'  
import './app.scss'
import { nowInvestUrl } from '@/url/link.js'

export default {
  data: _ => ({
      nowInvestUrl
  }),
  methods: {
      jumpPage(url) {
          window.location.href = url
      }
  }
}
</script>
