export async function easyFetch (url, callback) {
    const response = await fetch(url);
    const data = await response.json();
    // dataAPI = data.data
    // metaAPI = data.meta
    
    callback(data)
}