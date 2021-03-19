const data = {
    tasks: {
        'task1': {id:'task1', content:'Take out the garbage'},
        'task2': {id:'task2', content: 'Cook dinner'},
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To Do',
            taskIds: ['task1', 'task2']
        }
    },
    //facilitate reordering columns
    columnOrder: ['column1'],
}

export default data