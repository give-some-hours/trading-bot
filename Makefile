build:
	# Make the build
	docker-compose build --no-cache
up:
	# Start project
	docker-compose up -d
down:
	# Stop project
	docker-compose down
db@create:
	# Make the build, must be run once
	docker-compose up -d db \
		&& sleep 5 \
		&& docker-compose run api sh ./create-database.sh
db@backup:
	# backup the data
	cp -r ./db_datas ./db_datas.backup