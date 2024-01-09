self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(cachedResponse => {
                return cachedResponse || fetch(e.request)
            })
    )
    // caches.match(e.request.url).then(res => {
    //     if (!res)
    //         console.log(e.request.url + " is not in the cache")
    //     else 
    //         console.log(res.url, "is exists in cache")
    // })
    // console.log('URL Requested: ', e.request.url)
})