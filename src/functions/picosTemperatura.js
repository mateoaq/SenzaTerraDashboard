export const picosTemperatura = (historialTemperatura, setMaxTemp, setMinTemp) => {
    const date = new Date();
    const actualDay = date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();

    historialTemperatura.forEach(element => {
        console.log(element)
    });

};