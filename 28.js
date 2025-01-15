// Q28: Explain Event bubbling & Event Capturing in javascript.

//1) when an event (eg: event listener ) happens on an element, it first runs the handler on itself and then on its parents then all the way up to all ancestors [Event Bubbling].

//2) Its the opposite of event bubbling the event handler is first on its parent element and the on the element where it was actually wanted to fire the event handler. if theevent listener third parameter is set to 'TRUE' bubbling converts to event Capturing [Event Capturing].  