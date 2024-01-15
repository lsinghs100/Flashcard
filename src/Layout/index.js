import React from 'react';
import Header from './Header';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Study from '../components/Study';
import Deck from '../components/Deck';
import CreateDeck from '../components/deck/CreateDeck';
import EditDeck from '../components/deck/EditDeck';
import AddCard from '../components/card/AddCard';
import EditCard from '../components/card/EditCard';

function Layout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck />
          </Route>
          <Route exact path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>
          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
