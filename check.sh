url="$1"
url+=".ws"
emoji=$2
status=$(whois "$url")
echo "Checking $url"
if echo $status | egrep -qi \
'^No match|^NOT FOUND|^Not fo|AVAILABLE|^No Data Fou|has not been regi|No entri'; then
  echo "$url is available! $emoji"
else
  if echo $status | grep -qi \
  'Query rate'; then
    echo "Query rate exceeded, waiting for an hour..."
    sleep 3600
    status=$(whois "$url")
    if echo $status | grep -q \
    '^No match|^NOT FOUND|^Not fo|AVAILABLE|^No Data Fou|has not been regi|No entri'; then
      echo "$url is available! $emoji"
    fi
  fi
fi
