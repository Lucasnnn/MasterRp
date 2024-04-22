FROM openjdk:21-jdk-slim AS build
WORKDIR /app

RUN apt-get update && apt-get install -y maven

COPY pom.xml .
COPY src ./src

RUN mvn install

RUN mvn clean package test

COPY . .

FROM openjdk:21-jdk-slim
WORKDIR /app

COPY --from=build /app/target/MasterRp-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-Dspring.profiles.active=prod", "-jar", "app.jar"]