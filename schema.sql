CREATE DATABASE IF NOT EXISTS blog_22535;
USE blog_22535;

-- Create an user and grant privilages 
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_22535.* TO 'blog_user'@'%' WITH GRANT OPTION; 
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    banner VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
    
);