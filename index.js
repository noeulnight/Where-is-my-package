const client = require('discord-rich-presence')('807061207718690837')
const superagent = require('superagent')

update()
setInterval(() => update(), 60000)

async function update () {
  const res = await superagent.get('https://apis.tracker.delivery/carriers/kr.hanjin/tracks/418694701305')
  const json = JSON.parse(res.text)
  const packages = json.progresses[json.progresses.length - 1]
  client.updatePresence({ state: packages.status.text, details: packages.description, largeImageKey: 'quest', instance: true })
  console.log('updated!')
}
