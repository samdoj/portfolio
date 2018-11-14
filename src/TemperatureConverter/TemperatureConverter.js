import React from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import * as csFuncs from '../codeSampleFunctions';
import Jello from 'react-reveal/Jello';
import FormLabel from "@material-ui/core/FormLabel/FormLabel";


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
    return <div style={{backgroundColor:'white', height:'100vh', width:'100vw'}}>
    <form noValidate autoComplete={'off'}>

            <TextField
            id="form-temp"
            label="Temperature (scale can be included):"
            value={this.state.temp}
            onChange={this.handleChange('temp')}
            fullWidth={true}
            variant={"outlined"}
            />
        <TextField
    id="form-from"
    label="Convert from:"
    fullWidth={true}
    value={this.state.fromScale}
    onChange={this.handleChange('fromScale')}

        />
            <TextField
    id="form-to"
    label="Convert to: "
    value={this.state.toScale}
    fullWidth={true }
    onChange={this.handleChange('toScale')}
            />
                <Button onClick={()=>{
                   try {
                        const t = fromScale ? csFuncs.temperatureConverter(temp, fromScale, toScale) : csFuncs.temperatureConverter(temp,toScale);
                        const text = `${temp} ${fromScale && toScale ?
                            fromScale + ' = ' + t + toScale :
                            toScale ? ' = ' + t + toScale :
                                ' = ' + t + fromScale}`;
                        this.setState({line: text})
                    } catch (e) {
                        alert(e)
                    }
                }}>Convert</Button>
            <FormLabel> <Jello ssrFadein ={true}><h4>{this.state.line}</h4></Jello></FormLabel>
    </form></div>
}

}