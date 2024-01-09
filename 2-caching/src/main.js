document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cache-json').addEventListener('click', () => cacheFiles(['https://jsonplaceholder.typicode.com/posts']))
    document.getElementById('cache-all').addEventListener('click', () => cacheFiles(['https://jsonplaceholder.typicode.com/posts', 'bg.jpg', 'style.css', 'worker.js', './']))
    document.getElementById('cache-remove').addEventListener('click', removeCache)
    document.getElementById('unregister').addEventListener('click', unregisterWorker)
    document.getElementById('register').addEventListener('click', registerServiceWorker)
})
const serviceWorker = navigator.serviceWorker

const unregisterWorker = async () => {
    const registration = await serviceWorker.getRegistration('worker.js')
    await registration.unregister()
    setStatus('service worker unregistered')
}

const registerServiceWorker = async () => {
    if(!('serviceWorker' in  navigator)) {
        return setStatus("Service Worker API is not supported")
    }
    try {
        const w = await serviceWorker.getRegistration()
        if(w && w.active) {
            setStatus('service worker is active')
        }else{
            await serviceWorker.register("worker.js")
            setStatus('successfully register service worker')
        }
    } catch(err) {
        setStatus('Error when getting service worker')
        console.log(err)
    }

}

const setStatus = (status) => {
    document.querySelector('.status').innerHTML = status
}

// You can name the cache anything you want
const cacheName = "caching-example"

const cacheFiles = async (files) => {
    if(!('caches' in window)) 
        setStatus('caches not supported in your browser')
    try {
        let cache = await caches.open(cacheName)
        await cache.addAll(files)
        setStatus(files.length + ' files successfully cached')
    }catch(err) {
        setStatus('failed to cache files')
    }
}

const removeCache = async (files) => {
    if(!('caches' in window)) 
        setStatus('caches not supported in your browser')

    await caches.delete(cacheName)
    setStatus('caches removed')
}