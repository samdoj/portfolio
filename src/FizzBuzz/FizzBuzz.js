import React from 'react';
import {fizzBuzz} from '../codeSampleFunctions'
import Console from "../Console/Console";



export default class FizzBuzz extends React.Component
{
    constructor(props)
    {

        super(props)
     }
    componentWillUnmount()
    {
        window.lines=undefined;
    }

    render ()
    {
        const {lines}=window;

fizzBuzz()
        return(

            <div style={this.props.style ? this.props.style : {width:'100vw', height:'100vh', backgroundColor:'white'}}>
                <Console lines={lines}/>
            </div>
        )
    }
}