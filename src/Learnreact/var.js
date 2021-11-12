//penulisan varibel dalam react
//1.var(Bersipat global, daoat di ubah di mana pun. memiliki sifat hpisting dan dapat di deklarasikan ulang di mana pun)
//2.cons(bersifat scoop area, immutable[tidak dapat di rubah], tidakdapa didearasikan ulang biasa di gunakan untuk object)
//3.let(bersifat scoop area, dapat di ubah. tidak dapat di deklarasikan ulang)
//import react from "react";

//const
//const harga = 3000;

//var

//var harga = 2000;
//if(true){
//    var harga = 30000;
//}

//let
let harga = 2000;
//harga = 30000;
if (true) {
    harga = 30000;
}
const Variabel = () => {
    return (
        <div>
            <h2>harga : {harga}</h2>
        </div>
    )
}
export default Variabel