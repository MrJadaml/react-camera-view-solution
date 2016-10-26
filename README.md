## Part 1
#### Use React JSX to build a user interface.

Your first step should be to diagram out the component hierarchy of the
app using the gifs below as a reference. Don't worry about the sorting or add-to-cart functionallity
at the moment, just focus on the arangment and nesting of elements on the page.
At this juncture you should also not be worrying about class names and styling.

What logical collection of elements should be grouped together to comprise a componenet?
Of those components which ones should be subcomponents of another component?

Once you have sketched out the component hierarchy start to implement a static version of it in React.

HINT: For iterable components you can create a temp array with a few
items in it (doesn't really matter what is in it, could just be `[1,2,3]`).
It should populate a compoent on the page for each item in the placeholder array.

You will likely see the following **Warning** in the console
>"Warning: Each child in an array or iterator should have a unique "key" prop."

You can ignore that for now. It is just a warning and should break
anything.

In a later lecture we will talk about how to pass data into these
components so that each one will be different.


## Part 2
#### Use synthetic events to build an interactive React user interface.

Use Materalize to style the app. You will want to have the CSS, JS files and jQuery via CDN as well as the google fonts Material Icons.
Feel free to reference your Angular Camera shop to quickly match up the styling.
Everything should work just the same with the exception of the Select form control.
Mirror the classes for the Select form control from your Angular app for now.
Later on we will talk about what it will take to get it to show up on the page.

## Part 3
#### State + Props

At this point your camera shop app should have the compenent structrure all laid out and styled up with Materialize.
Your next step will be to provide your application with some state (data).
Use the following camera data to set the initial state of your app.

```javascript
[
  {
    id: 1,
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 4,
    price: 369.99,
    onSale: true
  }, {
    id: 2,
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2,
    price: 1099.0,
    onSale: false
  }, {
    id: 3,
    title: 'Nikon D810A',
    image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 3,
    price: 3796.95,
    onSale: true
  }
]
```

Once you have set the initial state of the app, utilize props to have relavant data flow down to the components that need it.
Once your components have the data they need you will be able to use `{this.props.YOUR_DATA}` to populate the elements with the camera data.


#### Synthetic Event Handlers
With our initial data in place you can start working on event handlers, of the syntethic kind.
Think about the events you will want to handle on the page.
You will need to handle a click event with the "ADD TO CART" button, as well as one for the trash icon in the cart that will remove a camera option from cart.
You will also want to handle a change event for when a user types into the search input.
This event should update the list of cameras filtering out any that don't have a field that matches the input text.

The event handler in which you update the state, with `this.setState({ STATE_TO_BE_UPDATED })`, will be defined in the same component where the `getInitialState` method for the state to be updated is defined.

Remember, you can give subcomponents access to methods defined in parent components through props, much in the same was as you would with state.


## Part 4
#### Manipulate components throughout the component life cycle


## Part 5

- Use Material UI to build a React user interface.

## Part 6

- Use React Router to build a React user interface.

<hr>

# React Camera View Solution

In this assignment, you will make a React clone of the Angular Camera
View app you recently built.

## Example in action

![Camera Shop Example](images/camera_example.gif)

## Example Data


## Part 1 - Requirements

The camera shop page will require the following:

1. Display of the data in some format.
1. The price is formatted into a currency
1. The words "On SALE!" (or some form) are used when `onSale` is true
1. The ability to sort by name or rating (default is name)
1. The ability to search to filter the results (keeping the same order).
1. A custom filter to handle the conversion of the rating from a number
   to asterisks. It is assumed that the rating will be an integer.

## Part 2 - Requirements

The goal of part 2 is to add cart functionality.

![Camera Shop Example Part 2](images/camera_example_part2.gif)

1. When the user clicks "Add to Cart", the cart manages the item
   inserted. Subsequent adds increase the quantity of the item.
1. User can remove an item from the cart by clicking on a button (it
   will remove the entire quantity of that item).
1. The subtotal, tax, and total are calculated in place.

<hr>

## Setup

Use Brunch to create a new React application and install its dependencies.

```shell
brunch new react-camera-view --skeleton ryansobol/with-react
```

To start up your application run the npm start script.

```shell
npm start
```

Create a server.js file




React components are placed in the `app/components` directory and are combined into the `public/app.js` file on build.

**NOTE:** Each React component lives in a module so can be shared with other modules using [ES6 module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) syntax.

```shell
la app/components
```

## Resources
- [Brunch](http://brunch.io)
- [React](https://facebook.github.io/react/)
