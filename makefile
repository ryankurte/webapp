# Helper to build manage progressive web app files
# Packages are managed by npm/bower and compressed using webpack

WEBPACK_ARGS= --progress --profile --colors
SERVER="http://localhost:8080"
OUTDIR=static


install:
	@echo "Installing dependencies"
	@npm install

build: clean
	@echo "Building frontend packages"
	@./node_modules/webpack/bin/webpack.js  --config webpack.config.js ${WEBPACK_ARGS}
	@tar -cf webapp.tgz ${OUTDIR}/*

minified: clean
	@echo "Building minified frontend packages"
	@./node_modules/webpack/bin/webpack.js  --config webpack.production.config.js -p ${WEBPACK_ARGS}
	@tar -cf webapp.min.tgz ${OUTDIR}/*

clean:
	rm -rf ${OUTDIR}/*


# Run a local development server
serve:
	@node ./node_modules/node-static/bin/cli.js ${OUTDIR}

# Run tests
test:
	npm test

lighthouse:
	@node node_modules/lighthouse/lighthouse-cli/ ${SERVER}


.PHONY: clean
