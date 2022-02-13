# Application Overview
Application to track and explore spend on applications by business capability.
- Tree navigation to filter business capabilities
- Filters to restrict data based on a spending threshold
- Load previously saved filters (relies on local storage)
- Show and hide details

# Setup
- Clone the repository
- Inside the root folder add a .env file with the server URL e.g.
```
REACT_APP_SERVER=http://localhost:8080
```
- `npm install` from the root folder
- `npm start` from the root folder

> Note: React Scripts 4.0.3 has an issue when hot-reloading with some version of webpack. https://github.com/facebook/create-react-app/issues/11773. Error fixed on my environment by updating package.json with "react-error-overlay": "6.0.9".  

# Assumptions & Notes For Reviewers

Due to time constraints I simplified or skipped over some areas I would normally spend time on ...

### Testing
- Tests: deprioritized testing as there won't be changes to this application code in the future

### Styles
- Theme: I used my own theme and did not follow the UBS style guide as I don't have access to any of the assets
- Responsiveness: The app has a fluid layout and should work well on desktop/laptop/table screen sizes but the fixed width sidebar will prevent it from working well on mobile. If I were to spend longer on this app I'd  

### API
- Server: I focused on developing the client and did not attempt to refactor or enhance the server
- Data Volumes: Assuming volume of data will not increase beyond the current size of `data.json`
> Note: If the volume of data were to grow I would not import the entire dataset when loading the application. I would update the server to include enpoints to provide summary data and paginated/filtered details. I would also test the UI with a larger number of BCs and applications

### Functionality
- I am not adding any dependencies to keep the app simple and easy to review
> Note If this was my a greenfield project I would add the following:
>  - StyledComponents - improve organization and reusability of styled components
>  - D3 or Visx - add interactive visualiations e.g. track spend over time, compare business categorys and identify outliers
>  - FramerMotion - more performant, composible animations e.g. animate showing application details or expanding the nav tree