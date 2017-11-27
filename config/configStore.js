/**
 * Created by kien.lovan on 11/27/2017.
 */
import {createStore} from 'redux';
import reducers  from '../reducers'

export default createStore(
    reducers,
    {}
);