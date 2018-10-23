import React from 'react';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Zoom from 'react-thumbnail-zoom';
import Grid from "@material-ui/core/Grid/Grid";


export default class Hobbies extends React.Component {
    render() {
        return (
            <Card style={{width: '90vw', height: '80vh'}} raised={true} className={'push-up hobbies'}>
                <Card raised={true} style={{marginTop:'5vh'}}>
                    <CardHeader title={"Photography"}></CardHeader>
                   <Grid container>
                    <Grid item xs={3}><Zoom>
                        <img src={require('../assets/monkey.jpg')}/>
                    </Zoom></Grid>
                    <Grid item xs={3}><Zoom>
                    <img src={require('../assets/kelowna.jpg')}/>
                    </Zoom></Grid>
                        <Grid item xs={3}><Zoom>
                        <img src={require('../assets/illuminasia.jpg')}/>
                    </Zoom></Grid>
                    <Grid item xs={3}><Zoom>
                    <img src={require('../assets/Montana.jpg')}/>
                    </Zoom></Grid>
                        <Grid item xs={3}><Zoom>
                        <img src={require('../assets/Skytree_10MB.jpg')}/>
                    </Zoom></Grid>
                    <Grid item xs={3}><Zoom>
                        <img src={require('../assets/sunset.jpg')}/>
                    </Zoom></Grid>
                    <Grid item xs={3}><Zoom>
                        <img src={require('../assets/wave.jpg')}/>

                    </Zoom></Grid>
                   </Grid>
                </Card>
                <Card>
                    <CardHeader title={"More coming soon..."}></CardHeader>
                </Card>
            </Card>
            
        );
    }
}