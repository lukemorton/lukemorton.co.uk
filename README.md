# LukeMorton.co.uk

Running dev server:

``` sh
php -S localhost:8000 -t public/ public/index.php
```

Deploying:

``` sh
ansible-playbook private/ansible/site.yml -i private/ansible/production -l production
```
