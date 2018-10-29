import React from 'react'
import Grid from "@material-ui/core/Grid/Grid";
import CodeCard from "../CodeCard/CodeCard";
import Typography from "@material-ui/core/Typography/Typography";
import TemperatureConverter from "../TemperatureConverter/TemperatureConverter";
import FizzBuzz from "../FizzBuzz/FizzBuzz";
import * as codeFunctions from '../codeSampleFunctions'
import * as codeText from '../codeSampleTexts'
import QuickSort from "../QuickSort/QuickSort";
import BinarySearch from "../BinarySearch/BinarySearch";
import Card from "@material-ui/core/Card/Card";

export default class CodeSamples extends React.Component {

constructor(props)
{
    super(props)
    this.state={width:window.innerWidth}
    this.updateWindowDimensions=this.updateWindowDimensions.bind(this)
}

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        return (
            <div style={{position:'absolute',height:'100vh',width:this.state.width>600 ? '100vw' : '80vw', overflow:'scroll', top:'15vh',left:this.state.width>600?0:'10vw', alignContent:'center', alignItems:'center'}}>
                <Typography variant={'headline'}>Text output from these functions will display both in a card and the
                    browser console if you have it open.</Typography>
                <Grid container={true}
                      spacing={8}
                      justify={this.state.width > 600 ? 'center' : "space-around"}
                      >

                    <Grid item sm={6} lg={4} xl={3}><CodeCard func={codeFunctions.temperatureConverter}
                                                              code={codeText.temperatureConverter}
                                                               title='Temperature Converter'
                                                               noRun={true}
                                                               component={() => <TemperatureConverter/>}/></Grid>
                    <Grid item sm={6} lg={4} xl={3}><CodeCard func={codeFunctions.fizzBuzz} component={() => <FizzBuzz/>}
                                                              title='FizzBuzz'/> code={codeText.fizzBuzz}</Grid>
                    <Grid item sm={6} lg={4} xl={3}><CodeCard func={codeFunctions.consumeRestService}
                                                               title={'Cat pictures from REST'}/></Grid>
                    <Grid sm={6} item lg={4} xl={3}><CodeCard func={codeFunctions.quickSort} code={codeText.quickSort} title="Quick Sort"
                                                              component={() => <QuickSort/>}/></Grid>
                    <Grid sm={6} item lg={4} xl={3}><CodeCard func={codeFunctions.binarySearch} code = {codeText.binarySearch} title="Binary Search"

                                                              component={() => <BinarySearch/>} noRun={true}/></Grid>
                    <Grid item sm={6} item lg={4} xl={3}><Card style={{minHeight:'25vh', width:this.state.width < 600 ? '80vw' : null,alignItems:'center', display:'flex', justifyContent:'center'}}><a href='mailto:joedmasonsd%40gmail.com?subject=Code%20sample%20suggestion'>Suggest a code sample</a></Card></Grid>
                </Grid>

            </div>
        )


    }
}