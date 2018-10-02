import React from 'react'

export default class Android extends React.Component
{
    componentDidMount()
    {
        fetch({url:"https://play.google.com/store/apps/details?id=com.mim",method:'get', mode:'no-cors'}).then((response)=>
        {
            alert(JSON.stringify(response));
            response.html.then(()=>{document.getElementById('holder').innerHTML=response;
            })
        }).catch((e)=>alert(e.message))
    }

    render() {
        return (
            <div id={"holder"}>

            </div>
        );
    }
}