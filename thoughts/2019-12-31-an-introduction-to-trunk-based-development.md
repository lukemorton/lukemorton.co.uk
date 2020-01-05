---
publishedAt: 2019-12-31
tags:
 - Trunk-based development
---

# An introduction to trunk-based development

Introducing trunk-based development and it's relationship to the widely used practice continuous integration. If you do continuous integration, you should  be doing trunk-based development.

While you may not have heard of trunk-based development, you most likely have heard of continuous integration. Trunk-based development builds on continuous integration and brings even more benefits to your development teams.

## Continuous integration

Continuous integration is the development practice of integrating your developers work continuously, usually multiple times a day.

There is an expectation that if you practice continuous integration you run automated tests against any new changes as they are merged. This helps teams deliver value rapidly as they push changes multiple times a day with the reassurance that their changes haven't broken any existing functionality.

By having automated checks and encouraging teams to integrate their changes multiple times a day, you reduce the likelihood of issues arising from developers working in isolation for long periods of time introducing bugs.

[ThoughtWorks](https://www.thoughtworks.com/continuous-integration) and [Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html) both have great primers on the concept of continuous integration.

## Trunk-based development

Trunk-based development is effectively the same as continuous integration with  the additional proviso that you merge your code into a single branch on a regular basis. The branch nowadays is called master trunk or mainline were popular in the past before the days of git hence the phrase trunk-based development.

You can see that trunk-based development and continuous integration go hand in hand. The only difference is that your team have committed to continuously integrating into a trunk branch, rather than say into a series of branches, like an alternative to trunk-based development such as GitFlow might suggest.

**Warning:** Avoid using GitFlow. Point your teams to trunk-based development resources if you find them using it.

## Why adopt trunk-based development?

> Branches create distance between developers and we do not want that
> <br /><cite>— Frank Compagner, Guerrilla Games</cite>

If you don't currently practice trunk-based development you will likely be suffering from a number of problems:

 - Long-lived branches mean your developers will have a greatly increased chance of introducing bugs due to diverging code
 - Bureaucracy of multi-branch strategies, of which GitFlow is the worst, will likely be hindering your teams ability to deliver fast
 - Multi-branch strategies often come with hierarchy or gatekeepers which means your organisation doesn't trust their developers to deploy their own code
 - Peer reviews are tedious as change sets are often hundreds if not thousands of lines of code long which either means reviews are rushed or take forever
 - Your developers likely experience a crunch time at the end of iterations or whenever they eventually merge their branches together for a release which likely means long hours and more bugs

By adopting trunk-based development, you will begin to break down these problems, reduce bugs in your systems and begin your journey towards more frequent and less risky releases. The aim should be that your teams eventually get to a point that they can release multiple times a day into production.

## What trunk-based development isn't

Where people often get confused when adopting trunk-based development is that they think it is mutually exclusive to practices such as peer reviews and branching. That's not true and in fact most teams who practice trunk-based development still use branches on a daily basis, it just happens that they only live for short amounts of time.

There's a great explanation on [what trunk-based development is](https://paulhammant.com/2013/04/05/what-is-trunk-based-development/) from 2013 by Paul Hammant.

> OK, so GitHub pioneered the pull-request as a development workflow. This is quite compatible with TBD [trunk-based development], in that a feature/task is marshaled in a place that is not yet on the trunk/master but can be quickly.

As Paul Hammant explains, the practice of Pull Requests and trunk-based development are quite compatible. In fact, you get the additional benefit of running your continuous integration suite against your Pull Request branch before merging into master which provides an additional safety check and audit trail for your teams.

> I’m saying nothing about what developers do on their own workstations by way of ‘local’ branching to suit their hour by hour activities.

In many ways, pushing a branch to GitHub (or GitLabs or BitBucket) is just a stepping stone to merging your changes into your trunk. That's no bad thing as that stepping stone provides an audit trail of change as well as providing confidence through continuous integration checks pre-merge.

The aim of trunk-based development is to avoid the pains of long-lived branches, not to avoid branching altogether.

## Where to start

1. Adopt continuous integration if you haven't already
2. Decide on a team and repository to trial trunk-based development for an iteration or two
3. Have you and your collegues read [the manual](https://trunkbaseddevelopment.com/) on trunk-based development
4. Discuss as a team how you might begin chunking your work into smaller change sets, and how you plan to review each others work more frequently
5. Review in your team retrospectives and evolve from there

My recommendation would be to start using trunk-based development on a single repository for an iteration (known as a sprint in Scrum) or two and see how it goes.

It can take a bit of time for your team to begin to chunk their work so they can merge multiple times a days. Where they may have previously opened a Pull Request once or twice an iteration, they will now be expected to do so multiple times a day. This means adjusting their units of work to be smaller. You need to tackle this as a team together.

Don't worry, smaller change sets mean easier peer reviews and less risky deploys. If your teams can begin chunking their work differently, they will then quickly feel a reduction in friction of development.

Good luck!
