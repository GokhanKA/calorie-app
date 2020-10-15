import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ListOfDays from '../components/ListOfDays.vue'
import Meals from '../components/Meals.vue'
import AddMeal from '../components/AddMeal.vue'
import ChangeMeal from '../components/ChangeMeal.vue'
import Users from '../components/Users.vue'
import User from '../components/User.vue'
import Options from '../components/Options.vue'
import Password from '../components/Password.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/meals',
    name: 'Meals',
    component: Meals,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/password',
    name: 'Password',
    component: Password,
  },
  {
    path: '/options',
    name: 'Options',
    component: Options,
  },
  {
    path: '/listofdays',
    name: 'ListOfDays',
    component: ListOfDays,
  },
  {
    path: '/addmeal',
    name: 'AddMeal',
    component: AddMeal,
  },
  {
    path: '/changemeal/:id',
    name: 'ChangeMeal',
    component: ChangeMeal,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login','/register'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	return next();
});