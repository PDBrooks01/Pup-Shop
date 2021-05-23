DROP TABLE `users`,`pets`,`orders`,`products`;
CREATE TABLE `users`(
	`customer_id` INT NOT NULL auto_increment,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `pets` varchar(255),
    PRIMARY KEY (`customer_id`)
    );
    CREATE TABLE `pets`(
	`pet_id` INT NOT NULL auto_increment,
    `pet_name` varchar(255) NOT NULL,
    `pet_type` set('pitbull','american bulldog','border collie','shitzu','shiba-inu','other') ,
    `age` INT,
    `weight` INT,
    `play_style` set('super chewer','tug champion','speedy','shredder'),
    PRIMARY KEY (`pet_id`)
    );
    CREATE TABLE `orders`(
	`order_id` INT NOT NULL auto_increment,
    `customer_id` INT,
    `order_date` DATE,
    PRIMARY KEY (`order_id`)
    );
    CREATE TABLE `products`(
	`product_id` INT NOT NULL auto_increment,
    `name` varchar(50) NOT NULL,
    `shop_quantity` INT,
    `unit_price` DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (`product_id`)
    );