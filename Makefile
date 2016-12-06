test:
	@npm run test

test-ci:
	npm set progress=false
	@npm run test:ci

.PHONY: test
