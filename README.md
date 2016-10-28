domains
=======

Search for emoji domains and short domains. If you get a domain with this, my one request is that you actually use it for something.

Run with:
```bash
node punycodify.js < emoji_list | while read i ; do ./check.sh $i ; done
```

or with:
```bash
./2letter.js | while read i ; do ./check.sh $i ; done
```

The tld for 2-letter domains is hard-coded in `check.sh` to .ws, but you can change it to whatever your heart desires.

MIT license.
