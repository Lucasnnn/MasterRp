FROM openjdk:17-jdk-slim AS build
WORKDIR /app

RUN apt-get update && apt-get install -y maven

COPY pom.xml .

RUN mvn install

COPY . .

RUN mvn clean package -DskipTests=true

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=build /app/target/test-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-Dspring.profiles.active=prod",  "-Dspring.config.location=classpath:/application.yml,file:/app/config/application.yml", "-jar", "app.jar"]