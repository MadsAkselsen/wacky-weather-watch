# Define the service name from your docker-compose.yml
SERVICE_NAME=wacky-weather-app

build:
	@docker-compose build $(SERVICE_NAME)

up:
	@docker-compose up $(SERVICE_NAME)

down:
	@docker-compose down

all: down up