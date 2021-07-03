import React, { useState } from 'react';
import InputText from './components/InputText/InputText';
import MaxFrequency from './components/MaxFrequency/MaxFrequency';
import MaxFrequencyForWord from './components/FrequencyForWord/MaxFrequencyForWord';
import FrequencyForNWord from './components/FrequencyForNWord/FrequencyForNWord';

import './App.css';

interface wordLib {
	inputText: string;
	searchWord: string;
	maxFrequency: number;
	getMaxKey: string;
	numWord: number;
}

const App: React.FC = () => {
	// We gonna need state
	let [inputString, setString] = useState<wordLib>({ inputText: '', searchWord: '', maxFrequency: 0, getMaxKey: 'Test', numWord: NaN });

	const stringAddHandler = (inputText: string, searchWord: string, maxFrequency: number, getMaxKey: string, numWord: number) => {
		setString(
			(inputString = {
				inputText: inputText,
				searchWord: searchWord,
				maxFrequency: maxFrequency,
				getMaxKey: getMaxKey,
				numWord: numWord,
			}),
		);
	};

	return (
		<div className="appContainer">
			<h1 data-testid="CodingChallenge">
				<span className="orange">Ordina</span> Coding Challenge
			</h1>
			<InputText onAddUserInput={stringAddHandler} />
			<MaxFrequency stringObj={inputString} />
			<MaxFrequencyForWord stringObj={inputString} />
			<FrequencyForNWord stringObj={inputString} />
		</div>
	);
};

export default App;
