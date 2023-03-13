function requestValidator(obj) {
    
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];              
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]; 
    const uriRegex = /^[\w.]+$/g;                                           
    
    const messageRegex = /^[^<>\\&\'\"]+$/g;
    

    if (!(obj.hasOwnProperty("method") && validMethods.includes(obj.method))) { 
       
        throw new Error("Invalid request header: Invalid Method"); 
    }

    if (!(obj.hasOwnProperty("uri") && (obj.uri === "*" || uriRegex.test(obj.uri)))) {
       
        throw new Error("Invalid request header: Invalid URI");    
    }

    if (!(obj.hasOwnProperty("version") && validVersions.includes(obj.version))) {
      
        throw new Error("Invalid request header: Invalid Version"); 
    }


    if (!(obj.hasOwnProperty("message") &&(obj.message === "" || messageRegex.test(obj.message)))) {
       
        throw new Error("Invalid request header: Invalid Message"); 
    }

    return obj;       
}