import {STORE_LOADER,LoaderLoad} from '../actions/loader';

export interface LoaderState {
  isLoading: boolean;

}


const initialState: LoaderState = {
     isLoading: false
  };

  const loader = (state = initialState, load: LoaderLoad) => {
   
    switch (load.type) {
      case STORE_LOADER:
        return {
          ...state,
          isLoading: load.payload,
        };

      default:
        return state;
    }
  };

  export default loader;
  