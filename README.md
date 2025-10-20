# Pokedex CLI

A REPL (Read-Eval-Print Loop) pokedex built in TypeScript that allows you to explore the Pokemon world, catch Pokemon, and manage your collection from the command line.

## Description

This project is a fully functional Pokedex CLI that uses the PokeAPI to fetch Pokemon data. It implements a REPL interface where users can interact with various commands to explore locations, catch Pokemon, inspect their collection, and navigate through the Pokemon world. The application features an in-memory cache for optimal performance and includes comprehensive error handling.

Key features:

- Interactive REPL interface
- Pokemon data fetching from PokeAPI
- Location exploration and navigation
- Pokemon catching and collection management
- In-memory caching for improved performance
- Comprehensive type safety with TypeScript

## Getting Started

### Dependencies

- Node.js (version 16 or higher)
- TypeScript (^5.9.3)
- npm or yarn package manager

### Installing

1. Clone the repository:

```bash
git clone <repository-url>
cd pokedex
```

2. Install dependencies:

```bash
npm install
```

### Executing program

1. Build the project:

```bash
npm run build
```

2. Run the application:

```bash
npm start
```

Or use the development script for build and run:

```bash
npm run dev
```

## Available Commands

- `help` - Display available commands and their descriptions
- `map` - Show the next locations in the Pokemon world
- `mapb` - Show the previous locations in the Pokemon world
- `explore <location>` - Explore a specific location to find Pokemon
- `catch <pokemon_name>` - Attempt to catch a Pokemon
- `inspect <pokemon_name>` - Inspect details of a captured Pokemon
- `pokedex` - Display your collection of caught Pokemon
- `exit` - Exit the Pokedex CLI

## Help

If you encounter issues:

1. Make sure you have a stable internet connection as the app fetches data from PokeAPI
2. Ensure you're using a valid Pokemon name when using catch or inspect commands
3. Check that you've built the project before running (`npm run build`)

For common command usage:

```bash
help
```

## Architecture

The project follows a modular TypeScript architecture with:

- **REPL System**: Handles user input and command processing
- **State Management**: Maintains application state including Pokemon collection and navigation
- **API Integration**: Interfaces with PokeAPI for Pokemon and location data
- **Caching System**: In-memory cache for optimizing API requests
- **Command System**: Extensible command pattern for adding new functionality

## Testing

Run tests with:

```bash
npm test
```

## Authors

- Built following the [Boot.dev TypeScript Pokedex Course](https://www.boot.dev/courses/build-pokedex-cli-typescript)

## Version History

- 1.0.0
  - Initial Release
  - Full REPL implementation
  - Pokemon catching and collection features
  - Location exploration and navigation
  - Caching system implementation

## License

This project is licensed under the ISC License - see the package.json file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) - The Pokemon API used for data fetching
- [Boot.dev](https://www.boot.dev/courses/build-pokedex-cli-typescript) - Educational platform that guided this project development
- [DomPizzie](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc) - README template reference
