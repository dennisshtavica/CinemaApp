import { createStore } from "vuex";
// import axios from "axios";

const store = createStore({
//   state: {
//     currentUser: null
//   },
//   getters: {
    
//   },
//   mutations: {
//     setCurrentUser(state, userId){
//         state.currentUser = userId
//     }
//   },
//   actions: {
//     loadUser({commit}, id){
//         axios.get(`http://localhost:3005/users/${id}`)
//         .then(res => {
//             commit('setCurrentUser', res.data)
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }
    
//   },
});

export default store
// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     user: {
//       loggedIn: false,
//       data: null,
//     },
//   },
//   getters: {
//     user(state) {
//       return state.user;
//     },
//   },
//   mutations: {
//     SET_LOGGED_IN(state, value) {
//       state.user.loggedIn = value;
//     },
//     SET_USER(state, data) {
//       state.user.data = data;
//     },
//   },
//   actions: {
//     fetchUser({ commit }, user) {
//       commit("SET_LOGGED_IN", user !== null);
//       if (user) {
//         commit("SET_USER", {
//           displayName: user.displayName,
//           email: user.email,
//         });
//       } else {
//         commit("SET_USER", null);
//       }
//     },
//   },
// });

// // // // import {createStore} from 'vuex'
// // // import Vuex from "vuex"

// // // const state = {
// // //     user: null
// // // };

// // // const store = new Vuex.Store({
// // //     state,
// // //     getters: {
// // //         user: (state) => {
// // //             return state.user
// // //         }
// // //     },

// // //     actions: {
// // //         user(context, user){
// // //             context.commit('user', user);
// // //         }
// // //     },

// // //     mutations: {
// // //         user(state, user) {
// // //             state.user = user
// // //         }
// // //     }

// // // });

// // // export default store
