import axios from "axios";


// LEYENDO LOS DATOS

export const LeerPaises = async () => {
    try {
  
        const response = await axios.get("https://restcountries.com/v3.1/all")
        return response.data


    }
    catch (e) {
        console.log(e, "error en los datos");
    }
}