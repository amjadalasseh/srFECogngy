export const STORE_MESSAGE = 'STORE_MESSAGE';

export interface MessageLoad {
    type: String,
    text: string,
    payload: {
        text: String
    }

}

export const storeMessage : any = (payload: MessageLoad) => {
    return { type: STORE_MESSAGE, payload };
};