# Data and Behaviour

This is my take on **data** and **behaviour**. The two
intertwinning components that make our programs.

In OOP madland behaviour and data are combined into a single
entity. Yes that's right, an object. To an OOP magician this
is a self contained unit that can passed around a program but
ideally doesn't leak implementation details.

<script src="https://gist.github.com/DrPheltRight/6670990.js"></script>

The above example for instance doesn't leak how it formulates
the full name of a `User` or how it works out their age. It
simply provides two methods `#full_name` and `#age` that can
be used by related logic to find these values.

Personally I see that example as leaky still. Before I go into
the whys I first want to explain the difference between data
and behaviour.

Data is data. It is information that never changes. `23` is an
integer. It's value is always `23`. It never changes. It is
data.

`20+3` will also always equal `23` as long as `+` always
behaves the same but it isn't data. It's behaviour. It does
something. It calculates a result which in most normal places
will produce the integer `23` that as explained above is
data. Let's work on some definitions.

> Data is a value that doesn't change

This works. `'Luke'` is always `'Luke'`. It doesn't suddenly
change to `'Bob'`.

> Behaviour takes data and produces more data

Based on the example of `+` when given two integers produces a
third integer this definition fits.

## Objects are a mess

So bringing this back to OOP madland some wizards choose to
mix data and behaviour into one magical object. The `User`
class defined above is given data on construction and produces
an object which then can be used to work out some data that
didn't exist on construction.

<script src="https://gist.github.com/DrPheltRight/6670997.js"></script>

The values `'Luke Morton'` and `23` were never passed to the
`#new` method of `User`. They were produced by behaviour
contained within the object.

How is this a mess? Put simply it's because data is tied to
behaviour. And behaviour happens at a later stage to the data
being passed into it. The setbacks include:

 - Dependencies on multiple method names per object. Bigger
   exposure means more potential breaking points when methods
   are renamed or behaviour altered but not updated in
   implementation. Not to mention the added code bloat of
   multiple call sites which also leads to debugging
   complexity.
 - Delayed behaviour means side effects can happen at anytime
   when called throughout your application. Database calls
   might error in the view part of your application when
   triggered by a method call to a model.
 - Data is tied within the implementation of the model rather
   than being a more common data type like a hash.

Let's solve each of these bug bears.

### Separating data and behaviour

We can use the same solution found in a [previous post][1] on
the single resposibility principle.

<script src="https://gist.github.com/DrPheltRight/6671005.js"></script>

This object only has one public method, `#to_hash`. Only one
implementation to leak. It takes a hash of data and produces
another. And it produces it all at the first call time.

This also solves the issue of potential side effects. One
call site means you can trap potential issues all in one place
like a controller with a try..catch (begin..rescue).

Guess what? The third problem is solved too. Since data is
passed around as a hash. No object with potential contraints
on data access (think no direct access to initial values) can
hold us back. We can do much more with a hash as it's a common
data type. External libraries can consume hashes far easier
than bespoke objects common to fewer libraries.

I'll talk more in the future about the versatilities of using
hashes to store data.

[1]: /thoughts/2013-09-21-taking-srp-further
