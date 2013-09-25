# Interaction

Some thoughts on application interaction. This is your
**application** logic and **controllers**.

So you've got your [data][1] and [view][2] triads written and
tested. How are you supposed to serve them via HTTP to your
users? This is where the interaction layer comes into play.

Applications are interfaces to your business logic. They can
be HTTP (web) applications, command line clients, bare bones
TCP, ZeroMQ or whatever!

Let's start with a sinatra application.

~~~ ruby
require 'sinatra'

get '/' do
  'Hello world'
end

get '/:name' do
  "Hello #{params[:name]}"
end
~~~

Okay so I've provided you a hello world for sinatra and
minimal business logic. No data or view logic. However I've
already talked that malarkey. This example is an application.
It is the interface for HTTP that business logic requires.

It is however only suitable for limited life shelf
applications or tiny ones. We need to introduce the other
part of interaction now, controllers.

~~~ ruby
require 'sinatra'

class HelloWorldController
  def view(request)
    name = request.fetch(:name, :world)
    "Hello #{name}"
  end
end

hello_world_controller = HelloWorldController.new

get '/' do
  hello_world_controller.view({})
end

get '/:name' do
  hello_world_controller.view(:name => params[:name])
end
~~~

So now we've added a controller to contain our (albeit over
simplistic) business logic. This abstraction allows us to
separate our application interface, in this case sinatra
routing, and our business logic execution.

## Brief roundup

Let's go over two points:

 - applications serve your business logic to users
 - controllers provide business logic to applications

Ahhh, separations of concerns.

Applications know about receiving requests and serving
responses. They don't care about business logic
implementation. It never need know about your mappers, data
and view models, etc. All an application needs to do is pass
request values into a controller and receive a response back.

Controllers talk to your business logic and almalgamate it for
application consumption. A controller might have a `#view`
method for GET requests in HTTP, or `#action` for POST
requests but these method names should be protocol and thus
application agnostic. A view can be served over many protocols
and so can actions be received.

This separation then gives you the flexibility to swap out
applications. Start with Sinatra, move to Rails, realise it's
a piece of junk, move to Padrino and then settle on Sinatra
with some Padrino components. Your controllers should not need
to be changed. Your application layer should normalise
requests into hashes so that your controllers can remain
ignorant of them.

Think of the additional power this provides. Being able to
replace your application layer with anything. Say a test
layer? You can run your entire application stack from tests
without requiring a framework at all! Never again will you
have to put up with slow rails integration tests.

## Final notes

With this abstraction of interaction you will be able to grow
your entire application without ever being stuck to a
particular vendor. I'm not against using rails. I'm against
being stuck to it. This pattern described here will keep you
free of those constraints.

I use this equation to describe the interaction layer.

> I = A + C

I've previously written about the [data][1] and [view][2]
triads. Let me know what you think of the I, D or the V that
I've written about [@LukeMorton][3].

[1]: /thoughts/2013-09-25-data
[2]: /thoughts/2013-09-24-views
[3]: https://twitter.com/LukeMorton

