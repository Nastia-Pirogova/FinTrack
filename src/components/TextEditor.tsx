import ReactQuill from 'react-quill';

function TextEditor({value, onChange}) {
    return (
        <>
            <ReactQuill theme="snow" value={value} onChange={onChange}
            />
        </>
    )
}


export default TextEditor