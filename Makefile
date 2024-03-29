build:
	@sudo docker build -t wacky-weather-watch-frontend .

run:
	@docker run -p 3000:3000 wacky-weather-watch-frontend

all: build run
