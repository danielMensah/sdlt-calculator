import React, { useState } from 'react';
import NumberFormat from "react-number-format";
import SdltCalculate from './business-logic/sdltCalculaor'
import './App.css';

function App() {
	const [sdlt, setSdlt] = useState("0");
	const [propValue, setPropValue] = useState("0");
	const [ftb, setFtb] = useState(false);
	const [loading, setLoading] = useState(false);
	const [props, setProps] = useState("0");

	const calculateSdlt = (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			const hasMultiProps = +props > 1
			const result = SdltCalculate(ftb, hasMultiProps, +propValue.split(",").join(""))

			setSdlt(format(result.toString()))
			setLoading(false)
		}, 1000)
	}

	const format = (value: string): string => {
		return parseFloat(value).toLocaleString('en-US', { useGrouping: true })
	}

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={calculateSdlt}>
					<label htmlFor="propVal">Property Value</label>
					<p/>
					<NumberFormat
						id="propVal"
						thousandsGroupStyle="thousand"
						value={propValue}
						onFocus={(e) => {
							if (propValue === "0") {
								setPropValue("")
							}
						}}
						onChange={(v) => setPropValue(v.target.value)}
						decimalSeparator="."
						displayType="input"
						type="text"
						thousandSeparator={true}
						allowNegative={false}
					/>

					<p>Are you a first time buyer?</p>
					<label htmlFor="ftb">Yes</label>
					<input id="ftb" type="radio" value="true" checked={ftb} onClick={() => setFtb(true)}/>

					<label htmlFor="nftb">No</label>
					<input id="nftb" type="radio" value="false" checked={!ftb} onClick={() => setFtb(false)}/>

					{
						!ftb && <p>
							How many property do you own?
							<br/>
							<select value={props} onChange={(e) => setProps(e.target.value)}>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="1+">1+</option>
							</select>
						</p>
					}

					<br/>
					<h3>{loading ? "Processing..." : `Stamp Duty to pay: £${sdlt}`}</h3>
					<br/>
					<input type="submit" value="Submit"/>
				</form>
			</header>
		</div>
	);
}

export default App;
