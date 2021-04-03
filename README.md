# Overview
This project will eventually be a full-stack kanban board. Right now, I'm familiarizing myself with react-beautiful-dnd. The tutorial can be found [here](https://egghead.io/lessons/react-set-up-a-react-environment-with-create-react-app)

# Approach
I'm starting this app by going through Alex Reardon's tutorial because draggable elements are a key feature of a kanban board, and I don't have a ton of practice integrating draggables into my apps. I chose to focus on react-beautiful-dnd over React drag-and-drop libraries because react-beautiful-dnd is built specifically for lists, which is essentially what I'm envisioning for my kanban board app.

I also wanted to start with a tutorial for my new app because one of the biggest pain points from my last app was that I didn't fully scope out the implications of building my frontend with React (e.g. accounting for the fact that virtual DOM updates are sent in batches to update the real DOM).

Ultimately, the goal of this repo is to go fast by starting slow.

# Key Learnings
## Performance Optimization
A good way to speed up the performance of your app is to re-render only when something changes - so if, for instance, I'm dragging a column, I don't need to re-render the tasks within the column because their order isn't impacted by the dragging of the column

## Beware of Refs
Functional components don't have instances, which means you can't use the ref attribute on functional components. You can use a ref attribute inside a functional component, but it needs to either refer to a DOM element or class component.
So while functional components offer clear benefits such as more concise code and the ability to use hooks to replace life cycle methods, I'm using class-based components for this project.

## Draggables, Droppables, and DragDropContext
These are they key features of react-beautiful-dnd that its drag-and-drop functionality
* DragDropContext: Basically a wrapper within which dragging and dropping can occur
* Droppable: An area a draggable can be dropped onto
* Draggable: What can be dragged around
