import React, { Component } from 'react';


export class Header extends React.Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Handy Procrastinator</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Hacker News <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Reddit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product Hunt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Github Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Medium</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Life Hacker</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Header;
