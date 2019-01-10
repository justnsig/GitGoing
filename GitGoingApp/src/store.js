import { createStore } from 'redux';

import * as actions from './actions';

const defaultState = {
    hint: 'Would you like to learn more?'
};

const unknownAction = {
    type: 'unknown'
};

const reducer = (state = defaultState, action = unknownAction) => {
    switch (action.type) {
        case actions.INIT:
            return { ...state, hint: 'Create a new local repository. Which is fancy speak for folder.'};
        case actions.CLONE:
            return { ...state, hint: 'Download a project to your computer.'};
        case actions.STASH:
            return { ...state, hint: 'Stores incomplete changes.'};
        case actions.RESET:
            return { ...state, hint: 'Oh shit button. Undoes all commits, preserving changes locally.'};
        case actions.PUSH:
            return { ...state, hint: 'Uploads your changes to GitHub!'};
        case actions.PULL:
            return { ...state, hint: 'Downloads history and incorporates changes.'};
        case actions.ADD:
            return { ...state, hint: 'Saves a snapshot of a file or all files. Get ready to Commit!'};
        case actions.COMMIT:
            return { ...state, hint: 'Saves your snapshot permanently. Next stop Push.'};
        case actions.STATUS:
            return { ...state, hint: 'This shows a list of all new or modified files.'};
        default:
            return state;
    }
};

const storeConfig = createStore(reducer);

export default storeConfig;



