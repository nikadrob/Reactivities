import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, List, ListItem } from 'semantic-ui-react';
import axios from 'axios';

function App() {
  const [activities, setActivites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      console.log(response);
      setActivites(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />

      <List>
        {activities.map((a: any) => (
          <ListItem key={a.id}>{a.title}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
