---
publishedAt: 2017-01-17
---

# Lightweight docker images for Go

On building lightweight Docker images for Go applications.

In my last article I wrote about [deploying Go apps to Now](/thoughts/2017-01-15-deploying-go-on-zeit-now). I arrived at a solution that compiled a Go app inside a Docker container. This means that the Docker container needed to be built with all the dependencies necessary to compile Go code into something useful.

## Measuring the size of a Docker image

We can find out the size of an image by building it with a tag. Using the article's example hello-world app we can run `docker build` in it's directory.

```
$ docker build -t hello-world .

Sending build context to Docker daemon 5.701 MB
Step 1 : FROM golang:alpine
 ---> 00371bbb49d5
Step 2 : ADD . /go/src/github.com/lukemorton/hello-world
 ---> Using cache
 ---> dda524fc2668
Step 3 : RUN go install github.com/lukemorton/hello-world
 ---> Using cache
 ---> f830049507ec
Step 4 : CMD /go/bin/hello-world
 ---> Using cache
 ---> ba41def5c5d6
Step 5 : EXPOSE 3000
 ---> Using cache
 ---> 9bd3101ccc6b
Successfully built 9bd3101ccc6b
```

Once the image has been built and tagged we can then check the size with the `docker images` command:

```
$ docker images hello-world --format {{.Size}}

251.9 MB
```

I filtered the results of docker images by passing the tag I gave the image when I built it, `hello-world`. I also provided the `--format` flag to only output the size. Try running `docker images` without any arguments to see a more detailed list of your images.

## Size of a Go binary

Okay so how much larger is this image than the Go binary that it compiles? In other words, how much cruft does the Docker image add? From the directory of our hello world example we can find out.

```
$ go build -o hello-world .
$ du -kh hello-world

5.4M	hello-world
```

Woah, 5.4MB of the 251.9MB image is taken up by our application. Thats about 2% of the image size. The rest of the space is taken up by the operating system and dependencies required to build the binary.

It's worth saying that the base image I used was `golang:alpine` which is the smallest possible image on which you can build Go code. If you change `FROM golang:alpine` in the `Dockerfile` to `FROM golang`, compile the Docker image and check the size, you'll see it's much bigger.

```
$ docker build -t hello-world:large .
$ docker images hello-world:large --format {{.Size}}

691 MB
```

That's like over 2.7 times the size of our alpine based image.

## Going microcontainer

What if I told you we could get the image size down the size of our binary? You'd believe me right :)

In order to get the image size down further we need to make a decision to compile our Go application outside of the Docker container. We then switch our base image from `golang:alpine` to `scratch`, the lightest image of them all, it's empty! It's name is actually a pun, `FROM scratch`.

I'm getting excited, let's update our Dockerfile:

```
FROM scratch
ADD hello-world /
CMD ["/hello-world"]
EXPOSE 3000
```

Now before we run `docker build` we need to compile our Go binary before hand. If you notice the `ADD hello-world /` that's copying the binary into the image. We need to build it.

```
$ CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o hello-world .
```

Unlike my original article, we provide a number of flags to the `go build` command. This is making our Go binary portable enough to run inside our empty image. Without these flags we get errors about missing shared libraries, it gets real ugly real quick, trust me.

Now let's build:

```
$ docker build -t hello-world:light .
$ docker images hello-world:light --format {{.Size}}

5.635 MB
```

We did it! Small huh? Let me know what you think on Twitter [@LukeMorton](https://twitter.com/LukeMorton).

#### Footnotes

- Credit goes to [Nick Gauthier's article](https://blog.codeship.com/building-minimal-docker-containers-for-go-applications/) for codeship on showing me how to build Go microcontainers.
- If you're using Now.sh to deploy your application you'll need to be paying for the service as the binary file will always be larger than the 1MB file upload limit in place for free users of their service. If you want to keep on the free tier, you'll have to put up with the image size of using `FROM golang:alpine`.
