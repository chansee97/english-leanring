// const os = require('os')
import {networkInterfaces} from 'os'
/** @type {import('next').NextConfig} */
const nextConfig = {}

// 获取本机电脑IP
function getIPAdress() {
  let interfaces = networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {

        return alias.address
      }
    }
  }
}

console.log(`局域网访问地址： ${getIPAdress()}`)
export default nextConfig
