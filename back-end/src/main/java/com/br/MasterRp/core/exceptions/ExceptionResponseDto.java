package com.br.MasterRp.core.exceptions;

import org.springframework.http.HttpStatus;

public class ExceptionResponseDto {
    private String message;
    private HttpStatus status;

    // Getter and Setters

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }
}
