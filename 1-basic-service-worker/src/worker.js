console.log('service worker registered!')
self.addEventListener('install', () => {
    console.log('installed')
})
self.addEventListener('activate', () => {
    console.log('activated')
})