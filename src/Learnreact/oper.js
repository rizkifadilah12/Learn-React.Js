//mengoper sebuah object dari aray
import React, { Component } from 'react'

export default class Oper extends Component {

    // ganti(ganti_makanan){
    //   this.setState({
    //     makanan : ganti_makanan
    // })
    // }

    render() {
        return (
            <div>
                <h2>operan yang menjadi props : {this.props.makanan}</h2>
                <button onClick={() => this.props.ganti('soto')}>Ganti</button>
            </div>
        )
    }
}
