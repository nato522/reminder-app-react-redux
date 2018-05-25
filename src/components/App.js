import React, { Component } from 'react';

class App extends Component {
    render(){
        return(
            <div className="App">
                <div className="title">
                    Reminder App
                </div>
                <div className="form-inline">
                    <div className="from-group">
                        <input type="text" placeholder="I have to..." className="form-control"/>
                    </div>
                    <button type="button" className="btn btn-success">Add Reminder</button>

                </div>
            </div>
        )
    }
}

export default App;