export const getTemp = (actualTemp, get, setTemp) => {
    //Temperatura
    get(actualTemp).then((snapshot) => {
        if (snapshot.exists()) {
            setTemp(snapshot.val().act)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}