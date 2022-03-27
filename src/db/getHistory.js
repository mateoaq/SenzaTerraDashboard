export const getHistoryTemp = (historyTemp, get, setHistoryTempArray) => {
    //Temperatura
    get(historyTemp).then((snapshot) => {
        if (snapshot.exists()) {
            setHistoryTempArray(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}