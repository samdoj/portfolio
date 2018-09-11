import React, {Component, Fragment} from 'react';
import './App.css';
import {Grid, Paper,} from '@material-ui/core'
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Typography from "../node_modules/@material-ui/core/Typography/Typography";
import createMuiTheme from "../node_modules/@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import Card from "../node_modules/@material-ui/core/Card/Card";
import PDFViewer from 'mgr-pdf-viewer-react';
import Image from "react-image-resizer";
import Github from "./Github/Github";
import ExternalWebsite from "./ExternalWebsite/ExternalWebsite";
import Android from "./Android/Android";
import CodeSamples from "./CodeSamples/CodeSamples";
import MenuBar from "./MenuBar/MenuBar";
import Welcome from "./Welcome/Welcome";

class App extends Component {
    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleResume = this.toggleResume.bind(this);
        this.embed = this.embed.bind(this)

        this.state = {
            showResume: false,
            mounted: false,
            width: 0,
            height: 0,
            embeddedComponentName:null,
            embeddedComponent: null,
            testComponent: <CodeSamples/>}
    }

    componentDidMount() {
        this.updateWindowDimensions();
        this.setState({mounted: true});
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    toggleResume(bool) {
        console.log(this.state.showResume);
        if (this.state.mounted) this.setState({showResume: bool, embeddedComponent:false})
    }
    embed(componentName)
    {
        let componentMap = [];
        componentMap["Silvermoonrise"]=<ExternalWebsite src={'http://www.silvermoonrise.com'}/>
        componentMap["Android App"]=<Android/>
        console.log("COMPONENT: "+ componentName)
        this.setState({embeddedComponentName: componentName, embeddedComponent: componentMap[componentName]})
    }
    shouldComponentUpdate(newProps, newState) {
        const {width, height} = this.state;
        const {newWidth, newHeight} = this.state;
        if (newState.mounted !== this.state.mounted) return false;
        if (newState.mounted && !this.state.mounted) return false;
        if (newState.showResume !== this.state.showResume) return true;
        if (width !== newWidth || height !== newHeight) return true;
        //console.dir(this.state)
        console.dir(newState)

    }

    render() {
        const {height, width} = this;
        const theme = createMuiTheme({
            palette: {
                primary: {main: purple[500]}, // Purple and green play nicely together.
                secondary: {main: '#11cb5f'}, // This is just green.A700 as hex.
            },
        });

        return <div className="App">
            <link rel="stylesheet" href="index.css"/>
            <div>

            <Fragment>
                <MenuBar boundFuncs = {[this.embed()]}/>
            </Fragment></div>
            <div>
            <Fragment>



                <div>
                    <Grid container alignContent='center' justify='center' alignItems='center'
                          style={{height: '100vh', overflowY: 'hidden', justifySelf: 'center'}}>
                        {this.state.embeddedComponent ? this.state.embeddedComponent
                            : this.state.testComponent ? this.state.testComponent :
                        <Grid item xl>
                        <Welcome showResume={this.state.showResume}/>

}
                        </Grid>}
                    </Grid>
                    {this.state.embeddedComponent==='Github' ? <Github/> : null}
                </div>}
            </Fragment>
            </div>
        </div>;
    }
}

export default App;
