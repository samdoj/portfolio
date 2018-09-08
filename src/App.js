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

class App extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleResume = this.toggleResume.bind(this);
        this.state = {showResume: false, mounted: false, width: 0, height: 0}
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
        if (this.state.mounted) this.setState({showResume: bool})
    }

    shouldComponentUpdate(newProps, newState) {
        const {width, height} = this.state;
        const {newWidth, newHeight} = this.state;
        if (newState.mounted !== this.state.mounted) return false;
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
                                          noDropdown
                                          func={() => this.toggleResume(false)}

                            /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}>
                            <Paper elevation={1}><DropdownMenu title="Resume"
                                                               noDropdown
                                                               func={() => this.toggleResume(true)}
                                                               icon={'list'}/>
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
                            items={[{name:'Hobbies'}, {name:'Interests', func:()=>console.log('interests')}, {name:'Soft skills', func:()=>alert('func')}]}
                        /></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Projects"
                            icon={'code'}/></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Games"
                            icon={'gamepad'}/></Paper></div>
                        <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                            title="Options"
                            icon={'settings'}/></Paper></div>


                    </nav>
                </Paper>
                <div>
                </div>
                <div>
                    <Grid container alignContent='center' justify='center' alignItems='center'
                          style={{height: '100vh', overflowY: 'hidden', justifySelf: 'center'}}>
                        <Grid item xl>
                            <Card style={{
                                alignSelf: 'center', display: 'flex',
                                flexDirection: 'column',
                                maxHeight: '80vh',
                                width: 'auto',
                                flexShrink: '10vw',
                                backgroundColor: !this.state.showResume ? 'white' : 'lightsteelblue',
                                padding: '.1vw'
                            }}
                                  raised={true}>

                                {this.state.showResume ?
                                    <Paper elevation={-10} style={{backgroundColor: '#ffffffbd'}}><Image
                                        src={require('./jdm_resume.png')}
                                        height={this.state.width * .61 < 484 ? this.state.height * .8 : this.state.height / 11 * 81 / 11}
                                        width={this.state.width * .61 < 484 ? this.state.width * .61 : 484}
                                        style={{alignSelf: 'baseline', maxWidth: '618px', marginLeft: '0'}}>
                                    </Image></Paper> :
                                    <div>
                                        <Typography
                                            variant='display2'
                                            align={'center'}
                                            style={{color: 'goldenrod', backgroundColor: '#5717FF', margin: '1vw'}}>
                                            Coming Soon
                                        </Typography>
                                        <Typography variant='body2' style={{margin: '2vw'}}>
                                            I'm working hard on this awesome React site to show off my talents.<br/>
                                            Links to my projects are currently working. More content is coming soon.
                                        </Typography></div>}</Card>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        </div>;
    }
}

export default App;
