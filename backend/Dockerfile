# Stage 1: Build stage
FROM openjdk:21-slim AS build

# Set working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Make Gradle Wrapper executable and build the project
RUN chmod +x gradlew && ./gradlew bootJar

# Stage 2: Runtime stage
FROM openjdk:21-slim

# Install required packages
RUN apt-get update && apt-get install -y \
    firefox-esr \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Define Geckodriver version as a build argument
ARG GECKODRIVER_VERSION=0.35.0
RUN wget -O /tmp/geckodriver.tar.gz https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz \
    && tar -xzf /tmp/geckodriver.tar.gz -C /usr/bin \
    && chmod +x /usr/bin/geckodriver \
    && rm /tmp/geckodriver.tar.gz

# Copy the JAR file from the build stage
COPY --from=build /app/build/libs/*.jar /app/Game-Recommend-App.jar

# Expose the port your application will run on
EXPOSE 8080

# Set the command to run your application
ENTRYPOINT ["java", "-jar", "/app/Game-Recommend-App.jar"]