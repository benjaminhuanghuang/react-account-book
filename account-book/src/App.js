import logo from './logo.svg';
import './App.css';

//
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import { LIST_VIEW } from './utility';

const items = [
  {
    "id":1,
    "title":'ddddd',
    "price":200,
    "date":"2020-1-1",
    "category":{
      "id": "1",
      "name" : "travel",
      "type":"outcome",
      "iconName": 'ios-plane'
    }
  }
  ,{
    "id":2,
    "title":'ccccc',
    "price":200,
    "date":"2020-1-1",
    "category":{
      "id": "1",
      "name" : "travel",
      "type":"outcome",
      "iconName": 'ios-plane'
    }
  }
]
function App() {
  return (
    <div className="App">
      <ViewTab activeTab={LIST_VIEW} onTabChange={(view)=>{}}/>
      <PriceList items={items} onModifyItem={()=>{}} onDeleteItem={()=>{}}/>
    </div>
  );
}

export default App;
