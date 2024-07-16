package com.example.gamerecommendapp.controller;

import com.example.gamerecommendapp.Product;
import com.example.gamerecommendapp.Scrapper;
import com.example.gamerecommendapp.service.GameScrapService;
import com.example.gamerecommendapp.service.ScrapService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GameController {

    private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    private final Scrapper scrapper;
    private final GameScrapService gameScrapService;

    @GetMapping("/games")
    public Product getAllGames(
            @RequestParam("category") String category
    ) {
        gameScrapService.getGameList(category);

        return product;
    }

}
