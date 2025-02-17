import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'log'

require('log-node')()
const app = express()
const port = 3000

app.use(bodyParser.text({ type: '*/*' }))
app.use(express.static('public'))

app.get('/api/legado', require('./api/legado'))
app.post('/api/ra', require('./api/ra'))

app.listen(port, () => {
  logger.notice(`应用正在监听 ${port} 端口`)
})
