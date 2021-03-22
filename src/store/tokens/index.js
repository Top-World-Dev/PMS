import {Meteor} from "meteor/meteor";

export default {
  state: {
    lastToken: null,
    tokens: []
  },
  getters: {
    lastToken(state) {
      return state.lastToken;
    },
    tokens(state) {
      return state.tokens;
    }
  },
  mutations: {
    lastToken(state, lastToken) {
      state.lastToken = lastToken;
    },
    tokens(state, tokens) {
      state.tokens = tokens;
    },
    addToken(state, token) {
      state.tokens.push(token);
    }
  },
  actions: {
    registerPatientToken({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        // let count = state.tokens.filter(item => item.phone === payload.phone)
        //   .length;
        // if (count === 0) {
        //   const lastToken = state.lastToken;
        //   let newToken = 1;
        //   if (lastToken) {
        //     newToken = lastToken + 1;
        //   }
        //   commit("lastToken", newToken);
        //   payload["token"] = newToken;
        //   commit("addToken", payload);
        //   resolve(payload);
        // } else {
        //   reject({ status: "400" });
        // }

        Meteor.call("tokens.create", payload, function(err, data) {
          if(!err) {
            
            resolve(payload);
          }else {
            console.log("Token Error",err);
            reject({ status: "400" });
          }
        });


      });
    }
  }
};
