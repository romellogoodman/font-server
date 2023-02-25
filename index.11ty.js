const renderHTML = () => {
  return `
    <html>
      <head>
        <title>Font Server</title>
      </head>
      <body>
        <main>
          <p>Font Server.</p>
        </main>
      </body>
    </html>
    `;
};

exports.render = function (data) {
  const html = renderHTML();

  return html;
};
