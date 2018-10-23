import React, {Component, Fragment} from 'react';
import './App.css';
import {Grid, Paper,} from '@material-ui/core'
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Github from "./Github/Github";
import ExternalWebsite from "./ExternalWebsite/ExternalWebsite";
import Android from "./Android/Android";
import CodeSamples from "./CodeSamples/CodeSamples";
import Welcome from "./Welcome/Welcome";
import Contact from "./Contact/Contact";
import TicTacToe from "./TicTacToe/TicTacToe";
import Hobbies from "./Hobbies/Hobbies";

window.lines=[];

const preservedConsoleLog = console.log;

console.log = function() {

    //we can't just call to `preservedConsoleLog` function,
    //that will throw an error (TypeError: Illegal invocation)
    //because we need the function to be inside the
    //scope of the `console` object so we going to use the
    //`apply` function
    preservedConsoleLog.apply(console, arguments);

    //and lastly, my addition to the `console.log` function
   [...arguments].forEach(arg => window.lines.push({content: arg, style:'normal'}))
     };

//todo: Add Interests to About Me

class App extends Component {

    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleResume = this.toggleResume.bind(this);
        this.embed = this.embed.bind(this);

        this.state = {
            showResume: false,
            mounted: false,
            width: 0,
            height: 0,
            embeddedComponentName:null,
            embeddedComponent: null,
            testComponent: null}
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
        componentMap["Silvermoonrise"]=<ExternalWebsite src={'http://www.silvermoonrise.com'}/>;
        componentMap["Android App"]=<Android/>;
        componentMap["Github"]=<Github/>;
        componentMap["CodeSamples"]=<CodeSamples/>;
        componentMap["Contact"]=<Contact/>
        componentMap["Tic-Tac-Toe"]=<TicTacToe/>
        componentMap["Hobbies"]=<Hobbies/>

        this.setState({embeddedComponentName: componentName, embeddedComponent: componentMap[componentName]})
    }
    shouldComponentUpdate(newProps, newState) {
        const {width, height} = this.state;
        const {newWidth, newHeight} = this.state;
        if (newState.mounted !== this.state.mounted) return false;
        if (newState.mounted && !this.state.mounted) return false;
        if (newState.showResume !== this.state.showResume) return true;
        if (width !== newWidth || height !== newHeight) return true;


    }

    render() {
        const {embed, toggleResume} = this;


        return <div className="App" style={{overflow:'visible'}}>
            <link rel="stylesheet" href="index.css"/>
            <Grid container direction={'column'} style={{height:'100vh'}}>
            <Grid item xl={12} xs={12} style={{overflow:'visible'}}>
            <Fragment>
                <Paper style={{
                    width: '100vw !important',
                    backgroundColor: '#0a00fa',
                    position: 'relative'
                }}>
                    <nav style={{
                        flex: 7,
                        flexDirection: 'column',
                        backgroundColor: '#0a00fa',
                        position: 'absolute',
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
                                                               disabled={true}
                                                               icon={'subject'}
                            />
                            </Paper>
                        </div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="About me"
                            icon={'person'}
                            items={[{name:'Hobbies'}, {name:'Contact me', func:()=>embed('Contact')}]}
                            
                        /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Projects"
                            icon={'code'}
                            
                            items={[{name:'Github', func: ()=>embed('Github')}, {name:'Website', func:()=>embed('Silvermoonrise')}, {name:'Android App', func:()=>window.open('https://play.google.com/store/apps/details?id=com.mim',"_blank") }, {name: 'Code samples', func: ()=>embed("CodeSamples")}]}
                        /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Games"
                            items={[{name:'Tic-tac-toe', func: ()=> embed('Tic-Tac-Toe')},{name: 'Battleship 3D', disabled:true}, {name:'Serverless',disabled:true}]}
                            
                            icon={'gamepad'}/></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Options"
                            disabled={true}
                            
                            icon={'settings'}/></Paper></div>


                    </nav>
                </Paper>


            </Fragment></Grid>
            </Grid>
                <div>

                <div>
                    <Grid className={'main-container'} container justify='center' alignItems={'center'}
                         >
                        {this.state.embeddedComponent ? this.state.embeddedComponent
                            : this.state.testComponent ? this.state.testComponent :
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
            </div>
        </div>;
    }
}

export default App;
