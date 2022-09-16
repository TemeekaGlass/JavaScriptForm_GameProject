function processLogs(logs, threshold) {
    // Write your code here
    logs.toString();
    let sepArray = logs.toString().split(',');
   // let sepArray2 = sepArray.toString().split(' ');
    let returnArray = [];
    console.log(logs);
    console.log(sepArray)
    //console.log(sepArray2);

    for(let n = 0; n < sepArray.length; n++){
     console.log(sepArray[n]);
     let sepArray2 = sepArray[n].split(' ');
     console.log(sepArray2);
     //for(let i = 0; i < sepArray2.length; i++)
         if(sepArray2[1] >= threshold){    
             returnArray.push(sepArray2[0]);
            
        }
        
    }
    returnArray = Array.from(new Set(returnArray))
    return returnArray.sort();

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const threshold = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, threshold);

    ws.write(result.join('\n') + '\n');

    ws.end();
}