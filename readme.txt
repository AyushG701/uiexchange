in this project first we 
UIExchange 
we setup the project in next js and then we created the basic structure that is needed for the application 

after the setup of the project we added shadcn ui for the ui and completed with creating the navbar and cart  functionality 

then after creating the navbar we added 2 different hooks that will be helpful from online which is useonclickoutside hook that helps to close the opened section from the navbar if clicked outside of it 

then after that added the config file with Product_categories list that can be used at differnt location for reusable component

we also added the formatPrice function in the utils.ts in lib for formating the price 
 added express , cross-env, 
 cross-env for managing the config of payload in the package.json

then integrated the payload : open source headless content management system  
and setup the selfhosting so we could be independent of the vercel hosting only 

here we are using the slateEditor or you can use lexical editor also 
all there payload related info can be just copied from the documentation and setup process shown 
in the payload website 
we used the mongodb , but postgresql can also be used but it has bugs right now so i used mongodb

add the mongodb connection string and 
 then in server.ts


we used the express server to connect to the payload and then we used the payload

for self hosing the server and to be independent of the vercel use 
the following setup file 
server.ts, tsconfig.server.ts and other just use  this commit as reference


 after getting our admin dashboard now we need to focus on the authentication


 in Authentication 

we first buit the client site sign up page with zod as the form validation done in the client side
now for the server we are goind to use tRPC


we setup teh trpc completed now working onth eh sign up page 



logs 
was solving the error regarding the trcp access . payload says its forbidden error i need little more research on that 
so solve thiat afater a wile 
 



