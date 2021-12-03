<!--
 * @Author: Li Jian
 * @Date: 2021-12-02 11:48:19
 * @LastEditTime: 2021-12-03 11:10:08
 * @LastEditors: Li Jian
-->
<script setup lang="ts">
import { ref } from 'vue'

import { freeApi } from '../plugins/api'
import { abortController } from '../plugins/axios'

const btnCancel = () => {
  abortController.abort()
}

const btnStart = () => {
  freeApi.TodayInHistory({}).then((res) => {
    console.log(res)
  })
}
// freeApi
//   .ICPSearch({
//     url: 'qq.com',
//   })
//   .then((res) => {
//     console.log(res)
//   })

// freeApi
//   .TrainTicketsSeatch({
//     r: 'train/trainTicket/getTickets',
//     'primary[departureDate]': '2021-12-02',
//     'primary[departureCityName]': '北京',
//     'primary[arrivalCityName]': '上海',
//   })
//   .then((res) => {
//     console.log(res)
//   })

// freeApi.WordDefinition({ q: 'hello' }).then((res) => {
//   console.log(res)
// })

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button @click="btnCancel">取消请求</button>
  <button @click="btnStart">发起请求</button>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
