module.exports = {
  parser: "@babel/eslint-parser",
  extends: [ "optimum-energy", "plugin:react/recommended" ],
  plugins: [ "react" ],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    sourceType: "module"
  },

  rules: {

    // React
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "warn",
    "react/no-access-state-in-setstate": "warn",
    "react/no-array-index-key": "error",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-typos": "warn",
    "react/no-this-in-sfc": "error",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prop-types": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    // JSX
    "react/jsx-boolean-value": "warn",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": [ "warn", "line-aligned" ],
    "react/jsx-curly-spacing": [ "warn", { when: "always", children: true } ],
    "react/jsx-equals-spacing": [ "warn", "never" ],
    "react/jsx-filename-extension": "warn",
    "react/jsx-first-prop-new-line": [ "warn", "multiline" ],
    "react/jsx-indent": [ "warn", 2 ],
    "react/jsx-indent-props": [ "warn", 2 ],
    "react/jsx-key": "warn",
    "react/jsx-no-bind": [ "warn", { ignoreRefs: true, allowArrowFunctions: true } ],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": [ "warn", { allowGlobals: true } ],
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": [
      "warn", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-vars": "warn"
  }
};
