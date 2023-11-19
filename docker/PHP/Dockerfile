FROM php:8.2-fpm-buster

RUN apt update && apt install -y  \
    libicu-dev  \
    libpq5  \
    libpq-dev  \
    zlib1g-dev  \
    libzip-dev  \
    zip  \
    libjpeg-dev  \
    libpng-dev  \
    libfreetype6-dev \
    wget \
    curl

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure intl \
    && docker-php-ext-install opcache intl pdo_pgsql pgsql gd zip \
    && pecl install apcu xdebug \
    && docker-php-ext-enable apcu xdebug \
    && pecl clear-cache \
    && mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini" \
    && sed -E -i -e 's/post_max_size = 8M/post_max_size = 64M/' "$PHP_INI_DIR/php.ini" \
    && sed -E -i -e 's/upload_max_filesize = 2M/upload_max_filesize = 64M/' "$PHP_INI_DIR/php.ini" \
    && wget https://getcomposer.org/download/latest-stable/composer.phar \
    && mv composer.phar /usr/bin/composer \
    && chmod +x /usr/bin/composer \
    && chown -R www-data. /var/www

RUN apt clean && apt auto-remove

# fix filesystem permissions between container and host
RUN usermod -u "1000" www-data && groupmod -g "1000" www-data

WORKDIR /var/www/html

EXPOSE 9000
