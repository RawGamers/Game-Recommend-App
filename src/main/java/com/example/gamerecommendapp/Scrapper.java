package com.example.gamerecommendapp;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class Scrapper {

    public List<Product> scrapSteamPage(String category) {
        // 카테고리를 steamDB에 전달하면서
        String url = "https://www.scrapingcourse.com/ecommerce/";

        Document doc = null;
        List<Product> productList = new ArrayList<>();

        try {
            doc = Jsoup
                    .connect(url)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
                    .header("Accept-Language", "*")
                    .get();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        Elements productElements = doc.select("li.product");
        for (Element productElement : productElements) {
            Product product = Product
                    .builder()
                    .url(productElement.selectFirst("a").attr("href"))
                    .image(productElement.selectFirst("img").attr("src"))
                    .name(productElement.selectFirst("h2").text())
                    .price(productElement.selectFirst("span").text())
                    .build();
            productList.add(product);
        }

        return productList;
    }
}
