const electron = window.require("electron");

export interface GameState {
  gameDir: string,
  journal?: string
}

const state: GameState = {
  gameDir: (electron.app || electron.remote.app).getPath('home') + '\\Saved Games\\Frontier Developments\\Elite Dangerous\\'
}

export default {
  namespaced: true as true,
  state,
  getters: {},
  mutations: {},
  actions: {}
};