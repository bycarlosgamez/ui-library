import { Button } from './components/Button';

function App() {
  return (
    <main>
      <h1>Home</h1>
      <div className='flex gap-8'>
        <Button>Submit</Button>
        <Button variant='destructive'>Submit</Button>
      </div>
    </main>
  );
}

export default App;
