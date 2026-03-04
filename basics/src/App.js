import Chai from "./Chai";
function App() {//app is nothing but simply a function which returing the html which eporting the html . what app is rendering html
  return (
    <>
    <Chai/>
      <h1>welcome to react | Aditi Pathak</h1> 
      <p>this is para for test</p>
    </>
 
  );
}
export default App;
//we get benfited that we can get programming captablites inside html.which is not existed privously.
//we cannot add scripts but we have one functionalites that in package-lock jason we have this "react-scripts": "5.0.1",this script is responsible to render the html page.when we go to source of the apge it shows
//that <script defer src="/static/js/bundle.js"></script></head>,we cannot added these scripts .
// the react scprit added most of the things which we are not added.these elemts are came from javascript scripts