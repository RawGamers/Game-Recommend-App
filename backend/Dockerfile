FROM openjdk:21-jdk
ARG JAR_FILE=build/libs/Game-Recommend-App-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} Game-Recommend-App.jar
ENTRYPOINT ["java","-jar","/Game-Recommend-App.jar"]
EXPOSE 8080