## Debouncer
This pluggin will allows you to handle debouncing of your frequent/multiple function.procedure calls.

WARNING:
THIS IS NOT THROTTLING, AND THIS WILL NOT ACT AS IS

What is debounce:
Debounce will bunch a series of sequential calls to a function into a single call to that function.
It ensures that one notification is made for an event that fires multiple times.
* look here http://demo.nimius.net/debounce_throttle/

version 1.0.0

-------
### debounce(timeout, callback)
apply debounce function to a function

params
```
timeout : Override default timeout. Timeout used as waiter last event calls
callback : list of callback action (after debounce), just like callback on settimeout function
```

docs
```
import debouncer from 'debouncer'

debounce(() => {
    // our function here
}, 250)
```
