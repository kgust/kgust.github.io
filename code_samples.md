---
layout: home
title: Code Samples
subtitle: Code samples from my projects
---
# {{page.subtitle}}

Code should be clear, consise, and written so that it is self-documenting
as much as possible. I take pride in all the code that I produce.

## Online Samples

### Javascript

I'm the maintainer of the [MessiJS](http://github.com/MessiJS/MessiJS)
Project. This is a good example of my JavaScript skills.

I am learning [Node.JS](http://nodejs.org/). I am also know
[Mocha](http://visionmedia.github.io/mocha/), [Grunt](http://gruntjs.com/),
[Gulp](http://gulpjs.com/) and [Coffeescript](http://coffeescript.org/).

### Ruby



I created a dynamic website for the
[Fox Valley Theological Society](http://github.com/dtedesigns/fvts.net)
using [Sinatra](http://www.sinatrarb.com/).  Eventually, I converted it to a [Jekyll](http://jekyllrb.com/) static site.

## Other Samples

This first snippet of code contains JavaScript and [jQuery](http://jquery.com/)
functions that control the dynamic scoring of my 2009 Annual Christmas
Quiz.  When activated, it scores the quiz and highlights both the
correct answers and the incorrect answers.

<script src="https://gist.github.com/kgust/04607f478d0fd37c1fcb.js?file=quiz_scoring.js"></script>

This second code sample is a [Kohana](http://kohanaframework.org/)
controller action from an internal web application. This is code
reuse at it's best. One single controller action to save four (easily
expanded to more) different types of form submissions; each to it's
own appropriate database table. The action uses Doctrine as the
database access layer (DBAL) and object relational mapping (ORM).

_NOTE: This shows my older coding style. Today, I'm an advocate of the
[PSR-2](http://www.php-fig.org/psr/psr-2/) code style standard._

<script src="https://gist.github.com/kgust/04607f478d0fd37c1fcb.js?file=kohana_controller_action.php"></script>

This view is from a [Kohana](http://kohanaframework.org/) web application.
This is the corresponding view for the controller. Views incorporate PHP variables with HTML markup.

Note the use of `<?php ?>` tags inside this older view. Today, I much prefer
how Symfony's [Twig](http://twig.sensiolabs.org/) and Laravel's
[Blade](http://laravel.com/docs/templates) templates incorporate logic and
variables into a view.

<script src="https://gist.github.com/kgust/04607f478d0fd37c1fcb.js?file=kohana_view.php"></script>
