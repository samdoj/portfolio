import React from "react";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import ModalDisplay from "../Modal/ModalDisplay"
export default class CodeCard extends React.Component{
    componentDidMount()
    {
        this.setState({isMounted:true})
    }
    // shouldComponentUpdate(newP, newS)
    // {
    //     return !!this.state.mounted;
    //
    // }
    constructor(props)
    {
        super(props);
        this.state={expanded:false, running:false, isMounted:false, showModal:false}
    }

    toggleModal(state)
    {
        this.setState({showModal:state, expanded:state});
        if(window.interval) clearInterval(window.interval)
    }

    render()
    {
        const height = this.state.expanded ? '100vh !important' : '25vh';
        const width = this.state.expanded ? '100vw !important' : '100%';
        const left = this.state.expanded ? '0' : 'inherit';
        const top = this.state.expanded ? '0' : 'inherit';
        const position = this.state.expanded ? 'absolute' : 'inherit';
        const zIndex = this.state.expanded ? 100000 : 'inherit';
        const overflow = this.state.expanded ? 'visible' : 'scroll';
        const maxWidth = this.state.expanded ? '50vw' : '50%';
        const {title, func, code} = this.props;

        return( this.state.showModal ? <ModalDisplay func={()=>func.call()} close={()=>this.toggleModal(false)} component={this.props.component ? this.props.component : undefined}/>: <Card className={'code-card'} style={{ maxWidth:'100vw', width, height, left, top, position, zIndex, overflow,}}>
            <CardHeader title={title}/>
            <CardActions style={{maxWidth:'100vw', height:'100px', overflow:'hidden'}}>
                <Button id='expand' onClick={()=>{
                const {expanded}=this.state;
                const buffer = !expanded;
                this.setState({expanded:buffer})}}
                     style={{display:'inline-flex', width:'50%', maxWidth, overflowX:'hidden', minHeight:'10%'}}>{this.state.expanded ? 'Shrink' : 'Expand'}</Button>
                <Button onClick={func  ? ()=>{this.toggleModal(true) ; func.call()} : ()=>console.warn('No function bound to run.')} style={{display:'inline-flex', width:'50%', maxWidth}}>Run</Button>
            </CardActions>
            <SyntaxHighlighter language={'javascript'}  wrapLines={true} customStyle={{overflowX:'visible', overflowWrap:'normal'}}>
                {code ? code :
                    func.toString().substring(0, func.toString().length-2)}</SyntaxHighlighter>
        </Card>)
    }

}