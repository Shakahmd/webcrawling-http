import {JSDOM} from "jsdom"


  const crawlingPages = async(url) =>{
       if(!url){
        console.log("No url provided !")
        return;
       }

       try {
        
        const response = await fetch(url)
          if(response.status > 399){
             return  console.log(`Error fetch with the status code : ${response.status} on ${url}`)
          }
           const contentType = response.headers.get("content-type")
           if(!contentType.includes("text/html")){
            console.log(`Non htm response, content-type : ${contentType} , onPage : ${url}`)
            return
           }
           
         console.log( await response.text())
       } catch (error) {
           console.log(`Error  fetching information from ${url},Error:${error.message}`)
       }
  }



  const normalaizeHtmlUrl = (htmlBody,baseUrl) =>{
        let url = [];
         const dom = new JSDOM(htmlBody)
         const linkElement = dom.window.document.querySelectorAll("a")
          for(const element of linkElement){
             if(element.href.slice(0,1) === '/'){
                //its relative url
                try {
                    const urlObj = new URL(`${baseUrl}${element.href}`)

                    url.push(urlObj.href)
                } catch (error) {
                  
                     console.log(`error from relative url:${error.message}`)
                }
              

             }else{

                 try {
                    
                    const urlObj = new URL(element.href)
                     url.push(urlObj.href)

                 } catch (error) {
                     console.log(`error from absolute url : ${error.message}`)
                 }
              
             }
            
               
          }
          
          return url
  }


 
 
 
 const normalaizeUrl = (urlString) =>{
       const urlObj = new URL(urlString) 
        // console.log(urlObj)
       const connString = `${urlObj.hostname}${urlObj.pathname}`
        if(connString.length > 0 && connString.slice(-1) === '/'){
            return connString.slice(0,-1)
        }

        return connString
}



  export {
    normalaizeHtmlUrl,
    normalaizeUrl,
    crawlingPages
  }

// const result = normalaizeUrl(`https://COURSEAPP.com/course/`)
// const htmlContent = `
//     <html>
//     <body>
//         <a href="https://courseapp.com/course1">Course 1</a>
//         <a href="/course2">Course 2</a>
//     </body>
//     </html>
    
// `;

// const baseUrl = "http://courseapp.com"
// const result2 = normalaizeHtmlUrl(htmlContent,baseUrl)

// console.log(result)
// console.log(result2)