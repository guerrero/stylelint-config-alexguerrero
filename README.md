# stylelint-config-alexguerrero

> [stylelint](http://stylelint.io) rules according to Alex Guerrero's personal preference

These are the stylelint rules I use in my own projects. They are completely opinionated but they can serve as inspiration or as a starter point.


## Installation

Install the configuration by running:

```
$ npm install --save-dev stylelint stylelint-config-alexguerrero
```


## Usage

Once the `stylelint-config-alexguerrero` package is installed, you can use it by specifying `alexguerrero` in the [`extends`](http://stylelint.io/user-guide/configuration/#extends) section of your [stylelint configuration](http://stylelint.io/user-guide/configuration/#configuration).

```js
{
  "extends": "alexguerrero",
  "rules": {
    // Add here the rules you want to overwrite this config's defaults
  }
}
```


## License

[Unlicense](https://github.com/guerrero/stylelint-config-alexguerrero/blob/master/LICENSE)
