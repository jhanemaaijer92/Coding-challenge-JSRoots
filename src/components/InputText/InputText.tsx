import React, { useRef } from 'react';

import './InputText.css';

// Explicitly state what we want to get
interface onAddUserInput {
	onAddUserInput: (userInput: string, searchWord: string, maxFrequency: number, maxKey: string, numWord: number) => void;
}

const InputText: React.FC<onAddUserInput> = props => {
	//Establish Connection between form
	const inputRef = useRef<HTMLInputElement>(null);
	const inputSearchWord = useRef<HTMLInputElement>(null);
	const nWords = useRef<HTMLInputElement>(null);

	const stringAddHandler = (event: React.FormEvent) => {
		event.preventDefault(); // Make sure nothing fires to server
		let userInput = inputRef.current!.value; // Get users input
		let searchWord = inputSearchWord.current!.value;
		let numWord = parseInt(nWords.current!.value);
		props.onAddUserInput(userInput, searchWord, getFrequency(userInput), getMaxKey(userInput), numWord); //Make it available in App.tsx
	};

	const getFrequency = (userInput: string) => {
		let stringArr = userInput
			.toLowerCase()
			.split(/[^A-Za-z]/)
			.filter(Boolean)
			.sort();

		let frequency: any = {};
		for (let i = 0; i < stringArr.length; i++) {
			if (stringArr[i] in frequency) {
				frequency[stringArr[i]]++;
			} else {
				frequency[stringArr[i]] = 1;
			}
		}

		let maxKey = Object.keys(frequency)[0];
		let maxCount = frequency[maxKey];

		for (const word in frequency) {
			if (frequency[word] > maxCount) {
				//then that becomes the new maximally occurring word
				maxKey = word;
				//and the current max count is that word's value
				maxCount = frequency[word];
			}
		}
		return maxCount;
	};

	const getMaxKey = (userInput: string) => {
		let stringArr = userInput
			.toLowerCase()
			.split(/[^A-Za-z]/)
			.filter(Boolean)
			.sort();

		let frequency: any = {};
		for (let i = 0; i < stringArr.length; i++) {
			if (stringArr[i] in frequency) {
				frequency[stringArr[i]]++;
			} else {
				frequency[stringArr[i]] = 1;
			}
		}

		let maxKey = Object.keys(frequency)[0];
		let maxCount = frequency[maxKey];

		for (const word in frequency) {
			if (frequency[word] > maxCount) {
				//then that becomes the new maximally occurring word
				maxKey = word;
				//and the current max count is that word's value
				maxCount = frequency[word];
			}
		}

		return maxKey;
	};

	return (
		<div data-testid="formContainer" className="form-container">
			<form onSubmit={stringAddHandler}>
				<div className="input-container">
					<label htmlFor="text-input">Insert your text</label>
					<input date-testid='input-string' type="text" id="text-input" ref={inputRef} />
				</div>
				<div className="input-container">
					<label htmlFor="look-for-word">Want to search for a specific Word?</label>
					<input date-testid='input-word' type="text" id="look-for-word" ref={inputSearchWord} />
				</div>

				<div className="input-container">
					<label htmlFor="n-times-word">Return the x most frequent words</label>
					<input date-testid='input-number' type="number" id="n-times-word" ref={nWords} />
				</div>
				<button type="submit">Lets get processing</button>
			</form>
		</div>
	);
};

export default InputText;
