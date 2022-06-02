import React, { useState } from 'react'
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header />
      <AddItem items={items} setItems={setItems}/>
      <ListItem items={items} />
    </div>
  );
}

export default React.memo(App);
