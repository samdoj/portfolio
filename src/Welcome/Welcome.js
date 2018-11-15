import React from 'react'
import Card from "@material-ui/core/Card/Card";
import {Grid, Paper} from "@material-ui/core";
import Image from "react-image-resizer";
import Github from "../Github/Github";
import Typography from "@material-ui/core/Typography/Typography";

export default class Welcome extends React.Component {
    render()
    {
        return(                                 <Card style={{
            alignSelf: 'center', display: 'flex',
            justifySelf:'center',
            flexDirection: 'column',
            maxHeight: '80vh',
            width: '100%',
            transform:'translateY(-70vh)',
            flexShrink: '10vw',
            backgroundColor: !this.props.showResume ? 'white' : 'lightsteelblue',
            padding: '.1vw'
        }}
                                                      raised={true}>

            {this.props.showResume ?
                <Paper elevation={-10} style={{backgroundColor: '#ffffffbd', alignSelf: 'center', justifySelf:'center', }}><Image
                    src={require('../jdm_resume.png')}
                    height={this.props.width * .61 < 484 ? this.props.height * .8 : this.props.height / 11 * 81 / 11}
                    width={this.props.width * .61 < 484 ? this.props.width * .61 : 484}
                    style={{maxWidth: '618px', marginLeft: '0',overflow:'scroll', position:'absolute'}}>
                </Image></Paper> : this.props.embeddedComponentName === 'Github' ? <Github/> :
                    <div>
                        <Typography
                            variant='display2'
                            align={'center'}
                            style={{color: 'goldenrod', backgroundColor: '#5717FF', margin: '1vw'}}>
                            Coming Soon
                        </Typography>
                        <Typography variant='body2' style={{margin: '2vw'}}>
                            Thanks for stopping by!  I'm a junior software developer who's passionate about writing<br/>
                            clean, quality, working code.  I've built this website from scatch and without assistance<br/>
                            with the exception of StackOverflow when necessary (read rarely).  I'm still working on <br/>
                            some aspects of it, but it's very near complete.
                        </Typography></div>}</Card>)
    }
}