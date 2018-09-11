import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';
import Card from "@material-ui/core/Card/Card";
export default class CodeSamples extends React.Component
{
render()
{
    return(<Card style={{marginTop:'10vh',top:'25vh', flex:1, alignContent:'center', justifyContent:'center'}}>
        <SyntaxHighlighter language={'javascript'}>console.log('Hello world!');</SyntaxHighlighter>
    </Card>)
}
}