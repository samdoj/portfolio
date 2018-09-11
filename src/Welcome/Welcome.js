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
            flexDirection: 'column',
            maxHeight: '80vh',
            width: 'auto',
            flexShrink: '10vw',
            backgroundColor: !this.state.showResume ? 'white' : 'lightsteelblue',
            padding: '.1vw'
        }}
                                                      raised={true}>

            {this.props.showResume ?
                <Paper elevation={-10} style={{backgroundColor: '#ffffffbd'}}><Image
                    src={require('../jdm_resume.png')}
                    height={this.state.width * .61 < 484 ? this.state.height * .8 : this.state.height / 11 * 81 / 11}
                    width={this.state.width * .61 < 484 ? this.state.width * .61 : 484}
                    style={{alignSelf: 'baseline', maxWidth: '618px', marginLeft: '0'}}>
                </Image></Paper> : this.state.embeddedComponentName === 'Github' ? <Github/> :
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
                        </Typography></div>}</Card>)
    }
}