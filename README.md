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

The header right has another register view which is not yet functional as it wasn't in the requirements but would have finished it with more time but I wanted to concentrate on the scope of the asked project and not let other features creep into my time.

## Roadmap

Some more features I would have liked to implement with more time and more understanding of Angulars massive ecosystem:

> - User able to change membership type and respective insurances get shown / not shown in the view
> - User able to cancel / update / make new memberships as easy as one button click
> - Register component that registers new users that are Gothaer customers based on their insurance ID so that not random people can register
> - some more fancy styling and maybe animations for a richer and more interesting user experience ( i concentrated more on the functionality than design now as it was my first time using angular and typescript)
> - another view that lists all membership types and accessible insurances with it
> - header functionality that shows a sign out button and the name of the currently signed in user( plus dropdown with several options what he can do in his dashboard)
> - clean up components and outsource more logic into services so that components stay mostly for the view of the template.
> - make it responsive for phones and smaller screens etc

## Takeaway

I think a little `lessons learned` might be a nice way to demonstrate my communication skills and willingness to learn new technologies and illustrate my thoughts.

As this was my very first experience with Angular I had a rough time to get started and architect my App. Angular has a lot of features to offer out of the box and the first days I felt everything but productive. I didn't had any previous experience with typescript either so I thought I stick with normal Javascript for the most part and implement a little typescript syntax here and there where I knew what I was doing.

Angular is a beast to tame, compared to Vue or React but I think is immense helpful for large scale applications and with a willingness to learn it might be fun to work with (or not judging to some rant blogposts about Angular). Angular has a lot to offer and sometimes it felt like it was re-inventing the wheel (looking at you observables and directives) whereas React uses more of what Javascript has to offer from the get go.

This is not supposed to mean I wouldn't like to work or learn it. I believe that learning new things will enhance not just someones career but makes someone a better Developer and shows different approaches. I am happy to work with anything, even if it means I have to spend more time learning a particular technology.

It was an interesting little project and it was fun to learn something new along the way even if it's far from best practices yet. But I made improvements on my code every day and think with a month of more working/ learning with Angular I could improve my skills with it drastically and make it look cleaner and implement a more logical architecture of the project.
