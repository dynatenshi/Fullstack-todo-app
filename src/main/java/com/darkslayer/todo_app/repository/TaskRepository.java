package com.darkslayer.todo_app.repository;

import com.darkslayer.todo_app.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
