import React from 'react';

class CardForm extends React.Component{
    render(){
        console.log(this.props);
        // creating a link from name
        const link = `https://repl.it/@polevoyd/${this.props.cardToShow.split(' ').join('')}?lite=true`;
        const embeddedCodeEl = <iframe height="400px" width="100%" src={link} scrolling="no" frameborder="no" allowtransparency="yes" allowfullscreen="yes" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>;
                
        return(
            <div className="card-edit-form">
                <h4>{this.props.cardToShow}</h4>
                {embeddedCodeEl}
            </div>
        );
    }
}

export default CardForm;


// firstDuplicate
// rotateMatrix
// firstNotRepeatingCharacter