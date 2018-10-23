import React from 'react';
import {quickSort} from '../codeSampleFunctions'
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";


export default class QuickSort extends React.Component
{
    constructor(props)
    {

        super(props);
        this.state={reset:null}
    }
    componentWillUnmount()
    {
        window.lines=[];
    }

    componentDidUpdate(p,p2,s)
    {
        window.lines=[];
        alert('Reset')
    }


    render ()
    {
        window.lines=[];
        quickSort();
        const {lines}=window;
        const out = lines.map(line=><div>{line.content}</div>);
        return(

            <div style={this.props.style ? this.props.style : {width:'100vw', height:'100vh', backgroundColor:'white', overflow:'scroll'}}>
                <Grid container>
                    <Grid item xs={12}>
                        {out}
                    </Grid>
                    <Grid><Button onClick={()=>{this.forceUpdate()}}>Reset</Button></Grid>
                    </Grid>
            </div>
        )
    }
}