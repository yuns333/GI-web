import React from 'react';
import ReactMarkdown from 'react-markdown'
import input from './GI-Readme.md'



class GiReadme extends React.Component{
    render(){
        return(
            <ReactMarkdown source={input}/>
         )
    }
}

export default GiReadme;