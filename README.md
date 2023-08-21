# Vulnerable Web Applications

This repository contains three server applications written in Express.js, Flask, and Laravel, respectively. Each of these applications has the same five security vulnerabilities implemented:

- Cross-site scripting
- Denial of service
- Path traversal
- Remote code execution
- SQL injection

The vulnerabilities in these applications are implemented in a straightforward manner, making them easy to identify by experienced programmers. It is important to note that the applications may contain other security issues that are unintended. Therefore, it is not recommended to use any of the code from these applications as a model for building your own application. **This code is an example of what not to do.**

## Installation

### Example Database

The execution of the `sql-injection` enpoint depends on the [example database](https://www.sqlitetutorial.net/sqlite-sample-database/) from [SQLite Tutorial](https://www.sqlitetutorial.net). Download the file and move it into the [`assets` directory](./assets) as:

```txt
assets/chinook.db
```

The file is not included in this repository as SQLite Tutorial does not specify a license for the database. If they allow, we may add the file to the repository in a future commit.

### Express Application

Ensure you have [Node.js](https://nodejs.org/en) installed. We suggest using [nvm](https://github.com/nvm-sh/nvm) for installation if you have not done so already. Once Node.js is installed, open your shell and navigate to the [`express_application` directory](./express_application). Run

```sh
npm install
```

to install the necessary dependencies. After the dependencies are installed, you can start the Express.js server using:

```sh
npm run dev￼ 
```

or build the application using `npm run build` and start the dist version using `npm run start`. By default the Express application will run on `http://localhost:3000`.

### Laravel Application

Ensure you have [PHP](https://www.php.net/manual/en/install.php) and [composer](https://getcomposer.org/doc/00-intro.md) installed. We suggest doing so using [Herd](https://herd.laravel.com/) for Laravel development if you’re using macOS. Otherwise follow the installation instructions on the respective hompages. Once bothe are installed, open your shell and navigate to the [`laravel_application` directory](./laravel_application). Run

```sh
composer install
```

to install the necessary dependencies. After the dependencies are installed, create your environment file:

```sh
cp .env.example .env
```

and application key:

```sh
php artisan key:generate
```

You can now start the Laravel application using:

```sh
php artisan serve
```

By default the Laravel application will run on `http://localhost:8000`.

### Flask Application

Ensure you have [Python 3](https://www.python.org/) installed. We recommend using [pyenv](https://github.com/pyenv/pyenv) for installation if you have not done so already. Once Node.js is installed, open your shell and navigate to the [`flask_application` directory](./flask_application). To create a [virtual environment](https://docs.python.org/3/library/venv.html), run the following command:

```sh
python3 -m venv .venv
```

Activate the virtual environment:

```sh
source .venv/bin/activate
```

and install the dependencies by running:

```sh
pip install -r requirements.txt
```

Once the dependencies are installed, you can start the Flask application using:

```sh
flask --app main run
```

By default the Flask application will run on `http://localhost:5000`.

## Exploitation

Each application opens the default port of its respective framework. Refer to the installation instructions to find the port numbers. Upon starting, all applications expose the same five endpoints:

- `http://localhost:XXXX/cross-site-scripting` accepts the URL parameter `name`. This endpoint returns a simple HTML page that greets the value of the URL parameter in green text. Try creating a [Cross-Site Scripting exploit](https://example.com). If you don't know where to start, you might want to have a look at the [example requests](#example-requests).
- `http://localhost:XXXXX/denial-of-service` is an endpoint that accepts a JSON user list (`[{ "name": "John" }]`). This endpoint returns a plain text response by concatenating the user names. Try to create a [denial of service exploit](￼). This is the most challenging vulnerability to exploit. If you are unsure where to begin, you may refer to the [example requests](#example-requests) and consider the consequences of having a very long user list and the server executing numerous requests concurrently.
- `http://localhost:XXXXX/path-traversal` accepts the URL parameter `category`. This endpoint returns a different example JSON array depending on whether `artists` or `genres` is passed as the URL parameter. Try to create a [path traversal exploit](https://www.thehacker.recipes/web/inputs/directory-traversal). Can you get the server to return the contents of the [`passwds.txt` file](./assets/passwds.txt) in the parent directory of the example JSON files? If you don't know where to start, you might want to have a look at the [example requests](#example-requests).
- `http://localhost:XXXXX/remote-code-execution` accepts the URL parameter `amount`. This endpoint returns a plain text greeting which changes depending on the URL parameter. Try to create a path remote [code execution exploit](https://de.wikipedia.org/wiki/Remote_Code_Execution). If you don't know where to start, you might want to have a look at the [example requests](#example-requests).
- `http://localhost:XXXXX/sql-injection` accepts the URL parameter `search`. This endpoint returns a JSON list of music genres which changes depending on the URL parameter. Try to create a path remote [code execution exploit](https://www.thehacker.recipes/web/inputs/sqli). If you don't know where to start, you might want to have a look at the [example requests](#example-requests).

### Example Requests

With the notable exception of the denial-of-service vulnerability[^1], we provide example requests[^2] that implement the exploits of each application.

- The [`example-requests.sh` file](./example_requests/example_requests.sh) contains commands to execute the requests using [curl](https://curl.se/).
- If you're using macOS, we recommend using [RapidAPI for Mac](https://paw.cloud/) and provide an [`example-requests.paw` file](./example_requests/example_requests.paw) to import the example requests into RapidAPI.
- If you are using [Postman](https://www.postman.com/), you can import the example requests using the [`example-requests.json` file](./example_requests/example_requests.json).

[^1]: We chose not to provide an example of a Denial of Service (DoS) exploit, as the effectiveness of the exploit is highly dependent on the machine it is running on. We did, however, reproduce the DoS exploit of each application on our own machines.
[^2]: We recommend opening the example request URL of the cross-site scripting exploits in a browser to see the exploit in action.
