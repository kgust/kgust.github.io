---
layout: home
title: Code Samples
subtitle: Code samples from my projects
---
# {{posts.subtitle}}

These are some very simple examples of code that I've produced.
Code should be clear, consise, and written so that it is self-documenting
as much as possible. I take pride in all the code that I produce.

This first snippet of code contains JavaScript and jQuery functions
that control the dynamic scoring of my 2009 Post-Christmas Quiz.
When activated, it scores the quiz and highlights both the correct
answers and the incorrect answers.

{% gist 04607f478d0fd37c1fce quiz_scoring.js %}

This second code sample is a Kohana controller action from an
internal web application. This is code reuse at it's best. One
single controller action to save four (easily expanded to more)
different types of form submissions; each to it's own appropriate
database table. The action uses Doctrine as the database access
layer (DBAL) and object relational mapping (ORM).

{% gist 04607f478d0fd37c1fce kohana_controller_action.php %}

This particular view is from a Kohana web application. This is the
corresponding view for the controller. This is a example of how to
mix HTML markup with PHP variables.

{% gist 04607f478d0fd37c1fce kohana_view.html %}
