# PlainID Demo App 

A demo app as requested by PlainID.

This project was built using [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

### Task details

#### Short Description
In this task, you will create a small subset of the PlainID Demo App. 
An example result should look like the image (attached: “final result.jpg”).
It should retrieve the data from a simple json stub file (attached: “data.json”).

#### Detailed Explanation
The code you will build queries the "data.json" stub file asynchronously to simulate an API GET request.
Once information returns, render the app as shown in the "final result.jpg" image.
All the assets for that assignment are located in the attached “assets.zip” file.

#### User Flow
Once the app is fully rendered the user can switch between resources and the details view (in the middle) should update itself accordingly.
The user can filter (by key strokes) the result using the search field in the top of the resources list view.
Please note that the filter mechanism should be done by requiring the "data.json" stub file rather than just filter the results within the view.

#### Guidelines
Implementation should be done using one of the following frameworks: Backbone.js / Angular.js / React.js.

The code should be placed in an open github repository and should have a read-me with design choices.

## Installation

Install `yo`, `grunt-cli`, `bower`, `generator-angular` and `generator-karma`:

~~~~
npm install -g grunt-cli bower yo generator-karma generator-angular
~~~~

You will need to install Ruby and Compass:

- Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/) or use Homebrew.
- Install the compass gem:

~~~~
gem install compass
~~~~

## Build & development

Run `grunt` for building and `grunt serve` for preview.


### Run locally

1. Run `grunt`.
2. From the project root folder navigate to the `dist` folder.

	~~~~
	cd dist 
	~~~~
	
3. Run the server

	~~~~
	# Python 2.x
	python -m SimpleHTTPServer 
	~~~~
	~~~~
	# Python 3.x
	python -m http.servr 
	~~~~
	
4. Navigate to [http://localhost:3000/](http://localhost:3000/).


## Testing

Running `grunt test` will run the unit tests with karma.

## Themes

This project is shipped with 2 themes out of the box:

- Light (default).
- Dark.

To switch theme, change the `class` attribute on the `<body>` in the `index.html` file.

For instance, to use the Dark theme change:

~~~~
<body ng-app="demoApp" class="theme-dark">
~~~~

### Custom themes

If you wish to create your own theme do the following

1. Open `styles/variables.scss`.
2. Find the `$themes` variable.
3. Duplicate one of the existing themes and give it a unique name.
4. Modify the variables in your new theme map.
