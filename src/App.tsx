import React, { useState } from 'react';
import SdltCalculate from './business-logic/sdltCalculaor'
import './App.css';

function App() {
	const [sdlt, setSdlt] = useState(0);
	const [propValue, setPropValue] = useState(0);
	const [ftb, setFtb] = useState(false);
	const [props, setProps] = useState("0");

	const calculateSdlt = (e: React.FormEvent) => {
		e.preventDefault()
		const hasMultiProps = +props > 1
		const result = SdltCalculate(ftb, hasMultiProps, propValue)
		setSdlt(result)
	}

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={calculateSdlt}>
					<label htmlFor="propVal">Property Value</label>
					<p/>
					<input id="propVal" type="number" onChange={(v) => setPropValue(+v.target.value)}/>


					<p>Are you a first time buyer?</p>
					<label htmlFor="ftb">Yes</label>
					<input id="ftb" type="radio" value="true" checked={ftb} onClick={() => setFtb(true)}/>

					<label htmlFor="nftb">No</label>
					<input id="nftb" type="radio" value="false" checked={!ftb} onClick={() => setFtb(false)}/>

					<p>
						How many property do you own?
						<select value={props} onChange={(e) => setProps(e.target.value)}>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="1+">1+</option>
						</select>
					</p>

					<br/>
					<h3>Stamp Duty to pay: £{sdlt}</h3>
					<br/>
					<input type="submit" value="Submit"/>
				</form>
			</header>
		</div>
	);
}

export default App;
