import { Stats } from 'fs';

const remote = window.require("electron").remote;
const fs = remote.require('fs');
const readline = remote.require('readline');
const Stream = remote.require('stream');

interface FileInfo {
  name: string,
  stat: Stats
}

const getLastLine = (path: string): Promise<string|undefined> => {
  const inStream = fs.createReadStream(path);
  const outStream = new Stream;
  return new Promise((resolve, reject)=> {
      const rl = readline.createInterface(inStream, outStream);

      let lastLine = '';
      rl.on('line', function (line: string) {
          if (line.length >= 1) {
              lastLine = line;
          }
      });

      rl.on('error', reject)

      rl.on('close', function () {
          resolve(lastLine)
      });
  })
}

export const searchJournal = async (folder: string): Promise<string|undefined> => {
  console.log(folder);
  let journal = undefined;

  const files: FileInfo[] = fs.readdirSync(folder)
    .filter((f: string) => fs.lstatSync(folder + f).isFile())
    .filter((f: string) => f.match(/Journal.*\.log/))
    .map((f: string) => ({ name: f, stat: fs.lstatSync(folder + f) }))
    .sort((a: FileInfo, b: FileInfo) => b.stat.mtime.getTime() - a.stat.mtime.getTime())
  ;

  if (files.length) {
    journal = files[0].name
    const lastLine = await getLastLine(folder + journal)
    console.log('gameWatch | searchJournal | files[0]', files[0])
    console.log('gameWatch | searchJournal | journal', journal)
    if (lastLine === undefined || JSON.parse(lastLine).event === 'Shutdown') {
      journal = undefined
      
    }
  }
  console.log('gameWatch | searchJournal | journal', journal)
  
  return journal;
}