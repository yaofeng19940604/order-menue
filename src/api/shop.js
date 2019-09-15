import axios from "axios"
let apiShop = {
    getShopDetails(id){
        return axios.get("api/shop/getShopDetails/"+id).then(res => res.data[0])
    },
}
export default apiShop