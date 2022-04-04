export default function ultimaActualizacion(DatosDeTemperatura) {
    if (DatosDeTemperatura) {
        const length = Object.values(DatosDeTemperatura).length
        const date = new Date(Object.values(Object.values(DatosDeTemperatura)[length - 1])[0]).toLocaleTimeString()

        return date;
    }
}