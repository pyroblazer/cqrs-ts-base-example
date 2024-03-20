# CQRS TS Base Example
## Project Initialization Guide

### Getting Started

This project uses Deno to run the project. 

Deno is a runtime environment for executing JavaScript and TypeScript code outside of a web browser. It provides a secure and efficient platform for building server-side applications, command-line tools, and other software projects. Deno simplifies development with features like built-in module management, a secure sandbox environment, and a comprehensive standard library. 

To kickstart your project, execute the following command in your terminal:

```sh
deno run --allow-net index.ts
```

If you haven't already, make sure to install Deno by following the instructions available [here](https://deno.land).

### Welcome!

Welcome aboard! Embracing agility and adaptability is key for any successful startup. Here, I introduce you to a simple yet powerful pattern called CQRS (or CQS) that can revolutionize the way you structure your codebase. This pattern is applicable to almost any programming language, enabling you to seamlessly incorporate new features without the fear of disrupting existing functionality.

The primary aim of CQRS/CQS is to establish a clear separation between your controller (whether it's Express, the "C" in MVCs, Flask, or any other application framework) and your business logic. This separation empowers you to add or remove features with confidence, knowing that your codebase remains resilient.

This example involves bounded contexts, which refer to distinct, cohesive domains within a system where each context encapsulates its own set of concepts, rules, and language. These contexts establish clear boundaries, allowing teams to focus on specific functionalities without interfering with or being affected by other parts of the system. Bounded contexts help ensure clarity and maintainability by enabling developers to model and implement each aspect of the system independently, thereby facilitating better scalability and flexibility in large, complex applications.

It's worth noting that while this pattern lays a solid foundation, there are more advanced scenarios where you might integrate it with Domain Driven Design and/or Event Sourcing, although those aspects are not covered here.

Implemented in pure TypeScript and devoid of any dependencies, this solution is incredibly versatile. Whether you're working in a browser, an edge worker, Node.js, Deno, Bunt, CloudFlare, Lambda, or any other environment, this approach fits seamlessly into your workflow.

Gone are the days of defining intricate classes or functions. As long as the input conforms to a certain structure, it seamlessly integrates with the system. For instance:

```typescript
const inputA = {
    username: string;
    password: string;
}

const inputB = {
    username: string;
    password: string;
    dateOfBirth: Date;
    verified?: boolean;
}

// Both inputs work flawlessly:
await dispatch({
    type: "CREATE_USER",
    arg: inputA
});

await dispatch({
    type: "CREATE_USER",
    arg: inputB
});
```

This approach has proven to be incredibly effective, allowing users to introduce new features and evolve the application architecture gracefully over time. So, dive in and start building with confidence!