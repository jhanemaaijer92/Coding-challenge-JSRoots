import React from 'react';

interface MaxFrequencyForWordProps {
	stringObj: {
		inputText: string;
		searchWord: string;
	};
}

const MaxFrequencyForWord: React.FC<MaxFrequencyForWordProps> = props => {
	const CalculateFrequencyForWord = (input: string, searchWord: string) => {
		let words = input
			.toLowerCase()
			.split(/[^A-Za-z]/)
			.filter(Boolean)
			.sort();

		let wordCount = 0;

		//Loop through the array and add 1 to wordcount when word to search for matches
		for (let i = 0; i < words.length; i++) {
			if (words[i] === searchWord.toLowerCase()) {
				wordCount++;
			}
		}

		return wordCount;
	};

	//Check if there is a request for a specific Word or not
	if (props.stringObj.searchWord === '') {
		return (
			<div className="card">
				<h2>Frequency for chosen Word:</h2>
				<span>There is no word applied to search for</span>
			</div>
		);
	} else {
		return (
			<div className="card">
				<h2>Max Frequency for Word: {props.stringObj.searchWord.toLowerCase()}</h2>
				<div>That word is found {CalculateFrequencyForWord(props.stringObj.inputText, props.stringObj.searchWord)} times</div>
			</div>
		);
	}
};

export default MaxFrequencyForWord;
