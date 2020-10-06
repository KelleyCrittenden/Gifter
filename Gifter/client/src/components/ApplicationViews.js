// A few things to note here. First, the <Switch> and <Route> components are ones we get from the npm module we just installed. The Switch component is going to look at the url and render the first route that is a match.
// Second thing to note is the presence of the exact attribute on the home route. Technically "/" will match every single route in our application since they all start like that. The exact attribute specifies that we only want to render this component then the url is exactly /
// Second thing to note is the <Route> component. If a url matches the value of the path attribute, the children of that <Route> will be what gets rendered. As we've seen before, URLs often have route params in them. The third route here is an example of a path with a route param: /posts/:id. Using the colon, we can tell the react router that this will be some id parameter. These are all examples of paths that would match this route:

// /posts/5

// /posts/12345

///posts/foo

import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostList />
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>
        </Switch>
    );
};

export default ApplicationViews;