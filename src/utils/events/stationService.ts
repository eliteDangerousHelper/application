import { Market } from '@/interfaces/events/stationServices';

const { ipcRenderer } = window.require("electron");

export const market = (event: Market) => {
  ipcRenderer.send('get-commodities');
}