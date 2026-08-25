import fs from "fs/promises";

const writeData = async() => {
    try {
        console.log("About to write...");
        await fs.writeFile('student.txt', "Name:Ashwani Bhardwaj");
        console.log("File Written");
        
    } catch (error) {
        console.log(error);
    }
};

const main = () => {
    console.log("main");
    writeData();
    console.log("end");
}

main();