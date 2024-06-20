# oct23-express-blog-api

## Models to make

### Blog

- Title
- Content
- User (posted by)
- Created date
- Like 
- Image upload 
- Category/Tags/keywords 
- Audit history
	- user 
	- timestamp 


### Users 

- username
- blog post view history 

### Comments 
Join table in SQL, but subdocument in Mongoose that lives in Blog posts 
- user id 
- comment content 
- like


### Action Log 
- user id 
- route visited
- timestamp 
- result