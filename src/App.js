import './App.css';
import Calc from './component/page/Calc';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <a href="https://github.com/praveenkumarpke/Basic_Calculator" target="_blank"> <GitHubIcon /> </a>
      <Calc />
    </div>
  );
}

export default App;
