
1. What is the difference between getElementById,getElementsByClassName, and querySelector/querySelectorAll?

Answer:
 getElementById() → Selects one element by ID.
 getElementsByClassName() → Selects elements by class, returns a live HTMLCollection.
 querySelector() → Selects the first match using CSS selector.
querySelectorAll() → Selects all matching classes, returns a static NodeList.

2. How do you create and insert new elements in JavaScript?

Answer:
* By using document.createElement() 

3. What is event bubbling?

Answer:
When an event happens on an element, it bubbles up to its parent, then grandparent, and so on.

 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: I don't understand it properly thats why I seached in google.
Placing a single listener on a parent instead of all children.

Detects events using event.target.
It is useful because it give better performance, works on dynamic elements, reduces code.


5. What is the difference between preventDefault() and stopPropagation()?

Answer:

preventDefault() = Stops browser’s default action (e.g., link navigation).
stopPropagation() = Stops event from bubbling to parent elements.
Can use both together when needed.

