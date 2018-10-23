import React from 'react';
import {binarySearch} from '../codeSampleFunctions'
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";


export default class BinarySearch extends React.Component
{
    constructor(props)
    {

        super(props);
        let arr = []
        for (let i = 0; i < 100 ; i++) {
            let val = Math.trunc(Math.random()*199)+1
            while(arr.indexOf(val)+1)
                val = Math.trunc(Math.random()*199)+1
            arr[i] = val
        }
        arr=arr.sort((a,b)=>parseInt(a)-parseInt(b));
        this.state={reset:null, num:null, arr}
    }

    randomArray()
    {
        let arr = []
        for (let i = 0; i < 100 ; i++) {
            let val = Math.trunc(Math.random()*199)+1
            while(arr.indexOf(val)+1)
                val = Math.trunc(Math.random()*199)+1
            arr[i] = val
        }
        arr=arr.sort((a,b)=>parseInt(a)-parseInt(b));
        return arr
    }
    componentWillUnmount()
    {
        window.lines=[];
    }

    componentDidUpdate(p,p2,s)
    {
        window.lines=[];
    }

    handleChange = () => event => {
        //alert('hi')
        this.setState({
            num: parseInt(event.target.value),
        });
    };
    render ()
    {
        const {arr} = this.state;
        return(

            <div style={this.props.style ? this.props.style : {width:'100vw', height:'100vh', backgroundColor:'white', overflow:'scroll'}}>
                <Grid container>
                    <Grid item xs={12}>{JSON.stringify(arr)}</Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="filled-name"
                            label="Search for:"
                            value={this.state.fromScale}
                            onChange={this.handleChange()}
                            margin="normal"
                            variant="filled"

                            style={{flex:1, display:'flex', margin:'1vmax'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.num ? 'index is: '+binarySearch(arr,this.state.num) : null}
                    </Grid>
                    <Grid><Button onClick={()=>{this.setState({arr:this.randomArray()})}}>Reset</Button></Grid>
                    </Grid>
            </div>
        )
    }
}