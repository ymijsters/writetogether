import React, {Component} from 'react'

class Pitch extends Component{
    render(){
        return(
            <div style={{padding: '30px 0'}}>
                <div dangerouslySetInnerHTML={{ __html:this.props.pitch }} />
                <i>{this.props.author}</i>
            </div>
        )
    }
}
export default Pitch