# Squiggcam

A small hobby project for turning an old Samsung Galaxy S4 into a home security camera.

Built with TypeScript/Angular, this is the web front-end for controlling motion sensing, notifications, and for
reviewing motion events/videos captured.

It communicates via JSON API to the back-end which then proxies requests through the local network to the phone
app.

Code works and is used for my home video surveillance (watching cats), but I haven't written tests etc. for all
the components... One for another day!

## TODO
- Refresh notification status when it has been updated server-side when you come back to page 

