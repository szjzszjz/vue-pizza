# vue-pizza

> pizza点餐系统

## 知识点  
### 1、引入Bootstrap的CSS  
```html
<!--    引入bootstrap的css-->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
### 2、配置通用路由
```vuejs
// 如果没有匹配的就跳转至主页
    {
      path: '*',
      redirect: '/'
    }
```

### 3、全局守卫  
在`main.js`中使用  
主要用于鉴别是否登录
```vuejs
// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    alert('请先登录')
    next('/login')
  }
})
```

### 4、组件内守卫  
```vuejs
// 组件内路由
    // 进入页面之前
    beforeRouteEnter: (to, from, next) => {
      // alert(this.name)
      // next()
      // 异步获取页面信息
      next((vm) => {
        alert(vm.name)
      })
    },
    // 离开页面之前
    beforeRouteLeave: (to, from, next) => {
      if (confirm('are you sure leave?') === true) {
          next(true)
      } else {
        next(false)
      }
    }
```

### 4、路由独享  
主要用于在查看某个界面时，给出登录限制
```vuejs
     {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      beforeEnter: (to, from, next) => {
        alert('请先登录，才可看菜单')
        next('/login')
      }
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
