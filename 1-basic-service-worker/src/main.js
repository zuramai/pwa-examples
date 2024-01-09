const s = navigator.serviceWorker
const setStatus = (status) => {
    document.querySelector('.status').innerHTML = status
}

window.addEventListener('DOMContentLoaded', () => {
    checkRegistration()
    document.getElementById('register').addEventListener('click', register)
    document.getElementById('unregister').addEventListener('click', unregister)
})

const checkRegistration = async () => {
    if (!('serviceWorker' in navigator)) {
        setStatus('Service Worker API is not supported in your browser')
        return 
    }

    const registration = await navigator.serviceWorker.getRegistration()

    if (!registration) return setStatus('No service worker registered')

    setStatus('Service Worker is registered!')
}

const register = () => {
    try {
        s.register("worker.js")
        setStatus("success register worker!")
    }catch(err){
        setStatus("error register worker: "+err.message)
    }
}

const unregister = () => {
    try {
        s.unregister()
        setStatus("worker unregistered!")
    }catch(err){
        setStatus("error unregister worker: "+err.message)
    }
}