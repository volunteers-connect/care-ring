import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import allVolunteers from './allVolunteers'
import allEvents from './allEvents'
import singleVolunteer from './singleVolunteer'
import singleOrganization from './singleOrganization'
import singleEvent from './singleEvent'

const reducer = combineReducers({
  allVolunteers,
  allEvents,
  singleVolunteer,
  singleOrganization,
  singleEvent
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
