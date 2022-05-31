const assets = ["/", "./index.html", "./main.js", "./modules/add-box-module.js", "./modules/remove-box-module.js", "./modules/search-box-module.js", "./modules/retreive-box-module.js", "./language-module.js"]

//storing the needed resources (or assets) in cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("assets").then(cache => {
            cache.addAll(assets);
        })
    )
})

//retreiveing the assets from cache
self.addEventListener("fetch", event => {
    event.respondWith(
        //search in the cache
        caches.match(event.request)
        .then(response => {
            if (response) {
                //cache hit 
                return response;
            } else {
                //cache miss - go to the network
                return fetch(event.request);
            }
        })
    )
})