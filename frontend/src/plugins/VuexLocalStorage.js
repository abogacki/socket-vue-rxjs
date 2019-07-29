import debounce from 'lodash/debounce'

let localStorageAvailable = () => {
  var test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

let setupLocalStorage = store => {
  let previous = localStorage.getItem('app')
  if (previous) {
    store.replaceState(JSON.parse(previous))
  }
}

let debouncedUpdate = debounce(
  state => localStorage.setItem('app', JSON.stringify(state)),
  500
)

const VuexLocalStorage = store => {
  // Plugin
  if (!localStorageAvailable()) {
    return false
  }

  setupLocalStorage(store)

  store.subscribe((mutation, state) => {
    debouncedUpdate(state)
  })
}

export default VuexLocalStorage
