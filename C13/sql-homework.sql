CREATE TABLE regions (
                         region_id int NOT NULL,
                         region_name varchar(25),
                         PRIMARY KEY (region_id)
);

CREATE TABLE countries (
                           country_id char(2) NOT NULL,
                           country_name varchar(40) NOT NULL,
                           region_id int,
                           PRIMARY KEY (country_id),
                           FOREIGN KEY (region_id) REFERENCES regions(region_id)
);

CREATE TABLE locations (
                           location_id int NOT NULL,
                           street_address varchar(25),
                           postal_code varchar(12),
                           city varchar(30),
                           state_province varchar(12),
                           country_id char(2),
                           PRIMARY KEY (location_id),
                           FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

CREATE TABLE departments (
                             department_id int NOT NULL,
                             department_name varchar(30),
                             manager_id int NOT NULL,
                             location_id int  NOT NULL,
                             PRIMARY KEY (department_id),
                             FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

CREATE TABLE jobs (
                      job_id varchar(10) NOT NULL,
                      job_title varchar(35),
                      min_salary int,
                      max_salary int,
                      PRIMARY KEY(job_id)
);

CREATE TABLE employees (
                           employee_id int NOT NULL,
                           first_name varchar(20),
                           last_name varchar(25),
                           email varchar(25),
                           phone_number varchar(20),
                           hire_date date NOT NULL,
                           job_id varchar(10) NOT NULL,
                           salary int,
                           commission_pct int,
                           manager_id int NOT NULL,
                           department_id int NOT NULL,
                           PRIMARY KEY (employee_id),
                           FOREIGN KEY (department_id) REFERENCES departments(department_id),
                           FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

CREATE TABLE job_history (
                             employee_id int NOT NULL,
                             start_date date NOT NULL,
                             end_date date,
                             job_id varchar(10) NOT NULL,
                             department_id int NOT NULL,
                             PRIMARY KEY (employee_id, start_date),
                             FOREIGN KEY (job_id) REFERENCES jobs(job_id),
                             FOREIGN KEY (department_id) REFERENCES departments(department_id),
                             FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE job_grades (
                            grade_level varchar(2),
                            lowest_sal int,
                            highest_sal int,
                            PRIMARY KEY(grade_level)
);

insert into regions (region_id, region_name)
values (1, 'Europe');

insert into countries (country_id, country_name, region_id)
values (1, 'Romania', 1);

insert into locations (location_id, street_address, postal_code, city, state_province, country_id)
values (1, 'street', 'code', 'city', 'state', 1);

insert into departments (department_id, department_name, manager_id, location_id)
values (1, 'department', 1, 1);

insert into jobs (job_id, job_title, min_salary, max_salary)
values (1, 'job', 1111, 2222);

insert into employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary,
                       commission_pct, manager_id, department_id)
values (1, 'first', 'last', 'email', 'phone', '2022-04-30', 1, 2222, 11, 1, 1);

CREATE TABLE country_new (
                           country_id char(2) NOT NULL,
                           country_name varchar(40) NOT NULL,
                           region_id int,
                           PRIMARY KEY (country_id)
);

insert into country_new (country_id, country_name, region_id)
values ('C1', 'India', 1), ('C2', 'USA', 1), ('C3', 'UK', 1);

insert into countries (country_id, country_name, region_id)
select * from country_new;

create schema table_schema;

create table table_schema.publisher_info (
  publisher_id int NOT NULL AUTO_INCREMENT,
  video_id int NOT NULL,
  video_duration int,
  primary key (publisher_id)
);

create table table_schema.consumption_info (
    video_id   int NOT NULL,
    user_id       int NOT NULL,
    user_timespent int
);

insert into publisher_info (video_id, video_duration)
values (1, 30), (2, 20), (3, 30), (4, 20);

select AVG(video_duration)
from publisher_info;

insert into consumption_info (video_id, user_id, user_timespent)
values (1, 1, 30), (2, 2, 20), (3, 2, 30);

select COUNT(publisher_info.video_id)
from publisher_info
inner join consumption_info
on publisher_info.video_id = consumption_info.video_id;
