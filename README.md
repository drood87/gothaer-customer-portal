# GothaerPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Description

Your task is to create a presentation of the data within the JSON files. The first page that the user should see should be a login screen and then it should be a view or several views to show case the customers information/customer current insurances and the available insurances.
Customers can have different memberships even without insurances.
The customer can have old contracts for insurances above their membership level due to that the insurances doesn’t get cancelled when a customer downgrades its membership.
Higher level memberships has access to the lower levels insurances.
The task should be solved using Angular 8.

## Project Live here

[Gothaer Portal](https://suspicious-villani-4717e9.netlify.com/login)

## To login

We have 6 different fake users. The login can be accessed with following credentials:

Username: person1
password: password1

... up until person6 the schema will stay the same

Username: person6
password: password6

## Features, Explanation and possible Issues/ Bugs

The persons credentials and personal Data will be passed through Angular Router and showed in the first box. In there it will also show the Insurances which are currently active and what membership this person has at the moment.

The second box will show which Insurances will be available for the current membership of the person. This is checked via an algorithm in the insurances component. For simplicity reasons I saved the user's credentials (without password) in the local storage so that when the user refreshes the page will still show up without causing errors, cause the router loses the data on refresh.
In production it would probably call our backend database and access the data via the API. The available insurances are called via an HTTP call. I saved the JSON on a jsonbin to simulate a backend call and do some data massaging to filter not needed informations.

As the stickers are available for all memberships they're showed for every user.

Next to the available insurances is a 'Learn more' button which shows, when clicked, more information about pricing for asked insurance. I was considering to filter it first to show just the relevant Age range for logged in user but decided against it because the user might want to look up prices for family members so the whole list might be interesting for her/him.

I also started implementing an AuthGuard for route protection which I haven't finished because of the nature of the json file. I uploaded the Data on the real time firebase database and wanted also to implement authentication to make sure that just registered users can log in. Well, in a sense, just users in the database are able to login right now, but you can automatically enter the URL to get access to the customer details view.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
