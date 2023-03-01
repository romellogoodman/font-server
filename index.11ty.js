const renderHTML = () => {
  return `
    <html>
      <head>
        <title>Font Server | Romello Goodman</title>
      </head>
      <body>
        <main>
          <h1>Font Server</h1>
          <p>This is an open source font server that hosts open source fonts. At the moment it is focused on hosting variable fonts.</p>
          <a href="https://github.com/romellogoodman/font-server">
            <p>Codebase Repo</p>
          </a>
        </main>
      </body>
    </html>
    `;
};

exports.render = function (data) {
  const html = renderHTML();

  return html;
};
