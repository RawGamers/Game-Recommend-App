FROM openjdk:21-slim

RUN apt-get update && apt-get install -y \
    firefox-esr \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

ARG GECKODRIVER_VERSION=0.33.0
RUN wget -O /tmp/geckodriver.tar.gz https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz \
    && tar -xzf /tmp/geckodriver.tar.gz -C /usr/bin \
    && chmod +x /usr/bin/geckodriver \
    && rm /tmp/geckodriver.tar.gz

# Copy Gradle Wrapper and build files
COPY gradle /app/gradle
COPY gradlew /app/
COPY build.gradle /app/
COPY settings.gradle /app/
WORKDIR /app

# Build the project
RUN chmod +x gradlew && ./gradlew build

# Copy the JAR file into the container
ARG JAR_FILE=build/libs/Game-Recommend-App-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} /Game-Recommend-App.jar

# Expose port and define the entrypoint
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/Game-Recommend-App.jar"]
