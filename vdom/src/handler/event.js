export const switchComponent = (removeTag, insertTag, position, switchAll=false) => {
  const key =removeTag.slice(1).toLowerCase()
  $root.querySelector(removeTag).remove()
  $root.querySelector(insertTag)
    .insertAdjacentHTML(position, ComponentRenderer[key]())
  setEvent(removeTag)
}

export const listInitHandler = () => {
  store.setState({ ...store.state })
  switchComponent("#postlist", "#header", "afterend")
}

export const listOrderHandler = (factor) => {
  const oldState = [...store.state.demoData]
  oldState.sort( (eleA, eleB) => 
    new Date(eleA.date).getTime() * factor 
    - new Date(eleB.date).getTime() * factor 
  )
  store.setState({ demoData : oldState });
  switchComponent("#postlist", "#header", "afterend")
}

export const listNameHandler = (target) => {
  const oldState = [ ...store.state.demoData ]
  store.checkApi.isOkCache = false
  store.setState({ 
    demoData : oldState.filter( ele => ele.writer === target.innerHTML) 
  })
  $root.innerHTML = App()
  vdom.componentId.map(setEvent)
}

export const pageInitHandler = () => {
  store.setState({ ...globalThis.state })
  $root.innerHTML = App()
  vdom.componentId.map(setEvent)
}
export const filterHandler =() => {}
export const pageOrderHandler = () => {}