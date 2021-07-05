use memory_game;

db.dropDatabase();

db.players.insertMany([
    {
        "name": "Vitor Amandio",
        "games": []
      },
    {
        "name": "Calum Gunn",
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