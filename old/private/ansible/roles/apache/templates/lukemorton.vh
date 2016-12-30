<VirtualHost *:80>
  ServerAdmin lukemorton.designs@gmail.com
  ServerName lukemorton.co.uk
  DocumentRoot /var/www/lukemorton.co.uk/public

  <Directory />
    Options FollowSymLinks
    AllowOverride None
  </Directory>
  
  <Directory /var/www/lukemorton.co.uk/public>
    Options Indexes FollowSymLinks
    AllowOverride All
    Order allow,deny
    allow from all
  </Directory>

  SetEnv KOHANA_ENV production
  SetEnv PRODUCTION yes

  ErrorLog /var/www/lukemorton.co.uk/logs/error.log

  LogLevel warn

  CustomLog /var/www/lukemorton.co.uk/logs/access.log combined
</VirtualHost>
