import Button from "./propsSample/Button"
import ProductDetail from "./propsSample/ProductDetail"

function App() {

  return (<>
    <Button title='Hello My Button' />
    <ProductDetail name='IPhone' unitPrice={2500} unitsInStock={15} points={[4, 10, 10]} />
    <hr></hr>
    <ProductDetail name='Samsung' unitPrice={1100} unitsInStock={315} points={[9, 5, 10]} />
  </>)
}

export default App