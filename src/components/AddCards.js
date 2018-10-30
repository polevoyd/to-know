import React from 'react';

class AddCards extends React.Component {

    constructor(props){
        super(props);
        this.state = { link: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    // on change send value to state
    handleChange(event) {
        this.setState({link: event.target.value})
    }

    // on submit take value from state
    handleLinkSubmit(event) {
        event.preventDefault();

        console.log(this.state.link)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleLinkSubmit}>
                    <label>
                        Profile Link:
                        <input type="text" value={this.state.link} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <textarea></textarea>
            </div>
        );
    }
}

export default AddCards;