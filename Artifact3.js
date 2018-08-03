import json
import sys
import datetime
import exceptions
import pprint
    from bson import json_util
    from pymongo import MongoClient

connection = MongoClient('localhost', 27017)
db = connection['market']
collection = db['stocks']

#Asks user what operation they would like to perform.
    string "operation" = raw_input('What operation would you like to perform?')

#Instantiate the "Create" Method
if operation = "Create"
#Creates new business.Allows user to enter all information for the business.
    new_business = {
        "id": raw_input('Input ID: '),
        "Ticker": raw_input('Input ticker: '),
        "Profit Margin": raw_input('Input profit margin: '),
        "Institutional Ownership": raw_input('Institutional ownership'),
        "EPS growth past 5 years": raw_input('Input: '),
        "Total Debt/Equity": raw_input('Total Debt/Equity'),
        "Current Ratio": raw_input('Current Ratio'),
        "Return on Assets": raw_input('Return on assets:'),
        "Sector": raw_input('Sector:'),
        "P/S": raw_input('P/S:'),
        "Change from Open": raw_input('Inout Change from Open'),
        "Performance (YTD)": raw_input('Performance:'),
        "Performance (Week)": raw_input('Performance (week):'),
        "Quick Ratio": raw_input('Quick Ratio:'),
        "Insider Transactions": raw_input('Insider transactions:'),
        "P/B": raw_input('P/B:'),
        "EPS growth quarter over quarter": raw_input('EPS growth:'),
        "Payout Ratio": raw_input('Payout ratio:'),
        "Performance (Quarter)": raw_input('Quarterly performance:'),
        "Forward P/E": raw_input('Forward P/E:'),
        "P/E": raw_input('P/E:'),
        "200-Day Simple Moving Average": raw_input('Simple moving average:'),
        "Shares Outstanding": raw_input('Outstanding shares'),
        "Earnings Date": raw_input('Earnings date:'),
        "52-Week High": raw_input('Year high:'),
        "P/Cash": raw_input('P/Cash:'),
        "Change": raw_input('Change:'),
        "Analyst Recom": raw_input('Analyst Recom:'),
        "Volatility (Week)": raw_input('Volatility'),
        "Country": raw_input('Country:'),
        "Return on Equity": raw_input("Return on Equity:"),
        "50-Day Low": raw_input("50 Day low:"),
        "Return on Investment": raw_input("Return:"),
        "Shares Float": raw_input('Shares Float:'),
        "Dividend Yield": raw_input('Dividend Yield:'),
        "EPS growth next 5 years": raw_input('EPS growth 5 years;'),
        "Industry": raw_input('Industry:'),
        "Beta": raw_input('Beta:'),
        "Sales growth quarter over quarter": raw_input('Sales growth quarter over quarter:'),
        "Operating Margin": raw_input('operating margin:'),
        "EPS (ttm)": raw_input('EPS (ttm):'),
        "PEG": raw_input('PEG:'),
        "Float Short": raw_input('Float short'),
        "52-Week Low": raw_input('52 Week Low:'),
        "Average True Range": raw_input('Avg true range:'),
        "EPS growth next year": raw_input('EPS growth next year:'),
        "Sales growth past 5 years": raw_input('Past 5 years sales growth:'),
        "Company": raw_input('Company:'),
        "Gap": raw_input('gap:'),
        "Relative Volume": raw_input('Relative Volume:'),
        "Volatility (Month)": raw_input('Volatility Month:'),
        "Market Cap": raw_input('Market Cap:'),
        "Volume": raw_input('Volume:'),
        "Gross Margin": raw_input('Gross Margin:'),
        "Short Ratio": raw_input('Short Ratio:'),
        "Performance (Half Year)": raw_input('Half Year Performance:'),
        "Relative Strength Index (14)": raw_input('Relative Strength Index:'),
        "Insider Ownership": raw_input('Insider Ownership:'),
        "20-Day Simple Moving Average": raw_input('20 Day moving Avg:'),
        "Performance (Month)": raw_input('Performance (Month):'),
        "P/Free Cash Flow": raw_input('P/Free Cash Flow:'),
        "Institutional Transactions": raw_input('Institutional Transactions:'),
        "Performance (Year)": raw_input('Performance Year:'),
        "LT Debt/Equity": raw_input('LT Debt/Equity:'),
        "Average Volume": raw_input('Avg Volume:'),
        "EPS growth this year": raw_input('EPS growth this year:'),
        "50-Day Simple Moving Average": raw_input('50-Day Simple Avg:')
    }

  try:
db.inspections.insert_one(new_business)
print('Inserted successfully!')

except:
print('An exception has occurred.')

#Instantiate the "Read" method
elif operation = "Read";
#Allows the user to select which business to display absed on the "Industry" field.
    try:
print list((db.stocks.find({ "Industry": raw_input('Enter the value you would like to find: ') }, { "Ticker": 1 })))

except:
print('An exception occurred.')

#Instantiate the "Update" Method
elif operation = "Update";
#Allows user to update a record, based on the Ticker information entered, and they can update the Volume field.
    try:
db.inspections.find_one_and_update({ "Ticker": raw_input("What value are you searching for?: ") },
    { "$set": { "Volume": raw_input("What is the new value like to update/create?: ") } })
print('Field updated successfully.')

except:
print('An exception occurred.')

# Instantiate the "Delete" method.
elif operation = "Delete";
print('WARNING: A deletion cannot be undone.')

#Allows for deletion of record selected based on the Ticker information
try:
db.inspections.delete_one({ "Ticker": raw_input('Input the value of the key you are using to specify the document you want to delete: ') })
print('Document deleted successfully.')

except:
print('An exception occurred.')

# Catch all if method name is improperly entered
else;
print('Could not perform operation. Are you sure you entered it correctly?')



