let eventHandler = null

const observerble = obj => {
  Object.keys(obj).forEach(key => {
    let val = obj[key];
    const observers = new Set();
    Object.defineProperty(obj, key, {
      get(){
        if(eventHandler) observers.add(eventHandler);
        return val
      },
    })
  })
  return obj
}

export default observerble