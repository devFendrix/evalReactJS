
import './App.css';
import { Form } from './composants/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ArticleList } from './composants/ArticleList';

function App() {
  return (
    <div className='container'>
        <Form/> 
      <hr />
      <main className='row'>
        <ArticleList />
      </main> 
    </div>
  );
}

export default App;
