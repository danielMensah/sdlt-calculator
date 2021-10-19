const reporter = require('extra-cucumber-html-reporter');

// const options = {
// 	theme: 'bootstrap',
// 	jsonFile: './output/results.json',
// 	output: './output/cucumber_report.html',
// 	reportSuiteAsScenarios: true,
// 	scenarioTimestamp: true,
// 	launchReport: true,
// 	metadata: {
// 		"App Version":"0.3.2",
// 		"Test Environment": "STAGING",
// 		"Browser": "Chrome  54.0.2840.98",
// 		"Platform": "Windows 10",
// 		"Parallel": "Scenarios",
// 		"Executed": "Remote"
// 	}
// };

const options = {
	jsonDir: './output',
	reportPath: './output',
	openReportInBrowser: true,
	metadata:{
		browser: {
			name: 'chrome',
			version: '60'
		},
		device: 'Local test machine',
		platform: {
			name: 'ubuntu',
			version: '16.04'
		}
	},
	customData: {
		title: 'Run info',
		data: [
			{label: 'Project', value: 'SDLT Calculator'},
			{label: 'Execution Start Time', value: new Date().toUTCString()},
			{label: 'Execution End Time', value: new Date().toUTCString()}
		]
	}
}

reporter.generate(options);


//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.

