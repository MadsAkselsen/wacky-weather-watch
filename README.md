# wacky-weather-watch

## Run with docker
Build the Docker image 
`make build`
Start frontend for local dev
`make run`

## Run Service and Redis
`sudo docker-compose up --build`

## Tests
Run tests in all browsers
`npx playwright test`
Run tests in specific browser
`npx playwright test --project=chromium`
