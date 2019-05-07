import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import base64 from 'react-native-base64'
import './Events.css'
const BookListing = ({ events }) => (
    <ul>
        {events.map(book => <div key={book.id}>
       
            <div class="uk-width-1-3" >

                <article class="uk-article" >

                    <h1 class="uk-article-title"><a class="uk-link-reset" href="">Showcase</a></h1>
                    <h3 class="uk-text-large" >A fine collection of websites and themes built with the UIkit framework.</h3>

                    <h2>Suggest a site</h2>
                    <p>You created new Event? Let us know :)</p>
                    <div class="uk-grid-small uk-child-width-auto" uk-grid>
                        <div>
                            <a class="uk-button uk-button-text" href="/addEvent">Add new Event</a>
                        </div>
                    </div>
                    <div>
                       
                    </div>

                </article>
            </div>
            <div class="uk-width-1-2" >
    <article class="uk-article">
        <figure class="uk-overlay">
        {book.name}


            <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                <img src="/img/${event.filename}" height="1200" width="1600"  />
                <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                    <a class="uk-button uk-button-text uk-transition-fade " href="/event/${event.id}">Full Details</a>
                </div>
                
            </div>

            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        </figure>
    </article>
    <h1 class="uk-article-title uk-position-relative uk-position-center">No Events</h1>

            </div>

        
      

            <Grid celled
                className='GridEvents'>
                <Grid.Row>
                    <Grid.Column width={4}>
                        {book.filename}
                    </Grid.Column>
                    <Grid.Column
                        width={7}
                        textAlign='center'>
                        {book.text}
                    </Grid.Column>
                    <Grid.Column
                        width={2}
                        textAlign='center'>
                        {book.author.username}
                        </Grid.Column>
                    <Grid.Column
                        width={1}
                        textAlign='left'
                        floated='left'>
                        {book.tag}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>)}
    </ul>
);
class EventsBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [] };
    }
    componentWillMount() {
        fetch("http://localhost:8080/event", {
  headers: new Headers({
    'Authorization': `Basic ${base64.encode(`user:1`)}`
  }),
})
            .then(data => data.json())
            .then((data) => { this.setState({ events: data }) });
    }
    render() {
        return (
            <div>
                <BookListing events={this.state.events} />
            </div>);
    }
}

export default EventsBoard;