package com.darkslayer.todo_app.service;

import com.darkslayer.todo_app.dto.TaskUpdateRequest;
import com.darkslayer.todo_app.exception.TaskNotFoundException;
import com.darkslayer.todo_app.model.Task;
import com.darkslayer.todo_app.repository.TaskRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> findAll() {
        return repository.findAll();
    }

    public Task findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("No task with that id"));
    }

    @Transactional
    public Task create(Task task) {
        return repository.save(task);
    }

    @Transactional
    public Task update(Long id, TaskUpdateRequest request) {
        Task existingTask = findById(id);

        if (request.getTitle() != null) {
            existingTask.setTitle(request.getTitle());
        }
        if (request.getDescription() != null) {
            existingTask.setDescription(request.getDescription());
        }
        if (request.getCompleted() != null) {
            existingTask.setCompleted(request.getCompleted());
        }

        return repository.save(existingTask);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Transactional
    public Task toggleCompletion(Long id) {
        Task task = findById(id);
        task.toggleCompletion();
        return repository.save(task);
    }
}
