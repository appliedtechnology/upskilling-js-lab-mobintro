# Mob Intro exercise

I was REALLY into Star Wars when I was young. It blew my mind that they had created an entire universe in their minds, and it was so real that it felt like it existed for real.

One of those things that really made it feel real was the fact that they even invented their own way of keeping track on time. Here on earth, and in west we use `A.C.` after Christ (or sometimes `B.C.`). But in the Star Wars universe they talk about before and after the Battle of Yavin. (`BBY` or `ABY`), which for anyone seen the first movie (Star Wars Episode IV - A New Hope) is quite obviously a big event.

In this exercise I want you to follow the rules of mob programming strictly and also do test driven development in order to write a few functions that converts from Star Wars years to Earth Years and back again.

You can [read more about the conversion here](https://starwars.fandom.com/wiki/0_BBY), but I've also included a few starting test cases for you below. See if you can come up with more. Edge-cases and errors should be handled too, right?

| Star Wars Year | Earth Year |
| :---- | :---- |
| 0ABY | 1850 A.C. |
| 1ABY | 1851 A.C. |
| 1BBY | 1849 A.C. |
| 122ABY | 1972 A.C. |
| 172ABY | 2022 A.C. |
| 1849BBY | 1 A.C. |
| 1850BBY | 0 A.C. |
| 1851BBY | 1 B.C. |
| 1852BBY | 2 B.C. |

## Getting started

- Clone this repository
- Open the cloned folder in Visual Studio Code
- Start the terminal (Terminal menu)
- Run `npm install`
- Run `npm t` to run all tests.
  - Run `npm run test:watch` to keep the tests running after each change

## Tips and setup

1. Have the two files opened next to each other in the editor
1. Use a big screen when seated together
1. Follow the mob rules strictly (5 minutes iterations)
1. Use LiveShare for remote access

## Instructions

Send this to the participants a few days before the workshop starts

```markdown
Hello everyone,

Looking forward to meet you all for the mob programming workshop. I can honestly tell you that mob programming is the most powerful tool I have used in my 25+ year career. It emphasis learning, quality and team work. And hey - it's fun too!

During the day we will learn in a hands-on way, so for that reason I ask you all to do the following, if it's not done already:

- Have an editor/IDE where you can run JavaScript code (I'm using Visual Studio Code, <https://code.visualstudio.com/download>, but use whatever you like. I hear IntelliJ is great :))
- Ensure that this IDE have a collaboration capability that everyone in the team can use. (Again, for VS Code that is LiveShare <https://code.visualstudio.com/learn/collaboration/live-share>, but use what you want)
- Install Node <https://nodejs.org/en/download/>, since we are going to run JavaScript in Node
- Verify that you can reach this repository; <https://github.com/appliedtechnology/upskilling-js-lab-mobintro>

Once you have all of that done, you should be ready for the mob programming workshop.

Looking forward to see you there!
```