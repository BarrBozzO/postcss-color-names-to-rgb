let postcss = require("postcss");

module.exports = postcss.plugin("postcss-first-plugin", (opts = {}) => {
  return (root) => {
    root.walkRules((rule) => {
      rule.walkDecls("color:", (decl) => {
        if (decl.value === "red") {
          decl.replaceWith(decl.clone({ value: "rgb(255,0,0)" }));
        }
      });
    });
  };
});
