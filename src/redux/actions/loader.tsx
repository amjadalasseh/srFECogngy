export const STORE_LOADER = 'STORE_LOADER';

export interface  LoaderLoad{
    type: String,
    isLoading: boolean,
    payload: {
        isLoading: boolean,
    }

}

export const setLoader :any = (payload: LoaderLoad) => {
    return { type: STORE_LOADER, payload };
};