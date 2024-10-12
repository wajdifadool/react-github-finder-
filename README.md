# GitHub Finder

 **GitHub Finder**, a project built to search for GitHub users and display their profile data using the **GitHub REST API**. This project demonstrates how to work with third-party APIs, use the **Context API with reducers**, and create an appealing UI using **Tailwind CSS** and **Daisy UI**.

## Demo

Search for a user by entering their username into the search field. If no username is provided, an alert will be shown. Search results display user cards with basic information and the option to view a detailed profile. The detailed profile page includes the user's avatar, bio, location, stats (followers, following, etc.), and a list of their latest 20 repositories with links to each one.

If an invalid URL is entered, a custom 404 Not Found page is displayed.

> DEMO GIF:

![ezgif-4-717368943d](https://github.com/user-attachments/assets/f34c9e37-35d4-41e8-9c8b-f1dd562fa8d9)



## Features

- **Search GitHub Users**: Use the GitHub REST API to search for users by username.
- **User Profiles**: Display detailed user profiles with bio, location, follower stats, and latest repositories.
- **Alerts**: Alert messages for missing search input, displayed and dismissed dynamically.
- **Routing**: Dynamic routing for user profiles and a custom 404 page for invalid routes.
- **State Management**: Context API and `useReducer` hook for managing application state.
- **UI Design**: Styled with **Tailwind CSS** and **Daisy UI** components for clean and responsive layouts.
- **Deployed on Vercel**: Easily accessible through Vercel deployment for a fast and secure user experience.

## Technologies Used

- **React**: Front-end JavaScript framework for building user interfaces.
- **Context API with Reducers**: For managing global state more efficiently.
- **GitHub REST API**: To fetch GitHub user data and repositories.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **Daisy UI**: Tailwind component library for rapid development of UI components.
- **React Router**: For handling dynamic routing between pages.


## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/wajdifadool/react-github-finder-.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Add a GitHub API key:
    - Create a `.env` file in the root directory.
    - Add your GitHub API key: 
      
      ```bash
      REACT_APP_GITHUB_TOKEN=your-github-api-token
      ```

4. Run the app:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
