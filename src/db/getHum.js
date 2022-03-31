export const getHumedad = (actualHum, get, setHum) => {
    //Temperatura
    get(actualHum).then((snapshot) => {
        if (snapshot.exists()) {
            setHum(snapshot.val())
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}