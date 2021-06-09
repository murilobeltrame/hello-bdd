# Super simple BDD example with CodeceptJs

**BDD** (Behaviour Drive Design) is a test discipline that promotes better alignment of stackeholders and technical teams by stablishing a stantadized, easily understandable way to describe feature`s behaviours.<br />
A popular standard to describe behaviour that way is **Gherkin**.<br />
**CodeceptJs** (as many other frameworks) comes into hand to automate tests usign behaviours described with Gherkin.

## Where to find:

- *Features* and it's behaviours are described in files inside `features` folder.
- `step_definitions` folder contains automation related of each *step* of *behaviours* listed for a feature.

The rest of the files are basically CodeceptJs`s infrastruture files (configuration, dependencies, etc ...)

## References:

- [CodeceptJS](https://codecept.io/)
- [BDD in CodeceptJS](https://codecept.io/bdd/)
- [Page Objects in CodeceptJS](https://codecept.io/pageobjects/), not covered here but definetilly worth to look at.
- [Introduction to BDD](https://dannorth.net/introducing-bdd/)
- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)