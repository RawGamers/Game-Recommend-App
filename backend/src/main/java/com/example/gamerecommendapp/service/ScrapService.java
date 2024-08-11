package com.example.gamerecommendapp.service;

import com.example.gamerecommendapp.Game;

import java.util.List;

public interface ScrapService {
    public List<Game> scrapGame(String category);
}
