SHELL := /bin/bash
default: start ;

CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)

build:
	## Download and build containers
	docker compose up --build -d web
	## Install composer dependencies
	docker compose run --rm php composer install
	## Install Yarn dependencies
	docker compose run --rm nodejs yarn install
	## Compile JS and CSS dependencies
	make assets-dev

start: ## Start all required containers
	docker compose up -d web

restart: ## Restart all running containers
	make stop
	make start

stop: ## Stop all running containers and delete orphans
	docker compose down --remove-orphans

assets-dev:
	docker compose run --rm nodejs yarn dev

assets-watch: ## Run assets compiler in watching mode
	docker compose run --rm nodejs yarn watch

cache-clear:
	docker compose run --rm php bin/console cache:clear
