//import logo from './logo.svg';
import './App.css';
import Variabel from './Learnreact/var';
import Statenprops from './Learnreact/statenprops';
import Mapp from './Learnreact/map';
import Lifecycle from './Learnreact/Lifecycle';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Crud from './crud';

const App = () => {
  return(
    //memanggil semua component dari folder Learnreact dengan menggunakan nama class/parameter dalam component
    <div className="content">
      <h4>Variabel :</h4>
      <Variabel />
      <h4>State and props :</h4>
      <Statenprops />
      <h4>Mapp :</h4>
      <Mapp />
      <h4>Lifecycle :</h4>
      <Lifecycle />
   </div>
  )
}

export default App;
