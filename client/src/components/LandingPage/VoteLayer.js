import React, { Component } from 'react';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios';
import Pitch from "../PitchDisplay/Pitch";

class VoteLayer extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        axios.get('/api/pitch/all')
            .then(res => {
                console.log(res);
                this.setState({
                    pitches: res.data
                }, console.log(this.state.pitches))
            })
    }

    render(){
        let pitches;
        if(this.state.pitches !== undefined){
            pitches = this.state.pitches.map(pitch => {
                if(pitch.pitch.entityMap === undefined){
                    const newPitch = JSON.parse(pitch.pitch);
                    newPitch.entityMap = [];
                    return <Pitch author={'Yannick Mijsters'} pitch={stateToHTML(convertFromRaw(newPitch))} />
                }
                return <Pitch author={'Yannick Mijsters'} pitch={stateToHTML(convertFromRaw(JSON.parse(pitch.pitch)))}/>;
            })
        }
        return(
            <div className={"w3-container w3-padding-64 w3-light-grey"} style={{padding: "0 100px"}}>
                <h1 className={'w3-center'}>Submissions</h1>
                <div className={'w3-half'} style={{padding: '40px 50px'}}>
                    <h3 className={'w3-center'}>Best</h3>
                    {pitches}
                </div>
                <div className={'w3-half'} style={{padding: '40px 80px'}}>
                    <h3 className={'w3-center'}>New</h3>
                    {pitches}
                </div>
            </div>
        )
    }
}
export default VoteLayer;