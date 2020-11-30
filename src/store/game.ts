import { searchJournal } from '@/utils/gameWatch';

const electron = window.require("electron");

export interface GameState {
  gameDir: string,
  journal?: string
}

const state: GameState = {
  gameDir: (electron.app || electron.remote.app).getPath('home') + '\\Saved Games\\Frontier Developments\\Elite Dangerous\\'
}

searchJournal(state.gameDir).then(
  (filename: string|undefined) => {
    state.journal = filename
    console.log('journal : ' + state.journal);
  }
);

export default {
  namespaced: true as true,
  state,
  getters: {},
  mutations: {},
  actions: {}
};