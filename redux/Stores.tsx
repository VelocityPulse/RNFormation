import { createStore, combineReducers, applyMiddleware} from 'redux';
import CountReducer from './reducers/CountReducer';


const rootReducer = combineReducers({
    monCount: CountReducer
});

export default createStore(rootReducer)
