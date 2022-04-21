import { SocketClient } from "@cognigy/socket-client";
import { storeMessage } from '../redux/actions/messages';
import { setLoader } from '../redux/actions/loader';
import store from '../redux/store';

declare var process: {
  env: {
    REACT_APP_ENDPOINT_BASE_URL: string,
    REACT_APP_ENDPOINT_URL_TOKEN: string
  }
}


const { REACT_APP_ENDPOINT_BASE_URL, REACT_APP_ENDPOINT_URL_TOKEN } = process.env;


class SocketClientApi {

  baseUrl: string;
  urlToken: string
  client: SocketClient

  constructor(baseUrl = REACT_APP_ENDPOINT_BASE_URL, urlToken = REACT_APP_ENDPOINT_URL_TOKEN) {
    this.baseUrl = baseUrl;
    this.urlToken = urlToken;
    this.client = new SocketClient(this.baseUrl, this.urlToken, {
      // if you use node, internet explorer or safari, you need to enforce websockets
      forceWebsockets: true,
    });
  }

  async initScoket() {

    this.client.on("output", (output) => {

       store.dispatch(storeMessage(output));
       store.dispatch(setLoader(false));

    });

    await this.client.connect();

  }

  async sendMessage(message: string) {
    try {
      store.dispatch(setLoader(true));
      this.client.sendMessage(message, {});

    } catch (e) {
      console.log("e=>", e)
    }

  }


}

export const socket = new SocketClientApi();
