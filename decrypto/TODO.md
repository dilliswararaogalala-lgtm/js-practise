### DECRYPTO PLAN

- First build connections between players as two players in one team
- And then manage the game logic between the players in a team
- For that my connection storage structure be like

```js
const teams = [
  {
    teamId: 1,
    players: [
      {
        name: "player1",
        conn: Deno.conn,
        isHisChance: true,
      },
      {
        name: "player2",
        conn: Deno.conn,
        isHisChance: false,
      },
    ],
  },
  {
    teamId: 2,
    players: [
      {
        name: "player1",
        conn: Deno.conn,
        isHisChance: true,
      },
      {
        name: "player2",
        conn: Deno.conn,
        isHisChance: false,
      },
    ],
  },
];
```
