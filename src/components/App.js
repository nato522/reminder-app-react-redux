import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        console.log('state', this.state);
    }

    render(){
        return(
            <div className="App">
                <div className="title">
                    Reminder App
                </div>
                <div className="form-inline">
                    <div className="from-group">
                        <input
                            type="text"
                            placeholder="I have to..."
                            className="form-control"
                            onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>

                </div>
            </div>
        )
    }
}

export default App;