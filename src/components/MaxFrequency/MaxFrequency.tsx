import React from 'react';

interface MaxFrequencyProps {
	stringObj: {
		inputText: string;
		maxFrequency: number;
		getMaxKey: string;
	};
}

const MaxFrequency: React.FC<MaxFrequencyProps> = props => {
	if (props.stringObj.inputText === '') {
		return (
			<div className="card">
				<h2>Max Frequency</h2>
				<span>Input your string to see information about the string</span>
			</div>
		);
	} else {
		return (
			<div className="card">
				<h2>Max Frequency</h2>
				<div>
					<span className="intro">String we've searched:</span> {props.stringObj.inputText}
				</div>
				<div>
					<span className="intro">Word That occurs the most:</span> {props.stringObj.getMaxKey}
				</div>
				<div>
					<span className="intro">Occurrances:</span> {props.stringObj.maxFrequency} times
				</div>
			</div>
		);
	}
};

export default MaxFrequency;
