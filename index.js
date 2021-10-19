const reporter = require('extra-cucumber-html-reporter');

const options = {
	jsonDir: './output',
	reportPath: './output',
	openReportInBrowser: true,
	customData: {
		title: 'Run info',
		data: [
			{label: 'Project', value: 'SDLT Calculator'},
			{label: 'Execution Start Time', value: new Date().toUTCString()},
			{label: 'Execution End Time', value: new Date().toUTCString()}
		]
	}
}

reporter.generate(options)
