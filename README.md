TimeStamp Microservice
======

### Can pass unix date or string formated date. Also accepts 'adddays' param and will add that many days to output.

string format: January 1, 2016

example usage:

'https://URL/December%2015,%202015'
'https://URL/1450137600'
'https://URL/December%2013,%202015?adddays=2'

example output:

'{ "unix": 1450137600, "natural": "December 15, 2015" }'