module.exports = {
  extends: ['airbnb-base', 'airbnb-base/legacy'],
  plugins: ['babel', 'import'],

  /* Production rules */
  rules: {
    /* Visual */
    "indent": [1, 4],
    "max-len": 0,
    "padded-blocks": 0,

    /* Types */
    /* Referenes */
    "no-unused-expressions": 0,

    /* Strings */
    /* Arrays */
    /* Objects */

    /* Functions */
    "space-before-function-paren": 0,
    "no-param-reassign": 0,

    /* Arrow functions */
    "arrow-body-style": 0,
    "no-return-assign": 0,

    /* Classes & Constructors */
    /* Modules */
    /*  */
    "no-alert": 2,
    "no-console": 2,

    /* Import */
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0
  }
};
