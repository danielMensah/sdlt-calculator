ENV := $(PWD)/.env
include $(ENV)

test.cucumber:
	npx nyc cucumber-js -f json:./output/results.json

test.report: test.cucumber
	node index.js

test: test.cucumber test.report

build: test
	yarn build

deploy.react: build
	aws s3 sync build $(S3_BUCKET_UI)

deploy.report:
	aws s3 sync output $(S3_BUCKET_REPORT)

deploy: deploy.react deploy.report
