import {mkdir,rm} from  "fs/promises";
//await mkdir("uploads");
//await mkdir("uploads/images");
//await mkdir("docs/resume/data", { recursive:true});//use to create recursive folders
//removes only data folder
//await rm("docs/resume/data",{recursive:true});
//removes main folder and sub folder also 
await rm("docs",{recursive:true});
