import React from 'react';
import CardPreview from './CardPreview';

class CardsResults extends React.Component {
    render(){
        return(
            <div className="cards-results">
                {/* here will be a logic for a loop of cards within selection on keyword */}
                <CardPreview />
            </div>
        );
    }
}

export default CardsResults;