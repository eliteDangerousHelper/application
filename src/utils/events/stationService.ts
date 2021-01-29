const { ipcRenderer } = window.require("electron");

export const market = () => {
  ipcRenderer.send("get-commodities");
};
