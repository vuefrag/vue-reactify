<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-reactify/main/banner.svg" alt="vue-reactify" width="100%" />
</p>

<h1 align="center">vue-reactify</h1>

<p align="center">A Vue 3 composition API utility that transforms regular JavaScript functions into reactive functions that automatically unwrap ref arguments and return reactive results.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-reactify"><img src="https://img.shields.io/npm/v/vue-reactify.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-reactify"><img src="https://img.shields.io/npm/dm/vue-reactify.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-reactify
```

## Usage

```ts
import { reactify } from 'vue-reactify'
import { ref } from 'vue'

const add = (a: number, b: number) => a + b
const reactiveAdd = reactify(add)

const a = ref(1)
const b = ref(2)
const result = reactiveAdd(a, b)

console.log(result.value) // 3

a.value = 5
console.log(result.value) // 7
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
