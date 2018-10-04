import React from 'react'

export default class Console extends  React.Component
{

    constructor(props)
    {
        super(props)

        const styles =
            {
                normal: {fontSize:'2em', color: 'black', width: '100%'},
                warning: {fontSize:'2em', color: 'yellow'},
                error: {fontSize:'2em', color: 'red'}
            }

        this.state={lines:props.lines ? props.lines.map(line=><div key={line.content} style={styles[line.style]}>{line.content}</div>) : null}

    }
    render()
    {
            const {lines} =this.state;
        return(
            <div style={this.props.style ? this.props.style : {width:'100%', height:'100%', backgroundColor:'white'}}>
                {lines}
            </div>
        )
    }
}