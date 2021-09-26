import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Help from "../views/Help";
import Blog from "../views/Blog";
import Calender from "../views/Calendar";
import Slider from "../views/Slider";
import Chat from "../views/vueChat";


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component:About
  },
  {
    path:'/help',
    component:Help
  },
  {
    path:'/blog',
    component:Blog
  },
  {
    path:'/calendar',
    component:Calender
  },
  {
    path:'/slider',
    component:Slider
  },
  {
    path:'/chat',
    component:Chat
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
