//state (data private sebuah component.Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses di component lain)
//props(Props singkatan dari [property], property dalam data-data yang ada di dalam class, dan kebalikan dari state, yaitu bisa di akses dari luar)
import React, { Component } from 'react'
import Oper from './oper'

export default class Statenprops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'bakso'
        }
    }
    ganti = (ganti_makanan) => {
        this.setState({
            makanan: ganti_makanan
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.ganti('soto')}>Ganti</button>
                <Oper makanan={this.state.makanan} ganti={this.ganti} />
            </div>
        )
    }
}