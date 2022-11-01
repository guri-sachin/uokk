import React,{useState} from 'react'
import copy from "copy-to-clipboard";
import { Heading, Input1, Input2, Container, Button } from './Style'

const Clipboard = () => {
	const [copyText, setCopyText] = useState('');

	const handleCopyText = (e) => {
	setCopyText(e.target.value);
	}
	
	const copyToClipboard = () => {
	copy(copyText);
	alert(`You have copied "${copyText}"`);
	}
	
	return (
	<div>
		<Heading>know you can copy your code on just on click</Heading>
		
		<Container>
		<input
			type="textarea"
			value={copyText}
				onChange={handleCopyText}
				placeholder='Enter the text you want to copy' />
	
		<Button onClick={copyToClipboard}>
			Copy to Clipboard
		</Button>
	
	
		</Container>
	<input type="textarea"></input>
	</div>
	)
}

export default Clipboard;
