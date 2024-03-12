## Running the App
- Install Docker
- `docker compose up`
- `docker compose build`
- Go to http://localhost:3000
- (If want to access backend) Go to http://localhost:5000/images

- Go to http://localhost:3000/unlimited 
- In above user can do multiple clicks or reaction to an image

- Go to http://localhost:3000 or http://localhost:3000/images 
- In above user can do one click at a time. If user gives one reaction, he or she can only do other reaction but cannot do multiple reactions.


## Notes and Citations
- Used http://placehold.it/ to generate dummy images with only texts
- Have taken help from medium.com for docker-compose yaml files syntax
- Have taken help from Adobe react spectrum documentation for the icons https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html
- Have taken help from https://medium.com/@natnael.awel/how-to-setup-testing-for-typescript-with-express-js-example-83d3efbb6fd4 for jest and supertest setup
- Also taken help from stackoverflow for some syntax and setup errors
- Taken help from google for css grid `grid-template-columns: repeat(4, 1fr);` to keep 4 images in one row

## Assumptions
- User can click multiple times on thumbs up and thumbs down buttons.
- App will keep the count of it and keep tracking it.
- When the browser is refreshed the count is still there for a new user since the count is updated in the backend.
- Did not use the database only one list of image object. 
- Created APIs and updated the thumbsUp and thumbsDown accordingly using the image id.

## Tech stack used
- Frontend
- React & Typescript and Adobe React spectrum for the thumbsup and down icons
- Backend
- Node, express, typescript and jest and supertest for tests

## Design

### Frontend


### List of available APIs

API | Description
--- | ---
`GET /images` | Fetches all images with it's metadata
`PUT /images/thumbs-up/:id` | Update the thumbs up count
`PUT /images/thumbs-down/:id` | Update the thumbs down count
