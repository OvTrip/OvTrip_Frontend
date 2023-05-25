const modalStore = {
    namespaced: true,
    state: {
        isModalOpen: false
    },
    mutations: {
      SET_IS_MODAL_OPEN: (state, isModalOpen) => {
        state.isModalOpen = isModalOpen;
      },
    },
};
  
export default modalStore;
  