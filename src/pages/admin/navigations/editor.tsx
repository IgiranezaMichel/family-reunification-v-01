import { useState, useRef,useEffect } from 'react';
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';
export const Editor = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
    useEffect(
        ()=>{

        },[content]
    )
	return (
		<>
        <JoditEditor
			ref={editor}
			value={content}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {newContent}}
		/>
        <div>
            {HTMLReactParser(content)}
        </div>
        </>
	);
};