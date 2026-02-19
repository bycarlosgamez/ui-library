import { Button } from './components/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/Card';
import { Checkbox } from './components/Checkbox';
import { Header } from './components/Header';
import { Switch } from './components/Switch';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='flex gap-8 m-6'>
          <Button>Default</Button>
          <Button size='xs'>Default</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='secondary' size='lg'>
            Secondary
          </Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Destructive</Button>
          <Button variant='link'>Link</Button>
        </div>
        <div className='flex gap-8 m-6'>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>This is the card description</CardDescription>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>
              <Button variant='link'>Learn more...</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex gap-8 m-6'>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>This is the card description</CardDescription>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>
              <Switch />
              <Checkbox />
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
