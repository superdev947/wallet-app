# Wallet App

A modern cryptocurrency wallet application built with React Native and Expo, featuring wallet management, token tracking, and transaction capabilities.

## 🚀 Features

- **Wallet Management**: Create, edit, and manage multiple cryptocurrency wallets
- **Token List**: View and track various cryptocurrency tokens
- **Token Details**: Detailed information and charts for individual tokens
- **Transaction History**: Track received transactions
- **Settings**: Customize app preferences and configurations
- **Responsive UI**: Built with Native Base for a polished user experience
- **State Management**: Redux with Redux Saga for efficient state handling
- **Data Persistence**: Redux Persist for offline data storage

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS: [Xcode](https://developer.apple.com/xcode/) (macOS only)
- For Android: [Android Studio](https://developer.android.com/studio)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/superdev947/wallet-app.git
cd wallet-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## 🏃 Running the App

### Start the Development Server
```bash
npm start
# or
yarn start
```

### Run on Android
```bash
npm run android
# or
yarn android
```

### Run on iOS
```bash
npm run ios
# or
yarn ios
```

### Run on Web
```bash
npm run web
# or
yarn web
```

## 📁 Project Structure

```
wallet-app/
├── src/
│   ├── assets/              # Images, icons, and other static assets
│   ├── components/          # Reusable React components
│   ├── constants/           # App constants (colors, images, layouts)
│   ├── navigations/         # Navigation configuration
│   ├── redux/               # Redux store, actions, reducers, and sagas
│   │   ├── actions/         # Redux action creators
│   │   ├── reducers/        # Redux reducers
│   │   └── services/        # Navigation and other services
│   ├── scenes/              # Screen components
│   │   ├── Home/            # Home screen
│   │   ├── Received/        # Transaction history
│   │   ├── Settings/        # Settings screen
│   │   ├── TokenDetail/     # Token detail view
│   │   ├── TokenList/       # Token list view
│   │   ├── WalletCreate/    # Wallet creation
│   │   └── WalletEdit/      # Wallet editing
│   ├── theme/               # Custom theme and styled components
│   │   ├── components/      # Styled Native Base components
│   │   └── variables/       # Theme variables
│   └── Router.js            # Main app router
├── App.js                   # App entry point
├── app.json                 # Expo configuration
├── package.json             # Dependencies and scripts
└── babel.config.js          # Babel configuration
```

## 🔧 Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development framework and platform
- **Redux**: State management
- **Redux Saga**: Side effect management
- **Redux Persist**: State persistence
- **React Navigation**: Navigation library
- **Native Base**: UI component library
- **Axios**: HTTP client
- **Moment.js**: Date/time manipulation
- **React Native SVG**: SVG support
- **React Native Slide Charts**: Chart visualizations

## 📱 Screens

- **Home**: Main dashboard with wallet overview
- **Token List**: Browse available cryptocurrency tokens
- **Token Detail**: Detailed view with charts and information
- **Received**: Transaction history and received payments
- **Wallet Create**: Create new wallet
- **Wallet Edit**: Edit existing wallet details
- **Settings**: App settings and preferences

## 🎨 Theming

The app uses a custom theme built on Native Base with:
- Custom color schemes defined in `src/constants/Color.js`
- Themed components in `src/theme/components/`
- Platform-specific variables for iOS and Android

## 🔐 State Management

The app uses Redux for state management with:
- **Redux Saga**: For handling asynchronous operations
- **Redux Persist**: For persisting state across app restarts
- **Redux Thunk**: For dispatching async actions

## 📄 License

This project is private and proprietary.

## 👤 Author

**superdev947**

## 🤝 Contributing

This is a personal project. If you'd like to contribute, please reach out to the repository owner.

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React Native and Expo
