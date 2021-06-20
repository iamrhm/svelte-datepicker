
## The task is to show details of a single stock.

Create a web page(reference image below) as follows: ­
1. The left panel shows a calendar:­
a. Stock prices by date.
b. Add option for missing stock prices
c. Delete option for existing stock prices.
2. The Right panel shows the following:­
a. Maximum profit that can be attained by buying and selling 10 units of the stock
only once.
b. The graph showing the stock prices trend.
c. Buy and the sell date.

## Calendar Features:
1. Stock prices are shown like events on google calendar.
2. Do not create calendar UI instead use an existing plugin to save time.
3. For dataset please use Airtable. You can create data sets in airflow and call the data
using the Airtable API’s(https://airtable.com/)
4. Next, each event would have a delete button. On pressing the button, the right panel
data should change and display the new information. Also, Airtable API should be
called to delete the data.
5. If the particular day has no stock data, the user can add the stock price by pressing on
the event card. A form would open just like google calendar and the information can be
added.

## Report:­
1. You have to buy 10 units of the stock.
2. You can buy and sell only once. The aim is to make maximum profit.
3. Please use a plugin for displaying graphs(eg. D3, HighCharts)
4. The report will change in case you remove or add stock prices from the calendar.
Things to follow:­<br/>
● Writing test cases will fetch additional points.<br/>
● Create a public GitHub repository. (Share the link before starting the assignment.)<br/>
● Keep pushing your code in the repository.<br/>
● Make sure you have proper commit messages


## How To Run:­

To run UI Server

`cd/stock-app`

inside run

`npm start`

To run Node Server

`cd/server`

inside run

`nodemon`


**Note**:

Source of Api Data: 
`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line`

The JSON response transformed to current year for the data showing unavailability reason 