import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class RoomForm extends React.Component {
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${API_ROOT}/rooms`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(this.state)
        });
        this.setState({ name: '' });
    };

    render = () => {
        return (
            <div className="newRoomForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Create A New Room:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="CREATE"/>
                </form>
            </div>
        );
    };
}

export default RoomForm;
