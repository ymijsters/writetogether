import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Modal from "./Modal";


class PitchLayer extends Component{
    constructor(props){
        super(props);
        this.state={
            editState: EditorState.createEmpty(),
            submitted: false
        }
    }
    onStateChanged = (editState) => {
        this.setState({
            editState
        })
    };
    onSubmit = (event) => {
        event.preventDefault();
        const newPitch = {
            pitch: JSON.stringify(convertToRaw(this.state.editState.getCurrentContent()))
        };
        axios.post(`/api/pitch/`,newPitch)
            .then(res => {
                this.setState({
                    submitted: true
                })
            })
        this.props.onModal();
    };
    render() {
        const editorStyle = {
            border: "1px solid #000",
            height: '200px'
        };
        const wrapperStyle= {
            width: '50%',
            margin: '0 25%'
        };
        const test = (this.state.show ? <div>Show dan</div> : <div>Test123Test</div>);
        return (
            <div style={{color: '#686868'}} className={"w3-container w3-padding-64 w3-greyscale w3-center w3-large roboto"}>
                <div>
                    <h1>Submit your pitch here</h1>
                    <p>Currently, the first round is still going on, here we just pitch ideas for new books and people vote on the best ideas.<br />
                    The creator of the best idea will get credit for his idea once the book is finished.</p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <Editor
                            editorState={this.state.editState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            editorStyle={editorStyle}
                            wrapperStyle={wrapperStyle}
                            onEditorStateChange={this.onStateChanged}
                        />
                    </div>
                    <input type={'submit'}/>
                    {test}
                </form>
            </div>
        )
    }
}
export default PitchLayer;