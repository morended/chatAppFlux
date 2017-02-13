import alt from "../alt.js"

import chatActions from '../action/chatActions.js'

class chatStore {
  constructor() {
    this.messages = [];

    this.bindListeners({
      handleMessage: chatActions.UPDATE_MESSAGES
    });
  }

  handleMessage(messages) {
    this.messages = messages;
    
  }
}

export default alt.createStore(chatStore);