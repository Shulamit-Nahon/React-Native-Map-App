# Interactive Map Application with Weather Data

## Overview

This document outlines the detailed specifications for building an interactive map application using React Native that allows users to place markers and polygons on a map. The application displays weather data fetched from a free weather API.

## Technologies Used

* `React Native`: Framework for building native apps using `React`.
* `react-native-maps`: Library for integrating maps into `React Native` applications.
* `axios`: Promise-based HTTP client for making API requests.
* `react-navigation`: Library for navigation and routing in `React Native` applications.
* `OpenWeatherMap API`: `API` for fetching weather data based on geographic coordinates.
* `Google Maps API`: `API` for displaying interactive maps and managing map features like markers and polygons.

## Features

1. **Interactive Map**
   - Integration with a map provider to display the map.
   - Users can place markers on the map by tapping on the desired location.
   - Users can draw polygons on the map by tapping on multiple points to create vertices.

2. **Weather Data**
   - Integration with OpenWeatherMap API to fetch and display current weather data.
   - Fetches and displays weather data based on the selected marker or polygon location on the map, showing temperature, weather description, and location name.

3. **Mock Data**
   - Use of static data for initial map markers and polygons.

4. **User Interface**
   - Users can switch between "Marker Mode" and "Polygon Mode" using buttons.
   - A button to navigate to the Settings screen.
   - Displays fetched weather data in an overlay at the bottom of the screen when a location is selected.

5. **Responsiveness**
   - The application is designed to be responsive and works well on different screen sizes, including smartphones and tablets.


## Installation

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## API Usage Details
## Google Maps API
This project uses the Google Maps API to display the map and provide interactive features such as placing markers and drawing polygons.

### API Key

Obtain an API key from the Google Cloud Console.
Enable the necessary APIs for your project, such as the Maps SDK for Android, Maps SDK for iOS, and Places API.

### Environment Setup

Add your Google Maps API key to your project by including it in your --------------------.

### Installation

```bash
# using npm
npm install react-native-maps

# OR using Yarn
yarn add react-native-maps
```

### Usage
Import and use the MapView, Marker, and Polygon components from react-native-maps.


## OpenWeatherMap API
This project integrates with the OpenWeatherMap API to fetch and display current weather data based on the user's location or selected coordinates on the map.

### API Key
Obtain an API key from the OpenWeatherMap website.

### Environment Setup:

Add your OpenWeatherMap API key to your project by including it in your configuration file --------------.

### Installation

```bash
# using npm
npm install axios

# OR using Yarn
yarn add axios
```
### Usage
Import and use the axios library to make API requests to the OpenWeatherMap API. ---------------


## Author

**Shulamit Nahon**

I am Shulamit Nahon, a recent graduate in Computer Science from `JCT` (Jerusalem College of Technology). I am passionate about technology and software development, and I am currently seeking my first job in the field. With a strong foundation in programming and problem-solving skills, I am eager to apply my knowledge and contribute to innovative projects in a dynamic work environment.

Please contact me if you have any questions about the project or me.

## Screenshots

**Google Maps Screen**

<img height="400" src="/React-Native-Map-App/Screenshot/SmapsScreen.PNG">

