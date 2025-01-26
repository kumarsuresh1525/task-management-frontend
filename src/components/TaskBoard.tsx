import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateTaskStatusAsync, deleteTaskAsync, fetchTasks } from '../store/taskSlice';
import { BoardContainer, Column, ColumnTitle, TaskCard, DeleteButton } from '../styles/components';
import { TaskStatus } from '../types/task';

const TaskBoard: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    await dispatch(updateTaskStatusAsync({
      id: draggableId,
      status: destination.droppableId as TaskStatus
    }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await dispatch(deleteTaskAsync(id));
    }
  };

  const columns = [TaskStatus.PENDING, TaskStatus.COMPLETED, TaskStatus.DONE];

  if (loading) {
    return <div>Loading...</div>;
  }
console.log(tasks)
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContainer>
        {columns.map((column) => (
          <Column key={column}>
            <ColumnTitle>{column}</ColumnTitle>
            <Droppable droppableId={column}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tasks
                    .filter((task) => task.status === column)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <TaskCard
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <DeleteButton onClick={() => handleDelete(task.id)}>
                              ×
                            </DeleteButton>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                          </TaskCard>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Column>
        ))}
      </BoardContainer>
    </DragDropContext>
  );
};

export default TaskBoard; 