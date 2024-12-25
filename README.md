# PERSONAL ACCOUNTANT

#### Video Demo: <URL HERE>

#### Description:

## BRIEF SUMMARY

This project is a simple expense tracker. The progress of tracking your own income and outcome can sometimes be annoying as you simply forget to note them down! So the idea of this app is to help you note down the income and expenses you made along the way and it is much easier and more convenient as you do not need a pen and paper!
This project was not complex though this is my first try at creating app using react so it was complicated for me, personally!

## FILES

As it was a React project, there are some default folders like public and node_modules and package.json file. Then there are files and folders that I designed manually for this project. Inside the source directory there are 3 main files:

### styles.css

I customized my css for the app design, as I did not have much experience with css so I try to be simple. Most of the content are aligning div and adjusting the color so it keeps the simple appearance. Add some hovering, clicking and shadow effect to make things look interactive!!

### App.js

This is the main file where I combined all of my components together.

### index.js

This file is solely for exihibiting the web app as it render the App.js.

Next is the component folder insider the src directory. This is where I store all of the project components

### components directory

My app is composed of 5 main parts

#### Header
This is where the name of the application resides.

#### Balance
This is the part where the user can see their balance. As I try to format the numbers so that users can see more precisely without mistaking 1000 and 10000, I use the Intl.NumberFormat function so wherever you use the app, the appearance should be familiar to you! This method is also used in other places in this app where I need to format numbers.

#### IncomeOutcome
This is the section where the app displays how much the user have earned or spent as it calculates the amounts from the transactions below. As it import the transactions from the GlobalState and filter through using condition whether the value > or < 0 to add into the income or outcome.

#### TransactionList & Transaction
This is where user can see what they have spent or earned but in details. As it import the transactions from the GlobalState and using the map function to iterate the transactions array and display each of them. I also add a delete button with the delete function to remove the transaction.

#### AddTransaction
This part is where the user can add new income and expense and it will change the global state thanks to the useState, useContext and useReducer function.

## Mechanism
So the idea at first was to use the useState function of React but then it was so difficult to make changes to different components so after some lookups, I decided to use the global state by creating context with createContext from React. The idea is that when user add or remove transaction it will change state not only the local scope but also the entire project so these changes can be seen in other parts such as BALANCE or INCOME and EXPENSE

So first I defined some default transacstion in an array called inititalState. Then I createContext using this default array and called it GlobalContext. By using useReducer as a tool similar to useState but for more complex and you can pass dispatch down instead of callbacks, I create a GlobalProvider taking other components as children. After I define 2 functions, add and delete transaction, I can pass it down to other components!!

## Feedbacks
This is my first time trying React and JS to build an web app so I do hope this project, despite its simplicity, can offer some use for others! I also have ideas for future progress with more functions to the app but at the moment I have not yet known how to execute the ideas.

THANK YOU FOR READING!!
