import Item from './componentes/item'
import Card from './componentes/Card'


const App = () => {
   return (
    <>
     <h1>Minha primeria aplicação com React</h1>
     <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>item 3</Item>
     </ul>
     <Card></Card>
     </>
   )
}

export default App

