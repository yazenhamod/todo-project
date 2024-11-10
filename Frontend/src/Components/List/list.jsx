import React, { useEffect, useState } from 'react';

// CSS
import './list.css';

// Main Function
function List() {

    // Data
    const data = {
        userId: 0,
        title: 'List sample',
        tasks: [{
            name: 'Buy groceries',
            checked: false
        }, {
            name: 'Go to gym',
            checked: true
        }, {
            name: 'Finish the work',
            checked: false
        }
        ]
    }

    // States
    const [tasks, setTasks] = useState(data.tasks);

    const handleChange = (val, index) => {
        if (typeof val === 'boolean') {
            console.log('boolboolean');
            let nextTasks = tasks.map((task, i) => {
                if (i === index) {
                    return { ...task, checked: val };
                } else {
                    return { ...task };
                }
            });

            setTasks(nextTasks);
        } else {
            console.log('textextean')
            let nextTasks = tasks.map((task, i) => {
                if (i === index) {
                    return { ...task, name: val};
                } else {
                    return { ...task };
                }
            });

            setTasks(nextTasks);
        }
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return (
        <div className='list-outer-wrapper'>
            <div className='list-title-wrapper'>
                <input className='list-title' type='text' placeholder='List name' />
            </div>
            <div className='list-tasks-wrapper'>

                {data.tasks.map((task, i) =>
                    <div key={i}>
                        <input className='list-task-checkbox' type='checkbox' defaultChecked={task.checked} onChange={(e) => handleChange(e.target.checked, i)} />
                        <input className='list-task-label' type='text' placeholder={'Task no.' + (i + 1)} defaultValue={task.name} onChange={(e) => handleChange(e.target.value, i)} />
                    </div>
                )}
            </div>

        </div>
    );
}

export default List;


//
//  final purpose => when changing state, state will be changed.

