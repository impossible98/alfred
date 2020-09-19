# -*- coding: utf-8 -*-  
import json
import urllib2

url = 'https://api-ssl.bitly.com/v4/shorten'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 8c31635230b944eda11fa6a9401c3895bed796df',
}
data = '{ "long_url": "{query}"}'

request = urllib2.Request(url, headers = headers, data=data)
response = urllib2.urlopen(request)
html = response.read()
print json.loads(html).get('id')
