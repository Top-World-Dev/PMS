import Vue from "vue";
import VueRouter from "vue-router";
import {Meteor} from "meteor/meteor";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard/chambers",
    name: "Chambers",
    component: ()=> import("../views/chambers/Chamber.vue"),
    meta: {
      isLoginRequired: true,
      layout: "DashboardLayout"
    }
  },
  {
    path: "/",
    name: "UserHome",
    component: () => import("../views/Home.vue"),
    meta: {
      isLoginRequired: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      isLoginRequired: true,
      layout: "DashboardLayout"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/home",
    name: "UserHome",
    component: () => import("../views/Home.vue"),
    meta: {
      isLoginRequired: true
    }
  },
  {
    path: "/patients/registration",
    name: "PatientRegistration",
    component: () => import("../views/PatientRegistration.vue"),
    meta: {
      isLoginRequired: true
    }
  },
  {
    path: "/doctors/patients/:slug",
    name: "PatientVisit",
    props: true,
    component: () => import("../views/doctors/PatientVisit.vue"),
    meta: {
      isLoginRequired: true
    }
  },
  {
    path: "/doctors",
    name: "DoctorsDashboard",
    props: true,
    component: () => import("../views/doctors/DoctorsDashboard.vue"),
    meta: {
      isLoginRequired: true,
      layout: "DashboardLayout"
    }
  },
  {
    path: "/patients",
    name: "Patients",
    component: () => import("../views/patients/Patients.vue"),
    meta: {
      isLoginRequired: true,
      layout: "DashboardLayout"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue"),
    meta: {
      layout: 'BareLayout'
    },
    beforeEnter(to, from, next) {
     
      if(Meteor.userId()) {
        if(from.name && from.name !== "login") {
          next(to).catch(()=> {
            console.log("Error catched");
          });
        }else {
          next({name: 'UserHome'});
        }
        
      }else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from ,next) => {
  
  if(to.meta && to.meta.isLoginRequired) {
  
    if(!Meteor.userId()) {
      next({name: "login"});
    }else {
      next();
    }
  }else {
    next();
  }
})

export default router;
