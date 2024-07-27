package com.example.gamerecommendapp.service;

import com.example.gamerecommendapp.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GameScrapService {

    private final Map<String, ScrapService> gameScrapServiceMap;

    private final ScrapService scrapService;
    public List<Game> getGameList(String category) {
        ScrapService steamWebService = gameScrapServiceMap.get("steamWeb");
        List<Game> gameList = steamWebService.scrapGame(category);

        return gameList;
    }
}
