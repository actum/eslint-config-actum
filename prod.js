module.exports = {
  extends: ['airbnb-base', 'airbnb-base/legacy'],
  plugins: ['babel', 'import'],

  /* Production rules (strict) */
  rules: {
    "no-alert": 2,
    "no-console": 2,

    /* Import */
    "import/no-extraneous-dependencies": 0
  }
}