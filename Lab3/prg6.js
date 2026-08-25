import {writeFile} from 'fs/promises';
for (let i=1;i<100000;i++){
    await writeFile("big.txt",`hello buddy: ${i}\n`,{flag:"a"});
}