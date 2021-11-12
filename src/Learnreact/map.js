//Map object (Loping data)
//filter(menampilkan object dalam kondisi tertentu)
import React from 'react'

const makanan = [
    {
        nama: 'soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie ayam',
        harga: 11000
    },
    {
        nama: 'Nasgor',
        harga: 15000
    },

]
//reduce(Menggabungkan sebuah nilai)

const total = makanan.reduce((total, makanans) => {
    return total + makanans.harga;
}, 0);

const Mapp = () => {
    return (
        //Menampilkan hasil map dan filter       
        <div>
            <h2>Map sederhana</h2>
            <ul>
                {makanan.map((makanans, index) => (
                    <li>{index + 1}.{makanans.nama} - harga{makanans.harga}</li>
                ))}
            </ul>
            <h2>map filter</h2>
            <ul>
                {makanan.filter((makanans) => makanans.harga > 11000).map((makanans, index) => (
                    <li>{index + 1}.{makanans.nama} - harga{makanans.harga}</li>
                ))}
            </ul>
            <h3>total :{total}</h3>
        </div>
    )
}
//mengeksport hasil dengan nama parameter(Mapp)
export default Mapp
