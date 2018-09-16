import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
export default class CodeSamples extends React.Component
{
    temperatureConverter(temperature, from, to)
    {
        //You can pass either a number,
        // the temperature scale as a single character and the temperature scale to convert to
        //or you can call like this: temperatureConverter("32F","C"), which returns 0.
        // You can even type out the scale if you're so inclined!  That's why we have all the regexes.

        const tempAndScale = new RegExp(/^\-{0,1}\d+(.\d+){0,1}[F,C,K, FAHRENHEIT,CELSIUS,KELVIN]+$/)
        const tempOnly =  new RegExp(/^\-{0,1}\d+(.\d+){0,1}$/)
        const scaleOnly = new RegExp(/^[F,C,K, FAHRENHEIT,CELCIUS,KELVIN]$/)
        const findScale = new RegExp(/[F,C,K, FAHRENHEIT,CELCIUS,KELVIN]/)
        const findTemp = new RegExp(/-{0,1}\d+(.\d+){0,1}/)
        const indexer = ['F','C','K','FAHRENHEIT','CELSIUS','KELVIN']

        //All our arrow functions.
        const fToC = (f)=> (f-32)*5/9;
        const fToK = (f)=>fToC(f)-273;
        const cToF = (c)=>9/5*c+32;
        const cToK = (c)=>c-273;
        const kToC = (k)=>k+273;
        const kToF = (k)=>cToF(k+273);

        let index;

        //Make sure we only throw the error we want to throw.  Let's consider them all strings for now.
        temperature=temperature.toString().toUpperCase();
        from=from.toString().toUpperCase();
        to=to.toString().toUpperCase();

        //Throw any errors.
        if(!tempAndScale.match(temperature) && !tempOnly.match(temperature)
        || (tempOnly.match(temperature) && !(scaleOnly.match(to) && scaleOnly.match(from))))
            throw new Error("You must pass a temperature in the form of a number," +
                " or include the scale, but nothing else.  If you pass just a number," +
                " you must pass to and from paramaters that contain just the scale.")
        if (!from) throw new Error('There from parameter is always needed, but it is absent.');

            if (to === from) return temperature; //We don't need to change anything.

            if (!to)
        {
            to = from;
            from = findScale.match(temperature)[0];
            temperature=findTemp.match(temperature)[0];
        }

            const toIndex = (indexer.indexOf(to)+1) % 3; //It's certain to be here, so we don't need to look for falsiness.
            const fromIndex = (indexer.indexOf(from)+1) % 3; //Same with this one.  The % 3 is so we can use a switch statement.
            switch (fromIndex) {
                case 0 : //Kelvin
                {
                    let t;
                    if (toIndex===1)
                    {
                        t = fToC(temperature);
                        }
                    else
                    {
                        t = fToK(temperature);
                       }
                       console.log(t)
                    return t;
                }
                break;
                case 1 : //Celsius
                {
                    let t;
                    if (toIndex===0)
                    {
                        t = cToK(temperature);
                    }
                    else
                    {
                        t = cToF(temperature);
                    }
                    console.log(t);
                    return(t)

                }
                    break;

                case 2 : //Fahrenheit
                {
                    let t;
                    if (toIndex===0)
                    {
                        t = fToK(temperature);
                    }
                    else
                    {
                        t = fToC(temperature);
                    }
                    console.log(t);
                    return(t)

                }
                    break;

            }


    }

render()
{
    return(<Grid container style={
        {}
    }>
        <Grid item
        >
        <Card style={{marginTop:'.5vmax', width:'30vw', display:'grid', height:'30vh'}}>
        <SyntaxHighlighter language={'javascript'}>console.log('Hello world!');</SyntaxHighlighter>
    </Card>
        </Grid>
        <Grid item>
        <Card style={{margin:'.5vmax',top:'45vh', width:'30vw', display:'grid',gridRow:'2/1', height:'30vh'}}>
            <SyntaxHighlighter language={'javascript'}>{this.temperatureConverter.toSource()}</SyntaxHighlighter>
        </Card>
        </Grid>
    </Grid>)


}
}