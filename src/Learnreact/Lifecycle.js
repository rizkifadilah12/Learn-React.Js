//lifecycle adalah sebuah perubahan component dalam react
//atau sebuah pertumbuhan dari mounting(fase component di buat atau pertama kali di render ke Dom), updating(fase component akan di render ulang), unmonting(fase ketika component di hapus dari Dom)
//menghubungkan API

//mengimport semua component yang di perlukan
import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

//Membuat sebuah componen dan mngeksport hasil dengan nama parameter (Lifecycle)
export default class Lifecycle extends Component {
    //Menggunakan database server/privat (props)    
    constructor(props) {
        super(props)
        //membuat sebuah state di mana sebuah isi dari konten di buat    
        this.state = {
            makanan: 'bakso',
            data: {},
            tampil: false,
        };
    }
    // DidMount / Fase Pertama kali merender ke Dom(tahap setelah component di render)
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            })
    }
    ubah(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
        return (
            //Membuat tampilan content dengan JSX
            <div>
                <h1>{this.state.makanan}</h1>
                {this.state.tampil && <Sublifecycle ubah={(value) => this.ubah(value)} />}
                <button onClick={() => this.setState({ tampil: !this.state.tampil })}>Show</button>
            </div>
        )
    }
}
