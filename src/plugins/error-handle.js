const errorHandler = (error, vm, info) => {
  console.error('抛出全局异常')
  console.error(vm)
  console.error(error)
  console.error(info)
}
function isPromise(ret) {
  return (ret && typeof ret.then === 'function' && typeof ret.catch === "function")
}
function registerActionHandle(actions) {
  Object.keys(actions).forEach(key => {
    let fn = actions[key]
    actions[key] = function (...args) {
      let ret = fn.apply(this, args)
      if (isPromise(ret)) {
        return ret.catch(errorHandler)
      } else { // 默认错误处理
        return ret
      }
    }
  })
}
const registerVuex = (instance) => {
  if (instance.$options['store']) {
    let actions = instance.$options['store']['_actions'] || {}
    if (actions) {
      let tempActions = {}
      Object.keys(actions).forEach(key => {
        tempActions[key] = actions[key][0]
      })
      registerActionHandle(tempActions)
    }
  }
}
const registerVue = (instance) => {
  if (instance.$options.methods) {
    let actions = instance.$options.methods || {}
    if (actions) {
      registerActionHandle(actions)
    }
  }
}

const GlobalError = {
  install: (Vue, options) => {
    // console.log(Vue);
    Vue.config.errorHandler = errorHandler;
    Vue.mixin({
      beforeCreate() {
        registerVue(this)
        registerVuex(this)
      }
    })
    Vue.prototype = {
      ...Vue.prototype,
      $throw: errorHandler
    };
  }
};
export default GlobalError;
