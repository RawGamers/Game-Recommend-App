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

        System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
        logger.info("scrapGame");
        String url = baseUrl + category;
        logger.info("url -> {}", url);

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--disable-default-apps");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--single-process");
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--ignore-ssl-errors=yes");
        options.addArguments("--ignore-certificate-errors");
        options.addArguments("--remote-debugging-port=9222");
        options.addArguments("--window-size=1920, 1080");

        WebDriver driver = new ChromeDriver(options);
        driver.get(url);

        logger.info("driver info {}", driver.getTitle());
        logger.info("driver info {}", driver.getCurrentUrl());

        List<WebElement> elements1 = driver.findElements(By.cssSelector(".content"));
        elements1.forEach((data) -> {
            logger.info("data {}", data);
        });


        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2500)", "");

        List<Game> gameList = new ArrayList();
        try {
            Thread.sleep(3000);

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
