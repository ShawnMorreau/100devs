/*
Write a function that when given a URL as a string, parses out just the domain name and 
returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
const domainName = url => {
    url = url.split("/").filter(el => el.includes("."))[0]
    url = url.replace("www.","")
    url = url.replace(".com","")
    console.log(url)
}

domainName("http://github.com/carbonfive/raygun")// == "github" 
domainName("github.com/carbonfive/raygun")// == "github" 
domainName("http://www.zombie-bites.com")// == "zombie-bites"
domainName("https://www.cnet.com")// == "cnet"
domainName("www.cnet.com")// == "cnet"


