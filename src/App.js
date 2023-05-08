import './App.css';

import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {

  const [progress,setProgress] = useState(0);

  const apikey = "7353e1ea07a44513b1601b8791979fa3"


  return (
    <div>
      <Navbar/> 
      <LoadingBar
        color='#f11946'
        progress={10}
      />
      <Routes>
        <Route  path="/" element={<News key="general" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="general" />}/>
        <Route exact  path="/business" element={<News key="business" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="business"/>}/>
        <Route exact  path="/entertainment" element={<News key="entertainment" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="entertainment"/>}/>
        <Route exact  path="/general" element={<News key="general" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="general"/>}/>
        <Route exact  path="/health" element={<News key="health" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="health"/>}/>
        <Route exact  path="/science" element={<News key="science" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="science"/>}/>
        <Route exact  path="/sports" element={<News key="sports" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="sports"/>}/>
         <Route exact  path="/technology" element={<News key="technology" progress={progress}  setProgress={setProgress}
 country="in" apikey={apikey} category="technology"/>}/> 
      </Routes>
    </div>
  );
}

export default App;
