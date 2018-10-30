import React from 'react';

class CardForm extends React.Component{
    componentDidMount(){
        
    }

    render(){
        console.log(this.props);
        // creating a link from name
        const link = `https://repl.it/@polevoyd/${this.props.cardToShow.split(' ').join('')}?lite=true`;
        const embeddedCodeEl = <iframe height="70%" width="100%" src={link} scrolling="no" frameborder="no" allowtransparency="yes" allowfullscreen="yes" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
        
        </iframe>;
 
        return(
            <div className="card-edit-form">
                <div className="card-edit-form-header">
                    <h4>{this.props.cardToShow}</h4>
                    <div className="button delete"></div>
                    <div className="button edit"></div>
                    <div className="button close"></div>
                </div>
                {embeddedCodeEl}
            </div>
        );
    }
}

export default CardForm;
