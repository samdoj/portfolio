import React from 'react';

class ExternalWebsite extends React.Component {
    render() {
        return (
            <iframe src={this.props.src} frameBorder="0" style={{bottom:0, width:'100%', height:'100%'}}/>
        )
    }
}
export default ExternalWebsite
