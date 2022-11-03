import { createStore } from 'vuex'

const store = createStore({
  state: {
    openFooter: false
  },
  getters: {

  },
  mutations: {
    toggleFooter(state) {
      const topScroll = window.pageYOffset || document.documentElement.scrollTop;
      const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;
      state.openFooter = !state.openFooter;
      window.onscroll =
        state.openFooter
          ? function () {
            window.scrollTo(leftScroll, topScroll)
          }
          : function () { }
    },
  }
})

export default store;