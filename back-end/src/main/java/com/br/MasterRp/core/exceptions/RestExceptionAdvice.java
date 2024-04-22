package com.br.MasterRp.core.exceptions;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestExceptionAdvice {

    @Value("${master.token: valueNotAvailable}")
    private String tokenApp;

    @ExceptionHandler(value = CustomException.class)
    public ResponseEntity<ExceptionResponseDto> notFoundNotificationStrategy(RuntimeException runtimeException) {
        ExceptionResponseDto exception = new ExceptionResponseDto();
        exception.setMessage(runtimeException.getMessage());
        exception.setStatus(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(
                exception,
                HttpStatus.NOT_FOUND);
    }
}
