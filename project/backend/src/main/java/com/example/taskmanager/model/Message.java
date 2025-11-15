package com.example.taskmanager.model;

public class Message {
    private String name;
    private String email;
    private String message;

    // Default constructor
    public Message() {}

    // Parameterized constructor (optional)
    public Message(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    // Getters
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getMessage() { return message; }

    // Setters
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setMessage(String message) { this.message = message; }
}
