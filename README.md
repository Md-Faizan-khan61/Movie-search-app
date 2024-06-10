
# Movie Search App

This is a simple movie search web application built with React and Vite. It allows users to search for movies and displays a list of results using the OMDb API.

## Features

- **Search:** Users can search for movies by entering keywords in the search bar.
- **Results Display:** Displays a list of movies matching the search query.
- **Detailed Information:** Provides detailed information about each movie, including title, year, plot, and poster image.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **OMDb API**: An API to fetch movie information.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/md-faizan-khan61/movie-search-app.git
   ```
2. Navigate to the project directory
   ```sh
   cd movie-search-app
   ```
3. Install dependencies
   ```sh
   npm install
   # or
   yarn
   ```

### Usage

1. Create an account on [OMDb API](http://www.omdbapi.com/apikey.aspx) and obtain your API key.
2. Create a `.env` file in the root directory of the project.
3. Add your API key to the `.env` file
   ```env
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```
4. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. Open your browser and visit `http://localhost:3000` to view the app.

### Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages. Make sure to set up environment variables for your production environment.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [[https://movie-search-app61.netlify.app/](https://movie-search-app61.netlify.app/)]
