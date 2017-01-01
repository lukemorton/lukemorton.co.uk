# <span class="break--always">Do the thing</span> that hurts the most

A story of fight over flight. Or how doing the things you're uncomfortable with
can help you in the long run.

Living life can hurt sometimes. There is a lot of pleasure in the world but pain
exists. Not only does it exist but it is important, it is a survival instinct.
Pain is the thing that triggers your fight or flight. This blog post is about
choosing to fight and the advantages of fighting rather than flying off.

Now let me start by saying this post isn't about violence. It is about a braver
kind of fighting that doesn't harm anyone. It's in relation to being a better
developer though this practice can stand you in good stead for handling life
too.

## Feel the pain

Pain is an indicator that something is going wrong. Noticing pain is your chance
to fix the thing that's going wrong. Take a team that are suffering from slow
and risky deployments.

A team is in charge of deploying a large and rather unmagnificent monolithic
application. It is built in PHP and has a mix of spaghetti western style and
some newer features in Symfony v1.

Deployments of the application are done over FTP with a maintenance mode so that
database changes can be made by hand without resulting in user data loss. At
least there is a staging version of the site for dry runs though keeping things
consistent across environments is a continued pain for the team.

Every member of the team feels the pain. The project manager has a strict
release management process that involves NASA-style checklists for every deploy
and backout plans if anything goes wrong mid process. There is a strict
quarterly deploy cycle since contemplating more regular deploys is just too
scary.

## Self-perpetuating problems

This pain and the fear thereof is indicative of an infection untreated.
Plastered over carelessly the situation is only getting worse with time. Sure
deploys are spaced apart but they still go wrong most of the time. Enacting the
backout procedure finishes off what remains of the day.

When they finally get all the changes made to production they take the
maintenance mode page down only to find more bugs reported by users. These bugs
often find themselves mysteriously fixed outside of the release cycle.

Drifting code on production then requires back porting to staging when
differences are noticed. No one really knows which environment should be
canonical. The sign up on staging has a remember me feature missing on production
and production has email verification that staging does not. The team vaguely
remember email verification being too hard to setup for staging as well as
production. This problem needless to say is self perpetuating. The more it
continues the harder change becomes.

Change gets harder because of two factors:

  1. As the process is slow and cumbersome so too is change to the application
  2. As the team gets battered by process the less energy they have fighting it
     to make changes

So the more the team fears the deploys, the more process they put in place, the
slower things get and the worse things become. Fear of pain in this case has
resulted in flight mode for the company.

## Deploys are painful so do them more

In this case, fighting is the solution. The pain indicates the solution. If
deploys are painful, and doing them less is causing problems, go in the other
direction. Deploys are painful so do them more.

Once the team comes to the agreement that the ever slowing process isn't helping
they brainstorm to identify problem areas. Large amounts of time spent on UAT to
cover 3 months worth of changes. Equally large amounts of time spent on planning
API integrations which still go wrong when deployed. Differences between staging
and production mean deployments still require debugging when going to
production. Paperwork specifications and deploy plans are usually out of date
and inaccurate. Bugs need to be fixed quicker than every 3 months.

They realise there is too much work around their deploys but struggle to think
of anything other than inventing more process and bureaucracy. Then one day a
developer coming back from a conference suggests the revolutionary idea of
continuous delivery. The idea that deploying more often will reduce the pains
around deployment.

Initially everyone was scared of making their pain more regular. They worried
that daily deploys would lead to no time for anything other than deployment.
However a VP had heard the crazy idea circulating, did her own research and
enforced a mandate to increase the teams delivery rate.

## Facing the fear

The team came up with a plan. They would aim to deliver every 10 business
days. They decided any problem they face they would solve rather than use it as
a reason as to why regular delivery was a bad idea.

The first struggle was the time it took to deploy. Instead of running from the
pain they instead looked for ways to reduce the time it took to deploy. Most of
the time taken was lack of parity between environments. To resolve this they
setup a code repository so they had a canonical source for their code. They then
setup an SSH script to use git to clone their code to each environment instead
of FTP.

With repeatable deployments they then had to focus on what they were going to
deliver. They started to plan their work into deployable achievable chunks. They
had to ensure code completion two days before deployment in order to ensure
enough time for UAT. This is lightyears faster than their process before!

Although not at the eXtreme end of the agile spectrum this team have felt the
rewards of pushing against their fears and coming out the other side. They did
the thing that hurt until it hurt no more.

## Pinch of salt

Of course you should not do everything that hurts. That would be silly.

Writing unit tests that sometimes pass and sometimes fail does not mean you
should start writing those kinds of tests more.

You can also speed up too fast and cause disasters. If the team described above
did not fix their deployment pipeline first or simply cut out UAT to speed up
their cycle they may have simply deployed code that was not fit for purpose.

You have to take your advice with a pinch of salt.

## Move faster, enjoy yourself

That said, a lot of the pain and fear of software delivery is caused by
malpractice sustained by unnecessary process. Management layers, excessive
meetings and planning, bureaucracy generally are all symptoms that we are
operating under the condition of fear.

Through facing up to indicative pain, in looking for actual solutions and
removing process where it bandages wounds that could have been avoided
altogether, software teams can move faster and enjoy themselves at the same
time.

Let me know what you think. Share your own experiences. Tweet me
[@LukeMorton](https://twitter.com/LukeMorton).
