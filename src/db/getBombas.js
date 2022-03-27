export const getBombas = (setLoading, isActiveBomb, get, setBombs) => {
    setLoading(true)

    get(isActiveBomb).then((snapshot) => {
        if (snapshot.exists()) {
            setBombs(snapshot.val())
            setLoading(false)
        } else {
            setLoading(false)
            console.log("No data available");
        }
    }).catch((error) => {
        console.error('error', error);
    });
}