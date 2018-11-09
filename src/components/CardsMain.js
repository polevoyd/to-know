import React from 'react';
import CardsResults from './CardsResults';
import SettingsTab from './SettingsTab';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/actions';
import Greeting from './Greeting';

class CardsMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    /***********************************************************/
    // Toggle a menu

    handleMenuToggle(){
        this.props.dispatch(toggleMenu());
    }

    /***********************************************************/

    render(){
        return(
            <div>
                <div className="menu-icon" onClick={this.handleMenuToggle}><i className="far fa-caret-square-down"></i></div>
                <div className="refresh-icon" onClick={this.handleMenuToggle}><i className="fas fa-retweet"></i></div>
                {this.props.cards.menuIsOpened ? <SettingsTab /> : null}
                {localStorage.getItem('cardsState') ? null : <Greeting />}
                <CardsResults />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state }
}

export default connect(mapStateToProps)(CardsMain);