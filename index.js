const interfaceList = require('os').networkInterfaces()

module.exports = function () {
  if (!interfaceList) {
    console.log('No network interfaces found')
  	return false
  }
  const interfaces = Object.keys(interfaceList).map(name => {
    return interfaceList[name]
  })
  const ipv4 = [].concat.apply([], interfaces).filter(face => {
    return face.family === 'IPv4' && face.internal === false
  })
  return ipv4.length ? ipv4[0].address : false
}()
