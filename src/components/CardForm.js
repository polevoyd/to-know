import React from 'react';

import Gist from 'super-react-gist';

class CardForm extends React.Component{
    render(){
        return(
            <div className="card-edit-form">
                <h4>Card#</h4>
                <Gist url='https://gist.github.com/polevoyd/2611bf68bdf153d8e7473928a06e9802' />
                
            </div>
        );
    }
}

export default CardForm;