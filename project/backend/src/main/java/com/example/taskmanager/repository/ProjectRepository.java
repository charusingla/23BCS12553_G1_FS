package com.example.taskmanager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.taskmanager.model.Project;

public interface ProjectRepository extends MongoRepository<Project, String> { }
