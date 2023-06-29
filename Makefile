build: ## Build docker image
	docker-compose build

start
	docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve

stop:
	docker-compose stop

rebuild: # run jekyll build inside container to update on the go
	docker-compose exec jekyll serve --watch --incremental
