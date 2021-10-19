test.cucumber:
	npx nyc cucumber-js -f json:./output/results.json

test.report: test.cucumber
	node index.js

test: test.cucumber test.report

build: test
	yarn build

deploy.react: build
	aws s3 sync build s3://sdltcalculator

deploy.report:
	aws s3 sync output s3://sdltcalculator-bdd

deploy: deploy.react deploy.report
