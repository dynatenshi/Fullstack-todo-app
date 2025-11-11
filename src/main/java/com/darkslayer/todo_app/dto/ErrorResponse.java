package com.darkslayer.todo_app.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
    private final String code;
    private final String message;
    private final LocalDateTime timeStamp;

    public ErrorResponse(String code, String message) {
        this.code = code;
        this.message = message;
        timeStamp = LocalDateTime.now();
    }

    public String getCode() {
        return code;
    }
    public String getMessage() {
        return message;
    }
    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }
}
