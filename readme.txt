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
 
 log2:
 email setup used by resend it is simple can be done using api keu and nodemailer for handiling th eothe random
  but as we need the verified domain for resend for multiple account we can only send email to our account for the testing purpose 


comment : error handling and signup page added 

        error handling in the sign-up page where we added some error that occurs from zodError , Conflict or any random error 
        and we also added that to showup in the html format to render it when email or password is not accourding to the authvalidation

        then we added the sign-in just copied the whole signup and change the text 
        then added the signIn method in auth-router that handles the signin 
        during that had problem with the typescript as it is showing the error to the req that we should be able to use from the createContext but has error continued...
        added ExpressContext=inferAsyncReturnType<typeof createContext> like this  which was soln from gpt  where inferAsyncReturnTypeis fron trcp server

        now the problem is fixed we need the better user interaction 
        so we added certain info for the routing like if the user is in cart page when he sign -in then we will redirect him to that page instead of the home page
        if the user = seller then we will send him to the dashboard whichi is /sell  where there can manage the Products
        if nothing then home page
        then certain error handling too

        after that we dont want to show the navbar with create account and signin when user are already logged in so 
        for that we needed the user we get that from our custom payload-utils that we created the getServerSideUser function 
        and pass the nextcookies to it has cookies has the token to know that user is logged in or not 
        then after that
      next_reminder : need to make the navbar dynamic 



      comment: added the userNavbar 
      which is required after we login we want ot show that navbar with teh user profile and other options 
      it is easier and optimizable if we create a sepearte file for that so we created the userNavbar 
      and working on the architecture of the model in the excalidraw by vitualizing how it should be 
      
      for next day --> work on archeciture of the data model and where we keep our data like enabling the uploads 

      



working on the next page design and the checkout and the orther through the diagramic model adn trying the pest to work or make it work

