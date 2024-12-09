# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Within the code, the sorting function takes $$V * logV$$ time to run, but since this is also within a while loop, it would take $$V^2 * logV$$ to run. Then of course there are the 2 other for loops, adding 2V to the complexity. So the final complexity would be $$O(V^2*logV + 2V)$$. Within this answer, we only get the vertices as variables, but these are somehwhat dependent on the edges with finding their actual values, just not for the complexity equation.


https://codedamn.com/news/nodejs/cannot-use-import-statement-outside-a-module

https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

I used the sources above for help with debugging as well as better understanding this exercise's objective. I also used ChatGPT to help to understand more about the needed algorithm.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
