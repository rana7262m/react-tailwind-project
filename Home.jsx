import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl md:text-4xl">Home Page</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Card title="Card 1">This is card one.</Card>
      <Card title="Card 2">This is card two.</Card>
    </div>
    <Button label="Click Me" onClick={() => alert('Clicked!')} />
  </div>
);

export default Home;