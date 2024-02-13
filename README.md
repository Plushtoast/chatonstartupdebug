I am creating a chat message on the first activation of a module in a world. the message is intended to give special information to the user on how to setup the module (very required otherwise constant false error reports). For that I create a chat message in the ready hook.
Since v11 this message doesn't show up immediately anymore. instead an additional F5 reload needs to be done before it'll show up. at that the time the user already wont look at it anymore. the message exists in game.messages but it won't render in the chat.


# Steps

* Create a new world
* Login
* Enable module
* message not shown
* check game.messages in the console --> message is there
* reload foundry --> message renders fine