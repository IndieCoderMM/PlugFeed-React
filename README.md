<details>
<summary>Table of Contents</summary>

- [Plug Feed - React Challenge](#plug-feed---react-challenge)
  - [Live Demo](#live-demo)
  - [Challenge](#challenge)
  - [Stack](#stack)
  - [Implementation](#implementation)
  - [Installation](#installation)
  - [Todos](#todos)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)

</details>

# Plug Feed - React Challenge

> A frontend exercise from [react-take-home](https://github.com/reallabs/react-take-home)

This project aims to recreate the main offer feed of [**The Plug**](https://www.plugco.in/), which is used by influencers to access offers, track earnings and manage their accounts.

## Live Demo

You can visit the [deployed website here](https://indiecodermm.github.io/PlugFeed-React/).

<img src="./image.png" width="280" height="340" />

## Challenge

**Time Frame: 4 Hr**

The main goal was to build the mobile UI for the main feed using JSON data from the sample API endpoint.

- Communicate with API and receive JSON data ✔
- Render the data according to the provided Figma design ✔
- Create a seamless user experience similar to **The Plug** app ✔
- Handle failed API requests ✔
- Create UI for failed state ⏳
- Implement inline video playback ✔
- Optimize load time ⏳
- Optimize scroll performance ⏳

*Some features marked with ⏳ couldn't be implemented due to time limitation, but I plan to add them soon*

## Stack

This project is built with React. The main technologies used are:
- Create React App: To set up the project
- Fetch API: To get JSON data from API endpoint
- `prop-types` : Library for validating props during development
- `react-icons` : Rich and simple icon library
- `gh-pages`: To deploy on GitHub Pages

## Implementation

This app follows the following implementation details:

- **Data Fetching:** The app fetches data from the API when it starts. If the API request is successful, the data is used for rendering the content.

- **Component Structure:** The main components used in the app are:
  -  `Campaign` component - responsible for displaying each item in the feed
  -  `Media` component - handle each media object within a campaign item

- **Media Actions:** Each media item within a campaign has two buttons associated with it. One button allows the user to copy the track link, while the other button enables them to download the media content.

- **Video Playback:** Play button is displayed for video media items. When the play button is clicked, the video is played inline within the app.

## Installation

To run this project locally, follow the steps below.

1. Clone the repository to your local machine:

```bash
git clone git@github.com:IndieCoderMM/PlugFeed-React.git
```

2. Navigate to the project directory:

```bash
cd PlugFeed-React
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit http://localhost:3000 to view the JetFuel Plug Feed app.

## Todos

- [ ] Fix download button 🐞
- [ ] Create failed-UI with retry button 🎯
- [ ] Lazy loading 🎯
- [ ] Pull-to-refresh 🎯

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, feel free to reach out to me at hthant00chk@gmail.com.

## Acknowledgments

Special thanks to the JetFuel team for providing this frontend exercise.