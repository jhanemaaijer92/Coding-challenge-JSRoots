import React from 'react';

interface FrequencyForNWordProps {
	stringObj: {
		inputText: string;
		numWord: number;
	};
}

const FrequencyForNWord: React.FC<FrequencyForNWordProps> = props => {
	const calculateMostFrequentNWords = (input: string, numWord: number) => {
		let stringArr = input
			.toLowerCase()
			.split(/[^A-Za-z]/)
			.filter(Boolean)
			.sort();

		//Loop through array
		let frequency: any = {};
		for (let i = 0; i < stringArr.length; i++) {
			if (stringArr[i] in frequency) {
				frequency[stringArr[i]]++;
			} else {
				frequency[stringArr[i]] = 1;
			}
		}

		//Make it into a sortable array
		let sortable = [];
		for (let key in frequency) {
			sortable.push([key, frequency[key]]);
		}

		//Slice the array on the requested N entries
		const sortedArray = sortable
			.sort(function (a, b) {
				return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
			})
			.slice(0, numWord);

		return sortedArray;
	};

	if (isNaN(props.stringObj.numWord)) {
		return (
			<div className="card">
				<h2>Fill in the box to show top most frequent words</h2>
			</div>
		);
	} else {
		return (
			<div className="card">
				<h2>Frequency For top {props.stringObj.numWord} most frequent</h2>
				<ul>
					{calculateMostFrequentNWords(props.stringObj.inputText, props.stringObj.numWord).map(item => {
						return (
							<li id={item[0]}>
								{item[0]} with {item[1]} occurences
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
};

export default FrequencyForNWord;
