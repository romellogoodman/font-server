const fonts = require("./fonts.json");

const html = `
    <html>
      <head>
        <title>Font Server | Romello Goodman</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <main>
          <h1>Font Server</h1>
          <p>This is an open source font server that hosts open source fonts. At the moment it is focused on hosting variable fonts.</p>
          <a href="https://github.com/romellogoodman/font-server">
            <p>Codebase Repo</p>
          </a>
          <section>
            ${fonts
              .map((font) => {
                return `
                <div>
                  <p>${font.family}</p>
                </div>
              `;
              })
              .join("\n")}
          </section>
        </main>
      </body>
    </html>
    `;

exports.render = function () {
  return html;
};
