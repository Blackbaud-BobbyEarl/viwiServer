<a name="0.0.3"></a>
## [0.0.3](https://github.com/wzr1337/viwiServer/compare/0.0.2...v0.0.3) (2017-03-17)


### Bug Fixes

* **main:** port respect ([8bf14ce](https://github.com/wzr1337/viwiServer/commit/8bf14ce))
* **package:** add missing dependencies ([12c296b](https://github.com/wzr1337/viwiServer/commit/12c296b))
* **test:** use the new options object to spin up a server (no port collision with a running server) ([76fc722](https://github.com/wzr1337/viwiServer/commit/76fc722))
* send initial data message on new subscription to resources ([52c2c5b](https://github.com/wzr1337/viwiServer/commit/52c2c5b))


### Features

* **cli:** move cli stuff to cli ([3c60840](https://github.com/wzr1337/viwiServer/commit/3c60840))
* **docker:** add a Dockerfile and nam build task ([1324214](https://github.com/wzr1337/viwiServer/commit/1324214))
* **general:** options can be given with the run() command ([0928644](https://github.com/wzr1337/viwiServer/commit/0928644))
* **helpers:** move reusable code to helpers ([dbd9644](https://github.com/wzr1337/viwiServer/commit/dbd9644))
* **port:** port argument used ([5b418c1](https://github.com/wzr1337/viwiServer/commit/5b418c1))
* **server:** return Location header on creation of new elements ([a18800c](https://github.com/wzr1337/viwiServer/commit/a18800c))
* **types:** add xObject ([da57537](https://github.com/wzr1337/viwiServer/commit/da57537))
* **viwiWebSocket:** report event name on errors on the WebSocket channel ([6421064](https://github.com/wzr1337/viwiServer/commit/6421064))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/wzr1337/viwiServer/compare/1ede568...0.0.2) (2017-03-04)


### Bug Fixes

* **main:** compare lowercase names for subscription ([da3e9f7](https://github.com/wzr1337/viwiServer/commit/da3e9f7))
* **main:** fix signature of serviceGET, doe snot need resource ([09d2140](https://github.com/wzr1337/viwiServer/commit/09d2140))
* **main:** fixes toString() of undefined bug for numeric check ([bb17c6c](https://github.com/wzr1337/viwiServer/commit/bb17c6c))
* **main:** unsubscribe working now ([6828af8](https://github.com/wzr1337/viwiServer/commit/6828af8))
* **subscriptions:** clients can unsubscribe separately ([8403354](https://github.com/wzr1337/viwiServer/commit/8403354))
* **websocket:** handle unssubscriptions and websocket breakdowns ([ae35000](https://github.com/wzr1337/viwiServer/commit/ae35000))


### Features

* **$fields:** add support for $fields on GET element queries ([6987ec2](https://github.com/wzr1337/viwiServer/commit/6987ec2))
* **buildchain:** add clean task ([54d6214](https://github.com/wzr1337/viwiServer/commit/54d6214))
* **compression:** add compression ([fd27962](https://github.com/wzr1337/viwiServer/commit/fd27962))
* **cors:** add cors relsoves #6 ([ea5208a](https://github.com/wzr1337/viwiServer/commit/ea5208a))
* **gulp:** add build task ([fee97d8](https://github.com/wzr1337/viwiServer/commit/fee97d8))
* **index:** add service listing, require service id ([4710047](https://github.com/wzr1337/viwiServer/commit/4710047))
* **logging:** add winston logger ([f4f9b43](https://github.com/wzr1337/viwiServer/commit/f4f9b43))
* **logginig:** unify query logging ([0ebf137](https://github.com/wzr1337/viwiServer/commit/0ebf137))
* **main:** add basic subscription capabilities ([1ede568](https://github.com/wzr1337/viwiServer/commit/1ede568))
* **main:** add unscubscribe feature on a per-event basis ([86ffc63](https://github.com/wzr1337/viwiServer/commit/86ffc63))
* **main:** respond with message on 500 error ([0042009](https://github.com/wzr1337/viwiServer/commit/0042009))
* add resource POSt for colletctions ([79e491d](https://github.com/wzr1337/viwiServer/commit/79e491d))
* prepare for easier subscription handling for updatelimit and changedetection ([96ccf9c](https://github.com/wzr1337/viwiServer/commit/96ccf9c))
* **plugin:** prepare subscriptions on resource level ([d3b51c4](https://github.com/wzr1337/viwiServer/commit/d3b51c4))
* **plugins:** add initial plugin loader mechanism ([923b554](https://github.com/wzr1337/viwiServer/commit/923b554))
* **plugins:** moved all REST calls into plugin, Subscriptions to follow ([7968d88](https://github.com/wzr1337/viwiServer/commit/7968d88))
* **resource subscriptions:** add resource subscription (no filters or paging yet) ([350cfa8](https://github.com/wzr1337/viwiServer/commit/350cfa8))
* **test:** add initial tests ([cc39fc3](https://github.com/wzr1337/viwiServer/commit/cc39fc3))



