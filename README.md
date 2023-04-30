# Activity Scheduler - Web Application

This is a web application that allows users to schedule activities and view weather data for a chosen location. The front-end of the application was built using React and it integrates with the OpenWeatherMap API to retrieve weather data.

**Installation and Setup**
To run the application locally, you will need to have Node.js and npm installed on your computer. Once you have installed Node.js, download the project and navigate to the project directory in your terminal.
Run the following command to install the necessary dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run with [Docker](https://www.docker.com/)

```sh
docker build -t activity_scheduler:latest .
```

```sh
docker run -p 3000:3000 activity_scheduler:latest
```

## Followup Questions

**1. Libraries Used**

- **React**: It is a popular front-end JavaScript library used for building user interfaces. I chose React as it is recommended in the requirements document and also because of its ability to handle complex state changes efficiently.

- **React Router:** It is a popular routing library for React that enables the creation of multiple pages in a single-page application. I used it to handle routing and page navigation within the application.

- **Tailwind CSS**: It is a utility-first CSS framework that enables rapid UI development. I used it for responsive design and to create a presentable UI.

- **react-hot-toast:** A lightweight Notifications library for React.

**2. Improvements or New Features**

- User authentication and authorization to ensure that only authorized users can schedule, edit, or delete activities.

- Ability to add multiple task performers for a single activity.

- Integration with a backend and database to enable data persistence and retrieval.

- Ability to filter activities by a task performer, pitch, or activity type.

- Integration with a notification system to remind task performers of upcoming activities.

- Ability to view weather data for multiple locations and display it on a map.

**3. Most Difficult and Time-Consuming Parts**

- Implementing the validation to ensure that there is only one activity scheduled for a pitch at a time.

- Retrieving and parsing weather data from the OpenWeatherMap API.

- Designing and implementing a responsive user interface that looks presentable on both desktop and mobile devices.

**4. Key Considerations for Deploying the Application for Customer Use/Production**

- Ensuring the security of user data and preventing unauthorized access or modification.

- Optimizing the application for performance and scalability to handle large amounts of traffic and data.

- Ensuring compatibility with different web browsers and devices to provide a consistent user experience.

- Setting up a reliable hosting infrastructure that can handle expected traffic and usage patterns.

- Setting up a backup and disaster recovery plan to ensure that user data is not lost in case of a server failure or outage.
