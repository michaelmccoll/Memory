use memory_game;

db.dropDatabase();

db.players.insertMany([
    {
        "name": "Lorna McColl",
        "games": []
      },
    {
        "name": "Mary McColl",
        "games": []
      },
    {
        "name": "Murray McColl",
        "games": []
      },
    {
        "name": "Michael McColl",
        "games": []
      }
]);