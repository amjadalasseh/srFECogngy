import {STORE_MESSAGE, MessageLoad} from '../actions/messages';

export interface MessageState {
  list: Set<object>;

}

const initialState: MessageState = {
     list: new Set()
  };

  const messags = (state = initialState, load: MessageLoad) => {
    switch (load.type) {
      case STORE_MESSAGE:
        state.list.add(load.payload)
        return {
          ...state,
          list: state.list,
        };

      default:
        return state;
    }
  };

  export default messags;
  