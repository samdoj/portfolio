import React, {Fragment} from 'react'
import {Paper} from "@material-ui/core";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
export default class MenuBar extends React.Component
//todo  Convert all functions into this.functionRunner calls and reate this using Function('name' + args)() syntax
{
    render()
    {
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
                        items={[{name:'Hobbies'}, {name:'Interests', func:()=>console.log('interests')}, {name:'Soft skills', func:console.log('Soft skills')}]}
                    /></Paper></div>
                    <div className={'menu'} style={{display: 'inline-flex'}}><Paper elevation={1}><DropdownMenu
                        title="Projects"
                        icon={'code'}
                        items={[{name:'Github', func:()=>this.functionRunner("embed", 'Github')}, {name:'Website', func:()=>this.embed('Silvermoonrise')}, {name:'Android App', func:()=>window.open("https://play.google.com/store/apps/details?id=com.mim",'_blank') }, {name: 'Code samples', func: ()=>this.embed("Samples")}]}
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

        )
    }

    functionRunner(embedGithub) {
        return undefined;
    }
}