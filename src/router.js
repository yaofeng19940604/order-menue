import Vue from 'vue'
import Router from 'vue-router'
// import LoginPage from "./view/LoginPage.vue"
import IndexNav from './view/IndexNav.vue'
Vue.use(Router)
export default new Router({
  routes: [
    // {path: "/", component: LoginPage},
    {path: "/", component: IndexNav,children:[
      {path: "", component: ()=>import("./view/HomePage.vue")},
      {path: "HomePage", component: ()=>import("./view/HomePage.vue")},
      {path: "ClassifyPage", component: ()=>import("./view/ClassifyPage.vue")},
      {path: "CartPage", component: ()=>import("./view/CartPage.vue")},
      {path: "UserPage", component: ()=>import("./view/UserPage.vue")},
    ]},
    {path: "/MenueDetails/:id",component: ()=>import("./view/MenueDetails.vue")},
    {path: "/SearchPage", name:"SearchPage", component: ()=>import("./view/SearchPage.vue")},
  ]
})
