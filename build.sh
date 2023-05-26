set -o errexist

yarn
yarn build
yarn typeorm migration:run -d dist/data-source