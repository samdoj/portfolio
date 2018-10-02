import React from 'react';
import {Button, Modal} from "@material-ui/core";
import ReactLoading from 'react-loading';

export default class ModalDisplay extends React.Component {
    render() {
        const childComponent = this.props.component ?<this.props.component {...this.props}/> : <div id={'modal'}
                                                                                                     style={{
                                                                                                         background: 'white',
                                                                                                         width: '100%',
                                                                                                         height: '100%',
                                                                                                         minHeight: '80vh'
                                                                                                     }}>
            <div style={{
                height: '100%',
                width: '100%',
                margin: 'auto',
                backgroundColor:'white',
                }}><div style={{width:'100%',height:'100%'}}>
                <div style={{height:'70vh', display: 'flex',
                    alignContent:'center', alignItems:'center', transform:'translate("48.5%,0")', marginLeft:'48.5%', marginRight:'auto'}}>
                    <ReactLoading className = 'loading'
                type="spokes"
                height={'5%'}
                width={'5%'}
                color={'black'}/></div>
                <div style={{width:'100vw', position:'absolute', left:0, justifySelf:'center', alignSelf:'center', textAlign:'center',}}>Loading from REST service.  This could take awhile.  Please be patient.</div>
            </div>
            </div></div>;
        return (<Modal open={true} onRendered={() => this.props.func.call()}
                       style={{overflow: 'scroll', alignContent: 'center', alignItems: 'center'}}>
            <div><Button onClick={() => this.props.close.call()} style={{backgroundColor: 'white'}}>Close</Button>
                {childComponent}
            </div>
        </Modal>)
    }
}