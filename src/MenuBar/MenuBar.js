import React, {Fragment} from 'react'
import {Paper} from "@material-ui/core";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
export default class MenuBar extends React.Component

    //No longer in use.  Used to make reusable after stable build

{

    render()
    {
        const {boundFuncs} = this.props;

        console.dir('boundFuncs: ', boundFuncs);
        console.log(boundFuncs['embed'].toSource());
        return( <Paper style={{
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
                                      func={() => ['toggleResume', 'false']}
                                      boundFuncs = {boundFuncs}

                        /></Paper></div>
                    <div className={'menu'} style={{display: 'inline-flex'}}>
                        <Paper elevation={1}><DropdownMenu title="Resume"
                                                           noDropdown
                                                           func={() => ['toggleResume','true']}
                                                           icon={'list'}
                                                           boundFuncs = {boundFuncs}
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
                        items={[{name:'Hobbies'}, {name:'Interests', func:()=>['console.log','interests']}, {name:'Soft skills', func:console.log('Soft skills')}]}
                        boundFuncs = {boundFuncs}
                    /></Paper></div>
                    <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                        title="Projects"
                        icon={'code'}
                        boundFuncs = {boundFuncs}
                        items={[{name:'Github', func:["embed", 'Github']}, {name:'Website', func:['embed','Silvermoonrise']}, {name:'Android App', func:["window.open",'"https://play.google.com/store/apps/details?id=com.mim","_blank"'] }, {name: 'Code samples', func: ["embed","Samples"]}]}
                    /></Paper></div>
                    <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                        title="Games"
                        items={[{name:'Tic-tac-toe'},{name: 'Battleship 3D'}, {name:'Serverless'}]}
                        boundFuncs = {boundFuncs}
                        icon={'gamepad'}/></Paper></div>
                    <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                        title="Options"
                        boundFuncs = {boundFuncs}
                        icon={'settings'}/></Paper></div>


                </nav>
            </Paper>

        )
    }

}