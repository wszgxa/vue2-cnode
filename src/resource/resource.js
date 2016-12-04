// 将axios放到vue方法中

import axios from 'axios'

let resource = {}
resource.install = function (Vue) {
  Vue.prototype.$http = axios
}

export default resource
