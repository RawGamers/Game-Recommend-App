package com.example.gamerecommendapp.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GameScrapService {

    private final Map<String, ScrapService> gameScrapServiceMap;

    private final ScrapService scrapService;
    public List<String> getGameList(String category) {
        ScrapService steamWebService = gameScrapServiceMap.get("SteamWeb");
        steamWebService.scrapGame();
    }
}
