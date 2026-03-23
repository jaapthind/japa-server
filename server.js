const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Blast coordinates to EVERYONE else connected
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
console.log("🚀 JAPA JUMP LIVE SATELLITE RUNNING!");
