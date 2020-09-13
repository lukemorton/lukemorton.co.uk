---
publishedAt: 2020-06-02
tags:
  - Software development
keywords:
  - vertical slices
  - lean software
  - lean software development
  - iterative and incremental
  - software development
  - software development teams
---

# Vertical slices: lean&nbsp;software development

On how predictable delivery of high quality software requires breaking your problem down into thin vertical slices of value that can be delivered iteratively and incrementally.

If agile and lean software development has taught us one thing, it's the importance of iterative and incremental development. It makes failure safe and that in turn improves your opportunity to learn and adapt and ultimately deliver better software for your users.

This is because learning is a product of trial and error. If you're too scared to fail how will you ever give yourself an opportunity to learn?

## Fear will damage your product

Software development teams should embrace change and failure. All too often organisations are frozen by fear and that fear manifests itself as mistrust of teams. Accountability is diffused into departmental silos which in turn leads to no one really being responsible for anything.

Have you ever worked in an organisation where the team who build software aren't allowed to release it? Sometimes that's because another team is responsible for the release and operation of software. Sometimes it's because sign-off happens outside the team. Either way, it's not agile and it's not lean.

This fear leads to a bureaucracy that reduces the frequency your team is able to deliver software and means the likelihood of your team succeeding reduces too. This is because by reducing frequency of change, the risk of that change increases and so too does the cost of failure. That failure in turn leads to blame and that blame leads to further fear of change. A vicious cycle indeed.

It's frustrating and counter productive as the cure to costly failure is to change more frequently which in turn reduces the size of your change which in turn makes failure cheap. It's tough to see this though if you've never experienced it.

You can quickly identify whether your team suffers from this by measuring "Deployment Frequency" which is the frequency by which your team release into production. The more frequent your team releases, the thinner the slices of their work will be and the cheaper failure becomes.

You should be aiming for multiple deploys to production per day according to [DORA 2018 Report](http://cloudplatformonline.com/rs/248-TPC-286/images/DORA-State%20of%20DevOps.pdf). Low performers deploy between once a week and once a month. Forget about it if your frequency is less than that.

## Breaking problems down

Changing more frequently requires breaking problems down into smaller problems that can be deployed and released independently.

You can't just break a problem down into arbitrary parts though. Imagine deploying a half finished registration page that has plenty of fields but no submit button. Your users certainly aren't going to get any value from that.

It's not that simple though. You might get a lot of value from releasing a button in your app that on the surface looks to enable a user to upgrade from a personal to business account even if clicking that button does nothing to upgrade them automatically and instead sends an email to your customer service team to upgrade them. While this might not be considered a full and complete feature, it does enable you to cheaply understand how many people would click the button and by proxy are interested in upgrading.

You must slice your problem into a thin layer of value. It's up to your team to decide how they break a problem down. As a team you must determine what value you wish to derive from delivering that smaller unit of work.

## Vertical slices of joy

A common way software development teams will break problems down into smaller ones that deliver value is to use a technique called vertical slicing. With this technique you tradeoff value and effort to reduce risk and increase your feedback frequency by delivering the smallest most useful unit of work.

Let's develop the upgrade button example a little bit to explore this concept.

## Start with a problem statement

At the outset of [forming your team](/articles/what-is-a-software-development-team#forming-a-team) you will have ideally defined a problem statement or mission to empower them with the freedom to explore ways of solving that problem. We should define a fictitious problem statement to help with our example.

> Acme Ltd is experiencing success offering widgets to its users. There are an increasing amount of users consuming widgets on acme.co.uk on paid personal plans.
>
> Acme wants to meet this demand and increase its revenue by providing business plans that give users access to an increased number of widgets for a higher monthly cost.
>
> A minimum of 5% of personal accounts being upgraded to business accounts would provide economies of scale to be able to provide business users with more widgets.

We now have our business context which defines the reason why we are working together and what we are trying to do as a team. Our vertical slice must always drive us closer to solving our business problem.

## Solution hypothesis

We can then define a solution hypothesis which is our best guess, based on what we know, that proven or disproven will help us solve our business problem. Even if disproven it will still provide a learning opportunity to the team.

> Because we believe there is a desire for business users to have access to more widgets, if we provide users the ability to upgrade their account from personal to business, then we will see users upgrade.

The hypothesis defines an expected observation for us to test. Our thinnest vertical slice must help us learn something and therefore it must enable us to test our hypothesis. Its not a valid slice if it doesn't enable us to learn.

## Tests

Now we need to test the hypothesis. Our test should enable us to prove or disprove our hypothesis. Tests can be anything from research through to building and releasing a full feature.

We define a number of alternative tests for our hypothesis of varying efforts:

> 1. Survey users to identify interest in a business account
>
> 2. Add upgrade button to track number of users interested in upgrading
>
> 3. Build upgrade feature and track number of users who upgrade

We now have a prioritisation decision. Each test have an associated effort. Surveying will take time and organisation. Adding an upgrade button with tracking will also take some effort. Building the upgrade feature would likely take the most amount of effort.

The greater the effort the higher the risk of waste. If you spend 1 day building a button to track and learn users don't want to upgrade you've only wasted one day. If you spent 20 days developing the feature and then learn users don't want to upgrade thats way more costly.

## Build, measure, learn

At this point you might ask, I already have a list of features I want to build. Why would I not just build them? Do I need to test every feature? Let me answer that simply by saying: every feature is a test. If you build 4, 6 or even 12 months of features, you've simply spent that amount of time devising a test. You won't know if that effort was worth it until you've release that effort into the hands of users and see them use the functionality.

This is what I mean when I say vertical slicing enables you to reduce risk and increase your feedback frequency. Instead of spending months of effort before getting any feedback, you can get feedback within a matter of days before expending more effort building out complex functionality in your product.

If you chose the survey as your test your researchers would design and run a survey.

## Defining your technical slice

If you chose to build some software, then your team would continue to identify their vertical slice by planning the technical layers needed to deliver the test.

The vertical slice needs to include all technical changes needed to deliver the capabilities to the user. This means all user interface, API or database logic, platform and third party service changes that are needed must be included in the vertical slice.

Your litmus test here is that your vertical slice must include all work needed in order to prove or disprove your hypothesis. If there is a small API that needs to be called that is handled by another team, that must be included in the vertical slice and is likely going to be a dependency and pain point for your team. Where possible, ensure your team is fully autonomous in being able to ship whole vertical slices by themselves.

## Scaling your vertical slice

Whether you chose to survey or build the upgrade button, once either test has been delivered and the results are back in you can then choose whether to scale your vertical slice.

If your test has proven your solution hypothesis, you can now proceed to build out another vertical slice which may this time be incrementally more complex than your efforts before. You can do this with more confidence as your previous test and subsequent proof reduces the risk of expending more effort now.

You likely won't want to jump from spending a day on your test to then spending months delivering a more complete solution. You will likely want to ratchet up effort but still aim to be able to ship your slices in hours or days rather than weeks.

## Only release valuable change

Releasing incomplete features to the majority of your users probably doesn't seem like a good idea to you and I'm sure your users wouldn't appreciate it either. Cheers for the decrease volume button buddy. How about you ship the increase volume button friend?

Increasing your deployment frequency to multiple times a day doesn't necessarily mean all your users will be noticing changes at all. Every vertical slice must deliver business value and any changes released to users must be usable and more over useful.

You should aim to decouple the idea of deploy from release. This means changes should progress to production and your teams should be empowered to do so whenever they like. This doesn't mean that progress is released to users, it should be intentionally hidden from users until it is ready. In this way, your teams can deploy and test in production without disrupting users.

## Optimise for frequent learnings

Lean software development is all about reducing waste. By delivering iterative and incremental vertical slices more frequently you increase your opportunity to learn as a team by because each vertical slice represents an opportunity to receive and respond to feedback. The proxy measure for this is deployment frequency.

Remember elite performers are deploying to production multiple times per day poor performers release less than once per week.
