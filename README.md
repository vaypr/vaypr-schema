#vaypr-validator
*EARLY PRE ALPHA DEVELOPMENT - NOT READY FOR USE BUT ANY PRs WOULD BE APPRECIATED*

A validator created so that you don't have to repeat yourself (much) when creating application models. 

Tired of creating a class with name properties, then creating a joi validator, a graphql type, and a database model with those same properties? This is silly, is not DRY, and a waste of your time. Here, you just create a class, use our decorators, and WHIZBAM magic your class now has everything you could want depending on what you pass the decorator.

## example
```
immport { VayprModel, Unique, String, Required, Min, Max } from 'vaypr-validator';

const vayprOptions = {
  graphql: false,
  orm: 'sequelize',
  factoryFunction: (...args) => ({...args})
}

@VayprModel(vayprOptions)
export class MyClass {
  @String
  @Required
  @Unique
  @Min(5)
  @Max(32)
  foo: string;
}
```

## todo
build the thing

