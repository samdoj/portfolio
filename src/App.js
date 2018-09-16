import React, {Component, Fragment} from 'react';
import './App.css';
import {Grid, Paper,} from '@material-ui/core'
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Typography from "../node_modules/@material-ui/core/Typography/Typography";
import createMuiTheme from "../node_modules/@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import Card from "../node_modules/@material-ui/core/Card/Card";
import Image from "react-image-resizer";
import Github from "./Github/Github";
import ExternalWebsite from "./ExternalWebsite/ExternalWebsite";
import Android from "./Android/Android";
import CodeSamples from "./CodeSamples/CodeSamples";
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
        componentMap["Github"]=<Github/>
        componentMap["CodeSamples"]=<CodeSamples/>
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
        const {embed, toggleResume} = this;
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
                <Paper style={{
                    width: '100vw !important',
                    height: '100vh !important',
                    backgroundColor: '#0a00fa',
                    position: 'relative'
                }}>
                    <nav style={{
                        flex: 7,
                        flexDirection: 'column',
                        backgroundColor: '#0a00fa',
                        position: 'absolute',
                        justifyItems: 'stretch',
                        zIndex: 1100
                    }}>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper>
                            <DropdownMenu title="Home"
                                          icon='home'
                                          func={() => toggleResume(false)}
                                          

                            /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}>
                            <Paper elevation={1}><DropdownMenu title="Resume"
                                                               noDropdown
                                                               func={() => toggleResume(true)}
                                                               icon={'list'}
                                                               
                            />
                            </Paper>
                        </div>
                        <div className={'menu'} style={{display: 'inline-flex'}}>
                            <Paper elevation={1}><DropdownMenu title="Blog"
                                                               icon={'subject'}
                            />
                            </Paper>
                        </div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="About me"
                            icon={'person'}
                            items={[{name:'Hobbies'}, {name:'Interests', func:()=>console.log('interests')}, {name:'Soft skills', func:console.log('Soft skills')}]}
                            
                        /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Projects"
                            icon={'code'}
                            
                            items={[{name:'Github', func: ()=>embed('Github')}, {name:'Website', func:()=>embed('Silvermoonrise')}, {name:'Android App', func:()=>window.open('https://play.google.com/store/apps/details?id=com.mim',"_blank") }, {name: 'Code samples', func: ()=>embed("CodeSamples")}]}
                        /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Games"
                            items={[{name:'Tic-tac-toe'},{name: 'Battleship 3D'}, {name:'Serverless'}]}
                            
                            icon={'gamepad'}/></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Options"
                            
                            icon={'settings'}/></Paper></div>


                    </nav>
                </Paper>


            </Fragment></div>
            <div>
            <Fragment>



                <div>
                    <Grid container alignContent='center' justify='center' alignItems='center'
                          style={{height: '100vh', overflowY: 'hidden', justifySelf: 'center'}}>
                        {this.state.embeddedComponent ? this.state.embeddedComponent
                            : this.state.testComponents ? this.state.testComponent :
                        <Grid item xl>
                            {this.state.embeddedComponent ? this.state.embeddedComponent :
                                <Welcome
                                    showResume={this.state.showResume}
                                    width={this.state.width}
                                    height={this.state.height}
                                    embeddedComponent={this.state.embeddedComponent}/>
                            }

                        </Grid>}
                    </Grid>
                    {this.state.embeddedComponent==='Github' ? <Github/> : null}
                </div>
            </Fragment>
            </div>
        </div>;
    }
}

export default App;
