import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
class AddEvent extends Component {
    render() {
        return (
            <div>
                <div class="uk-container uk-container-center" >

                    <h1 class="uk-position-relative uk-position-center">New Event</h1>

                    <div class="uk-margin">
                        <input class="uk-input " name="tag" type="text" placeholder="Tag" />
                    </div>

                    <div class="uk-margin">
                        <input class="uk-input " name="nameEvent" type="text" placeholder="Name of Event" />
                    </div>
                    <div class="uk-margin" >

                        <div uk-alert>How many people can come?<input class="uk-input " type="number" name="amount" placeholder="1" /></div>
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" name="text" placeholder="Description"></textarea>
                    </div>

                    <div class="uk-margin" uk-margin>


                        <div uk-form-custom="target: true">
                            <input type="file" name="file" />
                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled />
                        </div>
                        <button class="uk-button uk-button-default  /div>">Submit</button>
                    </div>
                    <input type="hidden" name="_csrf" value="${_csrf.token}" />
                    <div class="uk-margin">
                        <button type="submit" class="uk-button uk-button-default">Добавить</button>
                    </div>
                </div>



            </div>


        );
    }
}

export default AddEvent;
