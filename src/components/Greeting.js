import React from 'react';

const Greeting = (props) => {
    return(
        <div className="greeting">
            <h1>To Know</h1>
            <p>Hello!</p>
            <p>This is an app that converts your GitHub repository into a study cards. Every file from a repo as a card, which you can open and drag and drop across three different categories. It makes it easy to study concepts and code challanges, while effortlessly managing them in one place. Hope you'll find it helpful too.</p>
            <p>* app is optimized for desktop use</p>
       </div>
    );
}

export default Greeting;