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

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Override
    public List<Game> scrapGame(String category) {

        String url = baseUrl + category;

        WebDriver driver = new ChromeDriver();
        driver.get(url);

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2500)", "");

        List<Game> gameList = new ArrayList();
        try {
            Thread.sleep(3000);

            List<WebElement> elements = driver.findElements(By.cssSelector(".gASJ2lL_xmVNuZkWGvrWg"));

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
            log.error(e.getMessage());
        } finally {
            driver.close();
        }

        return gameList;
    }
}
