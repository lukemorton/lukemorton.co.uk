all: site

site:
	ansible-playbook private/ansible/site.yml -i private/ansible/production -l production

production:
	ansible-playbook private/ansible/production.yml -i private/ansible/production -l production

deploy:
	ansible-playbook private/ansible/deploy.yml -i private/ansible/production -l production

update:
	php composer.phar self-update
	php composer.phar update

dev:
	php -S localhost:8000 -t public/ public/index.php
