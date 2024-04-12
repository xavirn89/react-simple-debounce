# react-simple-debounce

`react-simple-debounce` is a lightweight and easy-to-use debounce hook for React applications. This hook allows you to delay the execution of a function or the return of a value until after a specified delay has elapsed since the last invocation. It is particularly useful for optimizing performance by reducing the rate at which functions can execute during activities such as resizing windows, typing, or making API calls based on user input.

## Features

- **Simple API**: Easy to integrate with just a few lines of code.
- **Flexibility**: Handles both direct values and functions, providing the output after the specified delay.
- **TypeScript Support**: Fully typed to enhance the development experience in TypeScript environments.

## Installation

Install the package using npm:

```bash
npm install react-simple-debounce
```

## Usage

### Importing the Hook

Import the `useDebounce` hook into your React component:

```javascript
import useDebounce from "react-simple-debounce";
```

### Basic Usage

To debounce a value:

```javascript
import { useState } from "react";
import useDebounce from "react-simple-debounce";

function ExampleComponent() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  function handleChange(event) {
    setValue(event.target.value);
  }

  // You can use `debouncedValue` for operations like API calls, validations, etc.
  return <input type="text" value={value} onChange={handleChange} />;
}
```

### Debouncing a Function

To debounce a function:

```javascript
const logFunction = () => {
  console.log("This will run after the delay!");
};
const debouncedLog = useDebounce(logFunction, 500);

// Trigger `debouncedLog` in response to events or other interactions.
```

### Parameters

- **input**: `ValueOrFunction<T>` - This is either a direct value or a function that returns a value. The hook debounces this input.
- **delay**: `number` - The amount of time in milliseconds to delay.

### Return Value

- **Debounced Output**: `T | undefined` - Provides the debounced output. If `input` is a function, it returns the result of the function. Returns `undefined` until the delay has elapsed for the first time.

## Contributing

Contributions to improve the package are welcome. Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
