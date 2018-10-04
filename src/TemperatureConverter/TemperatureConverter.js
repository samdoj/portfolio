import React from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import * as csFuncs from '../codeSampleFunctions';
import Typography from "@material-ui/core/Typography/Typography";
import Jello from 'react-reveal/Jello';


export default class TemperatureConverter extends React.Component{

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    constructor()
{
    super();
    this.state = {temp:'', toScale:'', fromScale:'', line:''}
}

render ()
{
    const {temp, toScale, fromScale} = this.state;
    return <div style={{width: '100vw', height: '90vh', flex: 10, display: 'flex', flexDirection:'column', background: 'white'}}>
        <Grid container={true}>
        <Grid item xs={12}>
            <TextField
            id="filled-name"
            label="Temperature (scale can be included):"
            value={this.state.temp}
            onChange={this.handleChange('temp')}
            margin="normal"
            variant="filled"
            style={{flex:1, display:'flex',margin:'1vmax'}}
        />
        </Grid>
            <Grid item xs={12}>
        <TextField
    id="filled-name"
    label="Convert from:"
    value={this.state.fromScale}
    onChange={this.handleChange('fromScale')}
    margin="normal"
    variant="filled"

    style={{flex:1, display:'flex', margin:'1vmax'}}
        />
            </Grid>
        <Grid item xs={12}>
            <TextField
    id="filled-name"
    label="Convert to: "
    value={this.state.toScale}
    onChange={this.handleChange('toScale')}
    margin="normal"
    variant="filled"

    style={{flex:1, display:'flex',margin:'1vmax'}}
            /></Grid>
            <Grid item xs={6}>
                <Button onClick={()=>{
                    window.lines=[];

                    try {
                        const t = fromScale ? csFuncs.temperatureConverter(temp, fromScale, toScale) : csFuncs.temperatureConverter(temp,toScale);
                        const text = `${temp} ${fromScale && toScale ?
                            fromScale + ' = ' + t + toScale :
                            toScale ? ' = ' + t + toScale :
                                ' = ' + t + fromScale}`
                        this.setState({line: text})
                    } catch (e) {
                        alert(e)
                    }
                }}>Convert</Button>
            </Grid>
            <Grid item xs={6}> <Jello ssrFadein ={true}><h4>{this.state.line}</h4></Jello></Grid>
        </Grid>
    </div>
}

}