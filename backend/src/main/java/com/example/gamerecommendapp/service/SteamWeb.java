package com.example.gamerecommendapp.service;

import com.example.gamerecommendapp.Game;
import com.example.gamerecommendapp.Product;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class SteamWeb implements ScrapService {

    private String baseUrl = "https://store.steampowered.com/category/";

    private final Logger logger = LoggerFactory.getLogger(getClass());


    private final String WEB_DRIVER_ID = "webdriver.chrome.driver";
    private String WEB_DRIVER_PATH = "chromedriver";

    @Override
    public List<Game> scrapGame(String category) {


        System.setProperty("webdriver.gecko.driver", "/usr/bin/geckodriver");

        logger.info("scrapGame");
        String url = baseUrl + category;
        logger.info("url -> {}", url);

        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");
        options.addArguments("--window-size=1920, 1080");

        WebDriver driver = new FirefoxDriver(options);
        driver.get(url);

        logger.info("driver info {}", driver.getTitle());
        logger.info("driver info {}", driver.getCurrentUrl());

        List<WebElement> elements1 = driver.findElements(By.cssSelector(".content"));
        elements1.forEach((data) -> {
            logger.info("data {}", data.getText());
        });


        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2500)", "");

        List<Game> gameList = new ArrayList();
        try {
            Thread.sleep(10000);

            List<WebElement> elements = driver.findElements(By.cssSelector(".gASJ2lL_xmVNuZkWGvrWg"));
            logger.info("elements {}", elements.toString());
            gameList = elements.stream()
                    .map(element -> {
                        String title = element.findElement(By.cssSelector(".StoreSaleWidgetTitle")).getText();
                        List<String> categories = element.findElements(By.cssSelector(("._2bkP-3b7dvr0a_qPdZEfHY > a")))
                                .stream()
                                .limit(5)
                                .map(WebElement::getText)
                                .collect(Collectors.toList());
                        String imageUrl = element.findElement(By.cssSelector("._2eQ4mkpf4IzUp1e9NnM2Wr")).getAttribute("src");

                        return Game.builder()
                                .title(title)
                                .categories(categories)
                                .url(imageUrl)
                                .build();
                    })
                    .collect(Collectors.toList());

        } catch (Exception e) {
            logger.error(e.getMessage());
        } finally {
            driver.close();
        }

        return gameList;
    }
}
