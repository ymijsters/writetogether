import React, { Component } from 'react';

class HeroLayer extends Component{
    render(){
        return(
            <header className="w3-panel w3-opacity w3-center" style={{margin: 0,padding:0, height: '500px', overflow:'hidden'}}>
                <div className={"roboto"} style={{padding: '200px 400px', fontFamily:'Roboto'}}>
                    <h1 className={'w3-xxxlarge'}>Let's write a book together!</h1>
                    <p className={'w3-large'}>On this website creative people team up to write great stories. Everybody is free to submit a significant part of the book and a voting system with various paths will determine the end outcome of the book!</p>
                </div>
            </header>
        )
    }
}
export default HeroLayer;