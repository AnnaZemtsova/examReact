import React, {Component} from 'react';


class Fruits extends Component {
    state = {
        fruits: ['Banana', 'Orange', 'Apple'],
        activeIndex: -1,
    };

    changeStyleFunction = (index) => {
        this.setState ({
            activeIndex: index
        });
    };

    render() {
        return (

            <div>
                {this.state.fruits.map((nextFruit, index) => {
                       return <p key={index.toString()} onClick={this.changeStyleFunction.bind(this, index)}
                                 style={
                                     index === this.state.activeIndex ?
                                         { color: 'coral' } : { color: 'black' }}>{nextFruit}</p>
                }
                )
                }

            </div>
        );
    }
}


export default Fruits;
