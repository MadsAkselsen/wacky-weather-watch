# wacky-weather-watch

## Run with docker
Build the Docker image 
`make build`

Start frontend for local dev
`make up`

Stop docker image
`make down`

## Run Service and Redis
`sudo docker-compose up --build`

## Tests
Run tests in all browsers
`npx playwright test`

Run tests in specific browser
`npx playwright test --project=chromium`

## Architecture
![Wacky weather app dark](https://github.com/MadsAkselsen/wacky-weather-watch/assets/11229485/25d0f77d-81fb-4821-a2b5-676b9505970d)
