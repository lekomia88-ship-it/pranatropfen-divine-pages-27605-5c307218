module.exports = {
  // Welche Seiten sollen gerendert werden
  include: ["/"],
  
  // Puppeteer Einstellungen für das Rendering
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  
  // Warte auf Netzwerk-Anfragen und Fonts
  waitFor: "networkidle0",
  
  // Inline critical CSS
  inlineCss: true,
  
  // Minify HTML
  minifyHtml: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    keepClosingSlash: true,
    sortAttributes: true,
    sortClassName: true,
  },
  
  // Source und Ziel
  source: "dist",
  destination: "dist",
  
  // Viewport für Mobile-First
  viewport: {
    width: 1920,
    height: 1080,
  },
};
