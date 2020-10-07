module.exports = {
  aliases: {
    _: "node_modules/lodash",
  },
  danglingCommas: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/'/g, '"');
  },
  maxLineLength: 100
}
