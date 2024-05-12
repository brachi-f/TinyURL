# TinyURL

The service is a tool for shortening URL addresses. The service is intended for business customers who post links to landing pages and web files. After the customer has registered for the service, he can enter the URL of a landing page, website or web file (for example, a PDF guide saved in Google Drive) and create a shortened url for it. The shortened URL is constructed from the TinyUrl service address with a parameter of the original URL identifier.

Our server application will provide the following features:

 - Shortening - URL shortening to get friendly and short addresses.
 - Tracking - the ability to track the number of clicks and hits on each
   link.
 - Targeting - possibility to map different sources to the same link to
   identify how much exposure each source brings.

### User manual:

Open the command line in the desired location on your computer, and    download the files:
 
```
git clone https://github.com/brachi-f/TinyURL.git
```

Install the required libraries:

    npm i

Run the app:

    npm run
***    
> :memo: **Note:**
> The database is of the MongoDB type, to run the application you need the connection string.

