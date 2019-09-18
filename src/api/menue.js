import axios from "axios"
let apiMenue = {
    getCategories(){
        return axios.get("category/getcategories").then(res => res.data)
    },
    getMenues(id){
        return axios.get("menue/getMenues/"+id).then(res => res.data)
    },
    getHotMenues(){
        return axios.get("menue/getHotMenues").then(res => res.data)
    },
    getAllMenues(){
        return axios.get("menue/getAllMenues").then(res => res.data)
    },
    getMenueDetails(id){
        return axios.get("menue/getMenueDetails/"+id).then(res => res.data)
    },
}
export default apiMenue