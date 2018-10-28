import React, { Component } from 'react';
import PitchLayer from "./PitchLayer";
import HeroLayer from "./HeroLayer";
import VoteLayer from "./VoteLayer";
import Modal from "./Modal";

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            show: false
        };
    }
    onModal = () => {
        this.setState({
            show: true
        });
    };
    render(){
        return(
            <div>
                <Modal show={this.state.show}/>
                <HeroLayer />
                <PitchLayer onModal={this.onModal}/>
                <VoteLayer/>
            </div>
        )
    }
}
export default Index