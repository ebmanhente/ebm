// Configuração opcional (Weather Underground / Weather.com PWS)
//
// IMPORTANTE: Se este site estiver em GitHub Pages, esta API key fica pública.
// O ideal é usar um proxy (Cloudflare Worker/Netlify Function) para esconder a key.
//
// Se NÃO tiveres stationId, deixa como "" e a página continua a funcionar (Open-Meteo).
window.WU_CONFIG = {
  apiKey: "cc9cbc0aeacb47899cbc0aeacbc7891b",
  stationId: "IMANHE1" // ex: "IPORTO1234"  <-- coloca aqui o ID da tua estação no Weather Underground
};
