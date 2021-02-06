const client = require('discord-rich-presence')('807061207718690837')
const superagent = require('superagent')
const packagecode = 'kr.hanjin'
const packageid = '418694701305'

update()
setInterval(() => update(), 60000)

async function update () {
  const res = await superagent.get('https://apis.tracker.delivery/carriers/' + packagecode + '/tracks/' + packageid)
  const json = JSON.parse(res.text)
  const packages = json.progresses[json.progresses.length - 1]
  client.updatePresence({ state: packages.status.text, details: packages.description, largeImageKey: 'quest', instance: true })
  console.log('상태 업데이트됨! > ' + packages.description + ' > (' + Date.now() + ')')
}
