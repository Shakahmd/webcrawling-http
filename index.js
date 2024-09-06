import { normalaizeHtmlUrl,normalaizeUrl,crawlingPages } from "./crawl.js";



  const crawl = async () =>{
    if(process.argv.length < 3){
        console.log('No website is provided !')
        process.exit(1)

    }else if(process.argv.length > 3){
         console.log("Too much command line argument !")

    }
      const baseUrl = process.argv[2]
       crawlingPages(baseUrl)
     console.log(`started crawling on ${process.argv[2]}`)
  }

  crawl()