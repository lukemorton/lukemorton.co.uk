---
publishedAt: 2019-09-23
canonical: https://www.madetech.com/blog/importance-of-information-management-in-agile
featuredImage: /media/user-story-map.jpg
---

# <span class="larger">Importance of information in agile delivery</span>

On the importance of information management in agile delivery teams. Agile artefacts such as roadmaps, backlogs and boards are all too often ephemeral making it harder to get a full view of the digital products you are building and managing over time.

<p><img src="/media/user-story-map.jpg" alt="A mock digital product roadmap" width="3000" height="2000" class="ratio-3-2" /></p>

I risk boring people with this topic, as well as upsetting the folk who dislike most forms of documentation, and the folk who love the code to be the documentation. I think it’s important nonetheless to address a problem I see affecting most digital products and their development teams.

I often ask these questions of product teams, but much rarer do I find the answers:

- What needs is your product currently meeting?
- What desired outcomes are you currently measuring yourself against?
- What impact has your product had to date?

In this blog post, I address the importance of information management in agile software development. Bear with me on this one…

## Software development requirements

In waterfall software development, requirements are written before design and implementation phases. This model meant information flowed in a single direction, like a waterfall, which has proven to be inflexible for software development where requirements change regularly and learning is continuous. With the adoption of agile, teams could instead incrementally develop and document requirements.

What do we mean by “requirements” though? In software development, requirements are a way of expressing the needs and desired outcomes of a piece of software from various perspectives including business, user, architecture, functional, and non-functional requirements.

Expressing requirements, or as I prefer, needs and desired outcomes, of a particular software product is important for making sure stakeholders, from budget sponsors through to users, are happy and satisfied when that software is delivered. We build products to have an impact after all, whether that’s enabling members of the public to apply for a passport online while reducing the public cost of providing passports for taxpayers, or enabling businesses to sell online while enabling shoppers to purchase without needing to physically visit a town centre. Requirements enable us to express these desired outcomes.

## Context throughout the lifecycle of a product

Expressing needs and desired outcomes isn’t only important during development. Context is needed throughout the lifecycle of a product. Teams need to be able to continuously validate whether their products are having the desired outcomes, knowing what those desired outcomes are, is important. When new needs are required, we need to understand the current context of a product before suggesting changes. We should be able to retire functionality too, when a product is no longer having the impact it once was, and so understanding that impact is no longer being met requires past context.

The current state of a product, in terms of the needs it is currently fulfilling and the outcomes and impact currently being worked towards, is an important asset. This information needs to be managed carefully and maintained throughout the products lifetime.

Beyond behavioural automated tests and manual test plans, in agile software development terms, I rarely find up to date documentation for the current state of a product. This means that understanding the existing context of a product is often an expensive process that involves conversations with team members who have been on the team for a long time and know this inside out. Even then, memory can be inaccurate or differ between members of a team. This means onboarding new members, or providing an overview to stakeholders outside of the team, is inefficient.

## A product backlog is a delta

You might think to yourself, hold on, isn’t the product backlog an up to date list of needs and desired outcomes?

> “The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product.”
> The Scrum Guide™

It’s true that the product backlog is an up to date list, but it’s a list of “requirements of any changes to be made to the product,” rather than an artefact representing the existing state of a product. A product backlog is a delta from the current state, towards the desired state. It’s ephemeral and constantly changing.

So then, what to do about managing information about the existing context of a product?

## Managing information – the agile way

It should be a product manager’s concern to ensure that the team has an up to date list of:

- Needs being met by the product
- Changes made to the product, often expressed in (user) stories, so that as needs evolve you have a changelog that can provide context around why past decisions were made. The changes should be linked back to needs.
- Test plans for each story, or at least, every epic user story, for ensuring that core needs are being met
- Testable hypotheses or KPIs for tracking whether that story is having the desired outcomes and impact as intended
- Historic record of tasks, incidents, and technical debt related to each story
- Product managers need to manage this information about their product, ensuring that information is accurate and useful, while not burdensome for the team to maintain.

How exactly this information should be managed or where is for your team to decide. Some teams keep this information documented on a wall, some use a tool like confluence, some keep this information in Trello or JIRA. Some prefer to keep this information in code. Let your team decide what is best for them.

The important thing here is to be able to understand the current context of a product, and to maintain a historical record of important events relating to the product. It is this historical record that maintains institutional memory, and enables easier onboarding and decision making in the future.

## Future series on agile information management

I’m planning on writing more on this topic in the future, including a deeper dive into product backlogs and their ephemeral nature, a guide on tools of better agile information management, and perhaps most importantly, a detailed example of product information architecture for product managers. Stay tuned!

_This post was originally published on [Made Tech's Blog](https://www.madetech.com/blog/importance-of-information-management-in-agile)_
