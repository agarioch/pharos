# Application Overview
TODO

# Setup
- Clone the repository
- Inside the `src` folder add a .env file with the server URL e.g.
```
REACT_APP_SERVER=http://localhost:8080
```
- `npm install` from the root folder
- `npm start` from the root folder

# Assumptions & Notes For Reviewers

### API
- I'm working on the assumption that the volume of data will not increase beyond the current size of `data.json`
- If the volume of data were to grow I would not import the entire dataset when loading the application. I would update the server to include enpoints to provide summary data and paginated/filtered details
- I would also test the UI with a larger number of BCs and applications

### Dependencies
- I am not adding any dependencies to keep the app simple and easy to review
- If this was my a greenfield project I would add the following:
  - StyledComponents - improve organization of styles
  - D3 or Visx - add better visualizations of the data
  - FramerMotion - more advanced, composible animations
  - Commitizen, Husky - git hooks and commit messages

### Styling
- Since I don't have access to UBS's style guide or fonts, I'm using my own theme & font choices