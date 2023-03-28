# React Native App with Sanity Backend


This is a React Native app that uses the Sanity backend service to provide the API data needed for the app. The app is more like a delievery app for a resturants and more of Vuba Vuba


Follow the instructions below to run the app.

### Getting Started
To get started, first clone this repository to your local machine:

```
git clone https://github.com/kaybrian/Food_Delivery_app.git
```

Next, navigate to the project directory:
```
cd Food-Delivery
```

Install the dependencies:
```
npm install
```

### Set up Sanity Backend

Before running the app, you'll need to set up your Sanity backend. Follow these steps to get started:

- Sign up for an account on [Sanity.io](https://www.sanity.io/).
- Create a new project.
- Add a new dataset to your project.
- Import the schema and initial data using the sanity-cli tool:

```
sanity dataset import ./data.tar.gz
```

Note: Make sure to replace your-dataset-name with the name of your dataset.

### however, if you you dont have a dataset
1: change the directory to sanity
```
cd sanity
```

2. run the sanity local host server to install the data
```
sanity start
```

3. after all the change and entering your new data, deploy it to sanity
```
sanity deploy
```

## Running the App
Once you've set up your Sanity backend, you're ready to run the app.

To run the app in development mode, use the following command:
```
npm start
```

This will start the Metro Bundler and open the app in the Expo client.

Before the app can access your Sanity data, you'll need to add your read-only token to the sanity.js file in the src directory:

```
const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true,
  token: 'your-read-only-token'
})
```
Note: Make sure to replace your-project-id, your-dataset-name, and your-read-only-token with your own values.

### Building the App
To build the app for production, use the following command:
```
expo build:android -t apk
```
This will create an APK file that you can upload to the Google Play Store.

## License
This app is licensed under the MIT license. See the LICENSE file for more information.

## Contributing
Contributions are welcome! Please see the CONTRIBUTING.md file for more information.

## Acknowledgments
This app was created using [React Native](https://reactnative.dev/) and [Sanity](https://www.sanity.io/).
