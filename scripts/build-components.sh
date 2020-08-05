rm -rf dist
mkdir dist

# Babel CLI to compile JSX
# Reference: https://babeljs.io/docs/en/babel-cli
# --source-maps inline
babel src/components -d dist --ignore "./**/*.spec.js","./**/*.test.js","./**/*.story.js","./**/*.stories.js"
