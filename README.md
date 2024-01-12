## A Backend with Login and SignUp functionalities
### Login at `/login` route and signup at `/register` route. Both with `POST` request 

<br/>

### Login expected data: `In JSON`
#### {
####  email : xyz@example.com,
####  password: 12345678
#### }
<br/>

### Register/ signup expected data : `In JSON`
#### {
####  name : XYZ
####  email : xyz@example.com,
####  password: 12345678
#### }
<br/>
<br/>


### NOTE: Create a .env file in root directory with two things:
#### PORT=_port-number_
#### MONGO_URL=_mongodb url connection string with username and password_

### Just do a `API POST` request at `/register` or `/login` route with suitable data.
