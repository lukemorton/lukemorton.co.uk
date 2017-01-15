# Deploying a Go app on Now

A walkthrough on how to use Docker to deploy a Go app on Zeit's Now realtime global deployment platform.

I recently moved www.lukemorton.co.uk to being hosted on [Now](https://now.sh). It's a node.js app built with Next.js and I'm telling ya, it was a great experience as Now is super easy to get going on.

After moving this site across I felt excited to try Now for something else. I've always wanted to write an API in Go and Now can serve pretty much any tech stack as it supports Docker. So I gave it a shot and this hello world blog post documents my learnings.

## Setting up your development environment

In case you haven't built a Go app before, I'll quickly go over how to set it up on your machine.

1. Install [Go](https://golang.org/doc/install#install) for your platform
2. Then create your Go workspace, it's an odd concept but essentially vendored libraries and your own projects will be installed in this workspace, run `mkdir ~/GoWork` and then `export $GOPATH=~/GoWork`
3. Install the [now-cli](https://github.com/zeit/now-cli/) with `npm install -g now-cli`

## Creating a hello world

Now let's create a quick HTTP hello world example in Go. First we need a directory within your Go workspace to:

```
mkdir -p $GOPATH/src/github.com/lukemorton/hello-world
```

You can replace `lukemorton` with your own GitHub username.

Now we need some code, below is my quick Go hello world. It's a very simple hello world web app that runs on port 3000. There's some logging in the to let you know when it starts and if something goes wrong.

``` go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello world")
	})

	log.Println("Serving on localhost:3000")
	err := http.ListenAndServe(":3000", nil)
	log.Fatal(err)
}
```

Save this file in your new directory as `hello.go`. Now we can run it:

```
go run hello.go
# => 2017/01/15 15:36:26 Serving on localhost:3000
```

Visit your hello world in your browser [http://localhost:3000](http://localhost:3000). You should see "Hello world" printed.

## Deploying with Docker

Coooooool, so we've got our Go web app and now we want to deploy it. To do this we are going to create a Docker image that compiles and runs our Go app for us. Once we have this we can deploy it to Now.

We then create our `Dockerfile` which uses golangs official alpine image. Alpine is a lightweight operating system ideal of creating small(er) docker images.

```
FROM golang:alpine
ADD . /go/src/github.com/lukemorton/hello-world
RUN go install github.com/lukemorton/hello-world
CMD ["/go/bin/hello-world"]
EXPOSE 3000
```

Not much to it is there. Make sure you save this as `Dockerfile` in the same directory as your `hello.go` file. All it does is copy `hello.go` into the container, compiles it into a binary, runs that binary and exposes the port 3000. Again you can replace `lukemorton` with your own GitHub username.

Now we are ready to deploy:

```
now
```

And thats it. It'll upload your files, build a Docker container and run it for you. In case you wanted to look over all the files, I've placed them on [my GitHub](https://github.com/lukemorton/hello-world). Let me know what you think on Twitter [@LukeMorton](https://twitter.com/LukeMorton).
