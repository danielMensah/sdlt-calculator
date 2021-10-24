import React, { useState } from 'react';
import NumberFormat from "react-number-format";
import SdltCalculate from './business-logic/sdltCalculaor'
import './App.css';

// mui
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {
	const [sdlt, setSdlt] = useState("0");
	const [propValue, setPropValue] = useState("0");
	const [loading, setLoading] = useState(false);
	const [props, setProps] = useState(0);

	const classes = {
		cssLabel: {
			color : 'rgb(61, 190, 300)'
		},
		notchedOutline: {
			borderWidth: '1px',
			borderColor: 'rgb(255,255,255) !important',
			color: 'rgb(255,255,255)',
		},
	}

	const calculateSdlt = (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			const additionalProperty = props > 1
			const ftb = props === 0
			const result = SdltCalculate(ftb, additionalProperty, +propValue.split(",").join(""))

			setSdlt(format(result.toString()))
			setLoading(false)
		}, 1000)
	}

	const format = (value: string): string => {
		return parseFloat(value).toLocaleString('en-US')
	}

	return (
		<div className="App">
			<header className="App-header">
				<FormGroup>
					<label htmlFor="propVal">Property Value</label>
					<p/>
					<NumberFormat
						id="propVal"
						thousandsGroupStyle="thousand"
						value={propValue}
						onFocus={() => propValue === "0" ? setPropValue("") : setPropValue(propValue)}
						onChange={(v) => setPropValue(v.target.value)}
						decimalSeparator="."
						displayType="input"
						type="text"
						thousandSeparator={true}
						allowNegative={false}
					/>

					<br/>
					<InputLabel
						style={{ color: 'white' }} id="demo-simple-select-label">I am</InputLabel>
					<Select
						style={{ color: 'white' }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={props}
						label="Age"
						inputProps={{
							classes: {
								root: classes.notchedOutline,
								focused: classes.notchedOutline,
								notchedOutline: classes.notchedOutline,
							},

						}}
						onChange={(e) => setProps(+e.target.value)}>
						<MenuItem value={0}>a first time buyer</MenuItem>
						<MenuItem value={1}>buying my next home</MenuItem>
						<MenuItem value={2}>buying an additional home</MenuItem>
					</Select>

					<br/>
					<Button variant="contained" type="button" onClick={calculateSdlt}>Submit</Button>
					<br/>
					<h3>{loading ? "Processing..." : `Stamp Duty to pay: £${sdlt}`}</h3>
				</FormGroup>
			</header>
		</div>
	);
}

export default App;
