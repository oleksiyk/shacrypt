all: shacrypt

node_modules: package.json
	@npm install

shacrypt: node_modules src/*

#
# Tests
#
test: shacrypt
	@mocha


#
# Clean up
#

clean: clean-node

clean-node:
	@rm -rf node_modules

.PHONY: all
.PHONY: test

