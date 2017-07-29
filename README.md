## What is Azalea? 
Azalea is our valiant attempt at writing a JavaScript testing framework from scratch (purely for learning purposes). It is heavily inspired by [Jasmine](https://github.com/jasmine/jasmine) in terms of syntax and how it is run. 

## How To Run Azalea?


## Matchers
* toBe
* toEqual
* toNotEqual
* toContain
* toBeDefined
* toBeNull

## Spies 

Spies work similarly to as they do in Jasmine. An example of how you would use one:
```
it('using a spy', function() {
    Iggy(ObjectUnderTest, 'sayhello').andReturn('hello')
    expect(ObjectUnderTest.sayhello()).toEqual('hello');
  });
```

## Upcoming Features:
* Running Azalea from command line
* Writing matcher to test if error has been thrown 


## Contributor(s): 
* [Kavita Kalaichelvan](https://github.com/kkavita92)
* [Charlotte Feather](https://github.com/Charliefea)



