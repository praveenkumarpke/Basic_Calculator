import './App.css';
import Calc from './component/page/Calc';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <a className='d-flex justify-content-center ml mt-2' href="https://github.com/praveenkumarpke/Basic_Calculator" target="_blank"> <GitHubIcon /> </a>
      <Calc />
    </div>
  );
}

export default App;
