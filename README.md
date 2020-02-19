<p align="center">
State Management Demo
</p>

<br>
<hr />
<br />

<div align="center">
  <a href="https://facebook.github.io/react/" target="_blank"><img src="./src/logo.svg" height="85px" width="175px" /></a>
  <a href="http://redux.js.org/" target="_blank"><img src="./src/redux.png" height="80px" width="85px" /></a>
</div>
<hr />
<br />

<div align="center">

[![Version][github-version]][github-tag-url]

</div>

## About The Project

There are 3 different routes / examples in this project. `Redux/Context/State-Only`

```bash
$ yarn install | npm i
$ yarn start | npm start
```

## Following Examples

```
Redux: The Redux examples have Redux Sagas incorporated into them. Redux-Sagas is a helper library to help run side-effects / functionality that relates to your abstracted data workflow. Redux-Sagas is not needed.

Redux Example Folders are named as such `SkillCard, TabComponent, UserCard, HomeView`

Context: The Context Example shows how to Architect and set up a simple abstracted context provider with a 'dispatcher' type method for global updates. *NOTE* as you can see from the examples it is much more work to prevent extra re-renders as a side effect of the Context Hooks provided by React. Redux is still a step ahead of the plain Context/Reducer combo when it comes to not having to reinvent the wheel.

Context Example Folders are named as such `SkillCardContext, TabContext, UserCardContext, HomeViewContext`

State-Only: THIS EXAMPLE IS NOT A GOOD EXAMPLE TO FOLLOW. This is here to show how when you update the parent it will update all of the child components and is not a good method of state management as with a large application it will not scale and will become very hard to track your source of data and make it alot harder to debug.

State-Only Example Folders are named as such `SkillCardReact, TabReact, UserCardReact, HomeViewReactOnly`

```

## Misc

The Application pulls sample data from my node api.

Console logs print out when a component re-renders so that you can see when a component is re-rendering. (optimal rendering would be just rendering the component you are modifying and it's children)

It's written in TypeScript but was put together rather quickly so don't be suprised if you run into typing errors when modifying code. Alot of it was thrown together with Any's to substitute for time in putting this together rather quickly.


You can click the React or Redux logos at the top of the README to get more indepth information on Hooks / Context / Redux.


## Maintainers

- [Chris](https://github.com/Chris3970439704)


[github-tag-url]: https://github.com/Chris39704/state-demo
[github-version]: https://img.shields.io/badge/Version-0.0.1-lightgrey.svg
