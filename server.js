const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    estado: "Activo",
    version: "1.0.0",
    mensaje: "Microservicio desplegado automáticamente en la Nube",
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
