import { act } from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'
import fetch from 'cross-fetch'
import ArticleBySlugPage from '../../pages/articles/[slug]'
import Article from 'src/components/Articles/Article'
import { RelatedContent } from 'ui'
import useLiveBlog from 'src/hooks/useLiveBlog'

jest.mock('cross-fetch')
jest.mock('src/hooks/useLiveBlog')

beforeEach(() => {
  useLiveBlog.mockImplementation((thought) => [thought])
})

test('content renders', () => {
  shallow(<ArticleBySlugPage thought={firstThought()} />)
})

test('derives state from prop sensibly', async () => {
  fetch.mockResolvedValue({
    json() {
      return [firstThought(), secondThought()]
    },
  })

  const page = await waitForUpdate(() =>
    mount(<ArticleBySlugPage thought={firstThought()} />)
  )

  await waitForUpdate(() => page.setProps({ thought: secondThought() }))

  expect(
    page.find({ title: secondThought().title.plain }).length
  ).toBeGreaterThan(0)
})

async function waitForUpdate(callback) {
  let page

  await act(async () => {
    page = callback()
    await new Promise((resolve) => setTimeout(resolve, 100))
    page.update()
  })

  return page
}

test('it loads relevant content', async () => {
  fetch.mockResolvedValue({
    json() {
      return [firstThought(), secondThought()]
    },
  })

  const page = await waitForUpdate(() =>
    mount(<ArticleBySlugPage thought={firstThought()} />)
  )

  expect(page.find(RelatedContent).isEmptyRender()).toBe(false)
})

function firstThought() {
  return {
    title: {
      html:
        '<h1 id="ways-of-approaching-clean-architecture">Ways of approaching Clean Architecture</h1>',
      plain: 'Ways of approaching Clean Architecture',
    },
    excerpt: {
      html:
        '<p>In which I ask questions about the ways that a team might approach Clean Architecture in a way you can still benefit from the productivity of a framework.</p>',
      plain:
        'In which I ask questions about the ways that a team might approach Clean Architecture in a way you can still benefit from the productivity of a framework.',
    },
    slug: '2019-12-20-ways-of-approaching-clean-architecture',
    tags: ['Clean Architecture'],
    publishedAt: {
      pretty: '20th December 2019',
      iso: '2019-12-20T00:00:00.000+00:00',
    },
    content: {
      html:
        '<p>In which I ask questions about the ways that a team might approach Clean Architecture in a way you can still benefit from the productivity of a framework.</p>\n<p>Many approach Clean Architecture as an all or nothing approach. You are either architecting your system(s) that way, or you aren&#39;t. I agree up to a certain point in that you can quickly stop benefitting from Clean Architecture if you ignore it&#39;s boundaries which can particularly be an issue in dynamic languages like Ruby.</p>\n<p>Where I disagree is in the opposite direction when Clean Architecture can push your domain so far from the delivery mechanism, say the Ruby on Rails framework, to the point you can no longer benefit from the Rails ecosystem. Worse still I see teams starting without a framework altogether, taking a HTTP routing library such as Sinatra, and then over time end up adding framework features into it like ActiveRecord but gain none of the benefits of Rails development speed and gem ecosystem.</p>\n<h2 id="throwing-the-framework-out-with-the-bath-water">Throwing the framework out with the bath water</h2>\n<p>An example I see in the wild is where you can no longer benefit from Rails view helpers like <a href="https://guides.rubyonrails.org/form_helpers.html"><code>form_with</code></a> because you either used Sinatra, or you&#39;ve hidden your ActiveRecord or database DAOs so far away from your controllers you can&#39;t inject them into your views to use with <code>form_with</code>.</p>\n<p>There are bigger examples too, such as losing the ability use gems such as Devise for authentication in your application, and not being able to use Paperclip or these days <a href="https://guides.rubyonrails.org/active_storage_overview.html">ActiveStorage</a>, and creating your own queuing drivers rather than using <a href="https://guides.rubyonrails.org/active_job_basics.html">ActiveJob</a>. The list goes on, and it drives me crazy because folks don&#39;t know what they&#39;re missing in productivity! More experienced with Clean Architecture and generalist programmer practices we miss the community-specific learnings and wisdom that may exist within a particular ecosystem like Rails.</p>\n<p>To quote myself or maybe Danny Dyer, &quot;it does my absolute nut in&quot; to see such learnings from a community overlooked. It&#39;s no ones fault of course, empathy for all, but it seems like institutional memory loss in my mind. What a waste.</p>\n<h2 id="a-middle-way">A middle way</h2>\n<p>I believe there is a path that sits between the all or nothing approaches of both pure framework versus pure Clean Architecture. There has to be. I ask myself a lot of questions around this, I certainly don&#39;t have all the answers.</p>\n<p>How might you approach Clean Architecture progressively where you use it in particularly complex areas of your application? Should ATDD start directly in your <code>lib/</code> far away from your <code>app/</code> in a Rails application? Or could it start with a feature test, and then a request test, and then dive into a use case unit test? How fragile would your application be in that scenario?</p>\n<p>How might you adopt Clean Architecture in a way that you can benefit from Devise, ActiveStorage and ActiveJob?</p>\n<h2 id="discipline-required">Discipline required</h2>\n<p>How do you maintain a discipline to know when you move from Rails CRUD into Clean Architecture? Or more still, how do you even know when to use one or the other?</p>\n<p>These are ongoing questions I ask myself, and our team at <a href="https://www.madetech.com/careers">Made Tech</a>. Our Rails Working Group is actively looking at how we can bridge the gap, engaging Clean Architecture with joy as Rails developers, and engaging with Rails community wisdom as generalist XP professionals.</p>\n<p>Stay tuned for more! I also recently wrote about <a href="http://localhost:3000/articles/2019-12-18-why-take-a-clean-architecture-approach-to-rails">why you might want to adopt Clean Architecture in a Rails application</a>.</p>',
      plain:
        'In which I ask questions about the ways that a team might approach Clean Architecture in a way you can still benefit from the productivity of a framework.\nMany approach Clean Architecture as an all or nothing approach. You are either architecting your system(s) that way, or you aren&#39;t. I agree up to a certain point in that you can quickly stop benefitting from Clean Architecture if you ignore it&#39;s boundaries which can particularly be an issue in dynamic languages like Ruby.\nWhere I disagree is in the opposite direction when Clean Architecture can push your domain so far from the delivery mechanism, say the Ruby on Rails framework, to the point you can no longer benefit from the Rails ecosystem. Worse still I see teams starting without a framework altogether, taking a HTTP routing library such as Sinatra, and then over time end up adding framework features into it like ActiveRecord but gain none of the benefits of Rails development speed and gem ecosystem.\nThrowing the framework out with the bath water\nAn example I see in the wild is where you can no longer benefit from Rails view helpers like form_with because you either used Sinatra, or you&#39;ve hidden your ActiveRecord or database DAOs so far away from your controllers you can&#39;t inject them into your views to use with form_with.\nThere are bigger examples too, such as losing the ability use gems such as Devise for authentication in your application, and not being able to use Paperclip or these days ActiveStorage, and creating your own queuing drivers rather than using ActiveJob. The list goes on, and it drives me crazy because folks don&#39;t know what they&#39;re missing in productivity! More experienced with Clean Architecture and generalist programmer practices we miss the community-specific learnings and wisdom that may exist within a particular ecosystem like Rails.\nTo quote myself or maybe Danny Dyer, &quot;it does my absolute nut in&quot; to see such learnings from a community overlooked. It&#39;s no ones fault of course, empathy for all, but it seems like institutional memory loss in my mind. What a waste.\nA middle way\nI believe there is a path that sits between the all or nothing approaches of both pure framework versus pure Clean Architecture. There has to be. I ask myself a lot of questions around this, I certainly don&#39;t have all the answers.\nHow might you approach Clean Architecture progressively where you use it in particularly complex areas of your application? Should ATDD start directly in your lib/ far away from your app/ in a Rails application? Or could it start with a feature test, and then a request test, and then dive into a use case unit test? How fragile would your application be in that scenario?\nHow might you adopt Clean Architecture in a way that you can benefit from Devise, ActiveStorage and ActiveJob?\nDiscipline required\nHow do you maintain a discipline to know when you move from Rails CRUD into Clean Architecture? Or more still, how do you even know when to use one or the other?\nThese are ongoing questions I ask myself, and our team at Made Tech. Our Rails Working Group is actively looking at how we can bridge the gap, engaging Clean Architecture with joy as Rails developers, and engaging with Rails community wisdom as generalist XP professionals.\nStay tuned for more! I also recently wrote about why you might want to adopt Clean Architecture in a Rails application.',
    },
  }
}

function secondThought() {
  return {
    title: {
      html:
        '<h1 id="why-take-a-clean-architecture-approach-to-rails">Why take a Clean Architecture approach to Rails?</h1>',
      plain: 'Why take a Clean Architecture approach to Rails?',
    },
    excerpt: {
      html:
        '<p>On the reasoning why and how you might use a Clean Architecture approach in Rails applications. Warning: it&#39;s nuanced and full of compromise.</p>',
      plain:
        'On the reasoning why and how you might use a Clean Architecture approach in Rails applications. Warning: it&#39;s nuanced and full of compromise.',
    },
    slug: '2019-12-18-why-take-a-clean-architecture-approach-to-rails',
    tags: ['Clean Architecture', 'Ruby on Rails'],
    publishedAt: {
      pretty: '18th December 2019',
      iso: '2019-12-18T00:00:00.000+00:00',
    },
    content: {
      html:
        '<p>On the reasoning why and how you might use a Clean Architecture approach in Rails applications. Warning: it&#39;s nuanced and full of compromise.</p>\n<p>A few years ago I was introduced to the concept of Clean Architecture. When I saw it something clicked in my brain. Before Clean Architecture I chose to remove logic from controllers and models of applications I built into Plain Old Ruby Objects (POROs). While I maintained some consistency across projects, my approach to architecting and testing these POROs varied more often than not and it often felt like I was reinventing the wheel.</p>\n<h2 id="before-clean-architecture-services">Before Clean Architecture: Services</h2>\n<p>The POROs were usually placed into a directory like <code>app/services</code> and called Service Objects or just Services. The Service Object pattern involves the creation classes that represent business logic or behaviour that would otherwise sit too close to the the database in an ActiveRecord model or in the controller.</p>\n<p>After having a little google I found references going as far back as 2012 including a blog post on <a href="https://blog.carbonfive.com/2012/01/10/does-my-rails-app-need-a-service-layer/">&quot;the service layer [that] lies between controllers and models&quot;</a> and a RailsCasts video on <a href="http://railscasts.com/episodes/398-service-objects">using Service Objects in Rails</a>.</p>\n<p>This pattern is probably the most common Rails pattern for keeping controllers and models skinny though it remains decidedly <em>non-standard</em> by <a href="https://twitter.com/dhh/status/280717161029328896">Rails creator DHH</a>.</p>\n<blockquote>\n<p>It&#39;s like we have a J2EE renaissance fair going on at the moment. Digging up every discredited pattern of complexity to do a reunion tour.</p>\n</blockquote>\n<p>Haha, I laughed at that one. He was still hurting from his time as a Java developer when he tweeted that I suspect.</p>\n<blockquote>\n<p>It&#39;s given birth to some truly horrendous monstrosities of architecture. A dense jungle of service objects, command patterns, and worse.</p>\n</blockquote>\n<p>Yup, that is the author of Rails&#39; view of service objects. He don&#39;t like &#39;em much does he? <a href="https://dhh.dk/2014/tdd-is-dead-long-live-testing.html">He also doesn&#39;t like TDD</a>. YMMV.</p>\n<p>I think it&#39;s okay for the Rails author to not support a common idiom within the community, his mileage did vary. We have to have empathy for differing views in a complex world.</p>\n<p>DHH was right about one thing though: lumping the Service Object and Command pattern together. You&#39;ll find the most commonly touted approach to services in Rails is to name them as verbs and have a common public method like <code>#run</code>, <code>#call</code>, <code>#execute</code> or <code>#exec</code>. This isn&#39;t the Service Object pattern in reality – it&#39;s the Command pattern <a href="https://gist.github.com/blaix/5764401">as mentioned by Martin Fowler</a>.</p>\n<h2 id="introducing-clean-architecture-even-further-from-pure-rails">Introducing Clean Architecture: Even further from pure-Rails</h2>\n<p>Okay so how about Clean Architecture? I&#39;ve certainly seen &quot;by the book&quot; Clean Architecture applied to Rails applications. Some teams love it! In this pure adoption you will usually find application and enterprise business rules in the <code>lib/</code> directory of a Rails app rather than <code>app/</code>. You will also find directories named <code>domain/</code> or <code>entities/</code>, <code>interactions/</code> or <code>use_cases/</code>, and <code>gateways/</code> or <code>adapters/</code> in <code>lib/</code>.</p>\n<p>I&#39;ve also seen teams of Ruby on Rails developers completely reject Clean Architecture. They already have their idioms for this problem! Something didn&#39;t click in their brains like it did in mine. This was clearly a stretch too far from the Rails way.</p>\n<p>Again, empathy for all, everyone can have view that differ. For me I found the concept of breaking down business rules into entities, use cases and adapters a fairer split of labour than simply lifting and shifting controller code into a single service object. That said, in many cases where an application is made up of (mostly) simple CRUD, this extra layer of complexity wasn&#39;t needed at all.</p>\n<p>The world isn&#39;t as simple as always using one pattern or another. Sure it&#39;s easier to teach one way, rather than the nuances of many, but knowing and being able to argue the tradeoffs with yourself is the real wisdom.</p>\n<h2 id="introducing-clean-architecture-services-and-other-friends">Introducing Clean Architecture: Services (and other friends)</h2>\n<p>This world of nuance has led me to take a more compromising view on the adoption of Clean Architecture in the Rails world – when it makes sense to use Clean Architecture at all.</p>\n<p>A more friendly approach for Rails developers is to use more Rails idioms. There are plenty of idioms that match up with the entity, use case and gateway classes from Clean Architecture.</p>\n<p>The Services convention in Rails clearly matches that of use case classes that represent actions a user can make on a system. This especially rings true for me when taking the Command pattern approach to Services which is the same convention I see used in Clean Architecture use cases. Just put your use cases in <code>app/services</code>!</p>\n<p>Entities are use to represent enterprise-level business rules. Code that will likely be shared across use cases and business functions. These need only introducing when you want to share behaviour between use cases, or when you want to abstract your use cases from the database and the ActiveRecord pattern. There are plenty of libraries including ActiveModel that provide helpers to make the definition of these classes easier. You may need to debate with your team whether these can sit beside database representations in <code>app/models</code> or whether you split them out into <code>app/domains</code>.</p>\n<p>Adapters are already known to Rails developers as the Adapter pattern is rife there too. Plenty of applications have adapters for connecting to external APIs or databases. These can go in <code>app/adapters</code>.</p>\n<p>So you see, Clean Architecture isn&#39;t actually a million miles away from being idiomatic to Rails developers. Sure it&#39;s full of compromise, and is probably only worth it when your application is complex enough. We have to learn these nuances and know when to compromise to deliver value for our users and organisations.</p>',
      plain:
        'On the reasoning why and how you might use a Clean Architecture approach in Rails applications. Warning: it&#39;s nuanced and full of compromise.\nA few years ago I was introduced to the concept of Clean Architecture. When I saw it something clicked in my brain. Before Clean Architecture I chose to remove logic from controllers and models of applications I built into Plain Old Ruby Objects (POROs). While I maintained some consistency across projects, my approach to architecting and testing these POROs varied more often than not and it often felt like I was reinventing the wheel.\nBefore Clean Architecture: Services\nThe POROs were usually placed into a directory like app/services and called Service Objects or just Services. The Service Object pattern involves the creation classes that represent business logic or behaviour that would otherwise sit too close to the the database in an ActiveRecord model or in the controller.\nAfter having a little google I found references going as far back as 2012 including a blog post on &quot;the service layer [that] lies between controllers and models&quot; and a RailsCasts video on using Service Objects in Rails.\nThis pattern is probably the most common Rails pattern for keeping controllers and models skinny though it remains decidedly non-standard by Rails creator DHH.\n\nIt&#39;s like we have a J2EE renaissance fair going on at the moment. Digging up every discredited pattern of complexity to do a reunion tour.\n\nHaha, I laughed at that one. He was still hurting from his time as a Java developer when he tweeted that I suspect.\n\nIt&#39;s given birth to some truly horrendous monstrosities of architecture. A dense jungle of service objects, command patterns, and worse.\n\nYup, that is the author of Rails&#39; view of service objects. He don&#39;t like &#39;em much does he? He also doesn&#39;t like TDD. YMMV.\nI think it&#39;s okay for the Rails author to not support a common idiom within the community, his mileage did vary. We have to have empathy for differing views in a complex world.\nDHH was right about one thing though: lumping the Service Object and Command pattern together. You&#39;ll find the most commonly touted approach to services in Rails is to name them as verbs and have a common public method like #run, #call, #execute or #exec. This isn&#39;t the Service Object pattern in reality – it&#39;s the Command pattern as mentioned by Martin Fowler.\nIntroducing Clean Architecture: Even further from pure-Rails\nOkay so how about Clean Architecture? I&#39;ve certainly seen &quot;by the book&quot; Clean Architecture applied to Rails applications. Some teams love it! In this pure adoption you will usually find application and enterprise business rules in the lib/ directory of a Rails app rather than app/. You will also find directories named domain/ or entities/, interactions/ or use_cases/, and gateways/ or adapters/ in lib/.\nI&#39;ve also seen teams of Ruby on Rails developers completely reject Clean Architecture. They already have their idioms for this problem! Something didn&#39;t click in their brains like it did in mine. This was clearly a stretch too far from the Rails way.\nAgain, empathy for all, everyone can have view that differ. For me I found the concept of breaking down business rules into entities, use cases and adapters a fairer split of labour than simply lifting and shifting controller code into a single service object. That said, in many cases where an application is made up of (mostly) simple CRUD, this extra layer of complexity wasn&#39;t needed at all.\nThe world isn&#39;t as simple as always using one pattern or another. Sure it&#39;s easier to teach one way, rather than the nuances of many, but knowing and being able to argue the tradeoffs with yourself is the real wisdom.\nIntroducing Clean Architecture: Services (and other friends)\nThis world of nuance has led me to take a more compromising view on the adoption of Clean Architecture in the Rails world – when it makes sense to use Clean Architecture at all.\nA more friendly approach for Rails developers is to use more Rails idioms. There are plenty of idioms that match up with the entity, use case and gateway classes from Clean Architecture.\nThe Services convention in Rails clearly matches that of use case classes that represent actions a user can make on a system. This especially rings true for me when taking the Command pattern approach to Services which is the same convention I see used in Clean Architecture use cases. Just put your use cases in app/services!\nEntities are use to represent enterprise-level business rules. Code that will likely be shared across use cases and business functions. These need only introducing when you want to share behaviour between use cases, or when you want to abstract your use cases from the database and the ActiveRecord pattern. There are plenty of libraries including ActiveModel that provide helpers to make the definition of these classes easier. You may need to debate with your team whether these can sit beside database representations in app/models or whether you split them out into app/domains.\nAdapters are already known to Rails developers as the Adapter pattern is rife there too. Plenty of applications have adapters for connecting to external APIs or databases. These can go in app/adapters.\nSo you see, Clean Architecture isn&#39;t actually a million miles away from being idiomatic to Rails developers. Sure it&#39;s full of compromise, and is probably only worth it when your application is complex enough. We have to learn these nuances and know when to compromise to deliver value for our users and organisations.',
    },
  }
}
