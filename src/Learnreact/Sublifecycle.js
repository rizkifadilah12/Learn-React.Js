//Isi perubahan dari componet Lifecycle
import React, { Component } from 'react'
//component WillUnmount(Tahap sebelum component di render)
export default class Sublifecycle extends Component {
    componentWillUnmount() {
        this.props.ubah("sate")
    }
    render() {
        return (
            <div>
                <h2>Component</h2>
            </div>
        )
    }
}
