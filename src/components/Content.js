import React, { Component } from 'react';

// go on from there
// quicktime

export class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPlatform: 'All'
      };

      this.updatePlatform = this.updatePlatform.bind(this);

    }

    updatePlatform(plat) {
        this.setState( function() {
            return {
                selectedPlatform: plat
            }
        }); 
    }

    render() {
        var platforms = ['Hacker News', 'Reddit', 'Medium', 'Product Hunt', 'Slashdot', 'Github Trending' ]
        return(
        <ul className="platforms">
            {
                platforms.map(function (plat) {
                    return (
                        <li
                        style={plat === this.state.selectedPlatform ? {color: "#d0021b"}: null}
                        onClick={this.updatePlatform.bind(null, plat)}
                        >
                        {plat}
                        </li>
                    )
                }, this )
            }
        </ul>
        );
    }
}

export default Content;



