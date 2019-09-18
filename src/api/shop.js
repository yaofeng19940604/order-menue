import axios from "axios"
let apiShop = {
    getShopDetails(id){
        return axios.get("shop/getShopDetails/"+id).then(res => res.data)
    },
}
export default apiShop