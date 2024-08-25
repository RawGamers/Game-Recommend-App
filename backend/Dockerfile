FROM openjdk:21

# Copy the JAR file into the container
ARG JAR_FILE=build/libs/Game-Recommend-App-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} /Game-Recommend-App.jar

# Expose port and define the entrypoint
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/Game-Recommend-App.jar"]