# comp-manager
A modern beer competition manager

Make sure to configure your .env as provided in the example

To get Started

`yarn install`

Make sure you have openssl and mkcert installed for certain features HTTPS is required.
`choco install openssl` - also comes in git bash for windows.
`npm install -g mkcert`

#### Enable Https
in a separate secure folder run (../cert-auth for example)
`mkcert create-ca`

creates a valid localhost cert for the React app.

Make this certificate valid on your device.
In Windows open the start menu and type "certificates".
Select "Manage Computer Certificates"
Expand "Trusted Root Ceritification Authorities"
Right click on "Certificates" and select "All Tasks" -> "Import".
Click next
Enter the path for the crt file.
Proceed through the next few screens to import the certificate

-In /client-
`mkcert create-cert --ca-key ../../cert-auth/ca.key --ca-cert ../../cert-auth/ca.crt`

add the output files (cert.crt, cert.key) to the client .env file
Your client .env should look as follows:
`HTTPS=true
SSL_CRT_FILE=cert.crt
SSL_KEY_FILE=cert.key`

-In the root directory-
`openssl req -x509 -newkey rsa:4096 -keyout cert.key -out cert.crt -days 365`

Add the Cert, key and passphrase to the root .env and then also authorize
that crt file on Windows so that the Express server runs on https.

or follow the heroku [guide](https://devcenter.heroku.com/articles/ssl-endpoint)


### Development

to Start in development mode with nodemon/webpack-dev-server
`yarn start`

API Testing performed with mocha
`yarn test`

### Language support via Redux Store

add Strings to client/Language/[lang code].js and be sure to update master.js
so that they can be later translated/added to various localization versions.

### TODO

 - [ ] develop pages/components
 - [ ] api/Crud/Database
 - [ ] Authentication via Passport
