---
publishedAt: 2020-06-02
tags:
  - Software development
keywords:
  - software architecture
  - software architecture in practice
  - software design and architecture
  - web application architecture
  - documenting software architectures
  - enterprise architecture
  - agile architecture
  - lean architecture
  - emergent architecture
  - clean architecture
---

# What is architecture?

On software design and architecture: defining what we mean by software architecture, the impact of software architecture, principles of software architecture and how to practice and document it as a team.

Software architecture can at the very least be described as the "as-is" state of the software you have already built. It is the sum of the all the technical design decisions you have made, from the technologies you've used to the way you've organised and structured your code. It can also be a description or plan regarding the "to-be" state of software you want to build in the future.

## Defining software architecture

[Do we need any more of a definition here?]

## The impact of software architecture

The most useful way of thinking about software design and architecture is in the impact of intentional architectural decisions you make as a team as well as the accidental side effects that architecture creates.

Impact can be measured in many ways. Here's a non-exhaustive list of some of the impacts you should be thinking about as a team:

- Ability for your software to meet user and organisational needs
- Effort and skills required to build the software
- Technical debt accrued
- Ease of change in the future
- Cost of operating and managing the software
- Environmental and ethical impacts of the software

Your software design decisions will never be perfect and instead should be seen as tradeoffs. You will always have to balance both positive and negative impacts of your design decisions.

For example, you may need to deliver changes to your digital service by a certain deadline and therefore you need to balance effort against the other impacts that your design decisions may have. You might choose to accrue technical debt, even though that will cost you in future, in order to deliver to a deadline.

## Principles of software architecture

As digital transformation sweeps society, the ability to deliver and evolve software is now a competitive advantage for most organisations. Organisations with software that is more valuable, usable and feasible than competitors will thrive. There are a number of software design principles that are important to remain relevant and competitive in this age. You architecture should be **agile**, **lean**, **emergent** and **clean**.

**Agile architecture** is the application of agile principles to software design, the highest priority of which is delivering working software to users early and continuously. Architecture should enable rather than hinder the ability for a team to deploy and release software at any time. It should enable a team to evolve and adapt their software as they gain feedback from users so that the software can be iterated towards increasing value for users. Importantly, and to quote from the [principles behind the agile manifesto](https://agilemanifesto.org/principles.html) exactly, "the best architectures, requirements, and designs emerge from self-organising teams."

**Lean architecture** is the practice of "just enough" architecture where waste is limited. Necessarily this means delaying architectural decisions until the last responsible moment and limiting the scope of any "to-be" design exercises. This principle often clashes with enterprise organisations where architecture is often a separate process to development and therefore happens upfront and as a gated approval process at the end of a development cycle which is widely recognised as generating large amounts of waste. Rather, lean architecture requires that design decisions are made continuously as part of the development process.

**Emergent architecture** is the acceptance that in order to empower teams to be autonomous in how they deliver software you must accept that architecture will emerge over time and cannot be entirely planned ahead of time. You therefore need to have a process that allows for divergence and eventual convergence across your organisation and software development teams. The benefit of emergent architectures is that they enable teams to rapidly meet new user needs.

**Loosely coupled architecture** is a principle that enables teams to independently change and release software. Systems that are tightly coupled often means that changes are more complex, need to be coordinated across multiple teams and are inherently more risky. Loosely coupled architecture means components of a system, for example a suite of microservices, can be deployed independent of each other. If your architects architected for microservices but those services must be released in synchronisation with each other you've paid the price of the complexity that microservices bring within any of the benefits.

## Software architecture in practice

In practice, we need the ability to rapidly deliver working software to users, processes for designing "just enough" architecture, processes for enabling architecture to diverge and converge, and architecture design patterns that produce loosely coupled architecture.

Ensuring your software development teams have the skills and support from the wider organisation to make software design decisions independently is critical to enabling them to deliver working software. Rather than seeing architecture as a process or skillset that sits outside of teams, the team themselves should collectively own architecture, observe wider architectural decisions made by other teams and communicate their own decisions through the use of architectural decision records.

As part of your process for turning your idea backlog into user stories that are ready to be developed, you should ensure your team discuss the architectural decisions that need to be made in "just enough" detail so that rework is not needed at a peer review stage of development or when reviewing whether the user story is "done" or not.

At a community of practice level, across all software development teams in your organisation, you should discuss system-wide and localised design decisions, and coordinate across teams to ensure architecture can diverge but then converge over time in a way that simplifies the operation and management of software built and reduces cost of running that software.

Your team should be trained and have coaching available to them to ensure they understand the ever evolving landscape of architectural design patterns. From feature flags to microservices, they must understand the options available to them in order to be able to build loosely coupled software.

Both architectural decision records and documentation in way of written and diagrams can be used to describe both the "as-is" and "to-be" architecture. This documentation should never be written upfront as a plan but rather document discussions and decisions made by teams.

## Architecture is living and breathing

Rather than seeing architecture as an upfront plan, a process that happens ahead of development or as an approval process at the end, you should see architecture as the living and breathing state of the software you have built. Treat it as such in the way you care for it and make tradeoffs over time.
