function loggerMiddleware(req: any) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    return req;
  }
  
  export default loggerMiddleware;
  