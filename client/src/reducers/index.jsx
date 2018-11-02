
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import get_started from './reducer_get_started' 
import feed from './reducer_feed' 
import .iii_sketch_‘3‘ from './reducer_.iii_sketch_‘3‘' 
import live from './reducer_live' 
import follow from './reducer_follow' 
import edit_profile from './reducer_edit_profile' 
import composite from './reducer_composite' 
import search from './reducer_search' 
import notifications from './reducer_notifications'

        const rootReducer = combineReducers({
            get_started : get_started 
,feed : feed 
,.iii_sketch_‘3‘ : .iii_sketch_‘3‘ 
,live : live 
,follow : follow 
,edit_profile : edit_profile 
,composite : composite 
,search : search 
,notifications : notifications 

        })

        export default rootReducer;

        