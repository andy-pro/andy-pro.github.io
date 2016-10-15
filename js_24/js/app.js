/* lesson 23-24 */

requirejs.config({
    "baseUrl": "js",
    "paths": {
      "app": "todo",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min",
      "pubsub": "//cdn.jsdelivr.net/pubsubjs/1.4.2/pubsub.min"
    }
});

requirejs(["todo/index"]);
