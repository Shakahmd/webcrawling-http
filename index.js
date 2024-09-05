
 export const normalaizeUrl = (urlString) =>{
       const urlObj = new URL(urlString) 
        // console.log(urlObj)
       const connString = `${urlObj.hostname}${urlObj.pathname}`
        if(connString.length > 0 && connString.slice(-1) === '/'){
            return connString.slice(0,-1)
        }

        return connString
}



const result = normalaizeUrl(`https://COURSEAPP.com/course/`)

console.log(result)