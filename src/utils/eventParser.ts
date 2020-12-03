import { EventED } from '@/interfaces/events/base';
import * as startup from "./events/startup";

const eventFunction: {[name: string]: Function} = {
  "FileHeader": startup.fileheader,
  "Progress": startup.progress
}

export const parse = (event: EventED) => {
  if (eventFunction[event.event] !== undefined) {
    eventFunction[event.event](event)
  }
}

export default parse;