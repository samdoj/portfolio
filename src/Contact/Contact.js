import React from 'react'
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";

export default class Contact extends React.Component
{
    render()
    {
        return(   <Card style={{transform:'translateY(-70vh)'}}> <div>
            <Typography
                variant='display2'
                align={'center'}
                style={{color: 'goldenrod', backgroundColor: '#5717FF', margin: '1vw'}}>
                Joe D. Mason
            </Typography>
            <Typography variant='body2' style={{margin: '2vw'}}>
                <div><b>Phone:</b> <a href={'tel:14039667457'}>(403) 966-7457</a></div>
                <div><b>Email:</b> <a href={'mailto:joedmasonsd%40gmail.com?subject=I\'m%20contacting%20you%20about%20your%20website.&body=Hi%20Joe%2C%0A%0AI\'m%20interested%20in%20scheduling%20an%20interview%20or%20talking%20about%20my%20project%20needs.%20%20'}>joedmasonsd@gmail.com</a></div>
            </Typography></div></Card>)
    }
}